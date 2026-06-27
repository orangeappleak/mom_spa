// app/api/join/route.js
//
// App Router route handler. Renders the email to HTML ourselves (via
// @react-email/render) and sends that, instead of relying on Resend's
// built-in React rendering.

import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import WaitlistEmail from '../../../emails/WaitlistEmail';
// With the "@/" path alias: import WaitlistEmail from '@/emails/WaitlistEmail';

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
    console.log('RESEND_FROM =', process.env.RESEND_FROM);
    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
    }

    const { email, company, turnstileToken } = body || {};

    // Honeypot: real users never fill the hidden "company" field.
    if (company) {
        return NextResponse.json({ ok: true });
    }

    if (!email || !EMAIL_RE.test(email)) {
        return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 });
    }

    // Optional Cloudflare Turnstile check — only runs once you set the secret.
    if (process.env.TURNSTILE_SECRET_KEY) {
        const ok = await verifyTurnstile(turnstileToken, request);
        if (!ok) {
            return NextResponse.json({ error: 'Verification failed. Please try again.' }, { status: 400 });
        }
    }

    try {
        // 1. Check whether this email is already in the audience.
        let alreadyJoined = false;
        try {
            const existing = await resend.contacts.get({
                email,
                audienceId: process.env.RESEND_AUDIENCE_ID,
            });
            // If a contact comes back (and isn't an error), they're already on the list.
            if (existing?.data && !existing.error) {
                alreadyJoined = true;
            }
        } catch (e) {
            // get() throws/returns error when the contact doesn't exist — that's
            // the normal "new signup" path, so we swallow it and continue.
            console.log('Contact lookup: treating as new signup:', e?.message);
        }

        if (alreadyJoined) {
            return NextResponse.json(
                { ok: true, alreadyJoined: true },
                { status: 200 }
            );
        }

        // 2. New signup — add to the audience.
        try {
            await resend.contacts.create({
                email,
                audienceId: process.env.RESEND_AUDIENCE_ID,
                unsubscribed: false,
            });
        } catch (e) {
            console.warn('Contact create skipped:', e?.message);
        }

        // 3. Render and send the waitlist confirmation.
        const html = await render(WaitlistEmail());

        await resend.emails.send({
            from: process.env.RESEND_FROM,
            to: email,
            subject: "You're on the Momentum waitlist 🔥",
            html,
        });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error('join error:', err);
        return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
    }
}

async function verifyTurnstile(token, request) {
    if (!token) return false;
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
    const body = new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
    });
    if (ip) body.append('remoteip', ip);

    const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body,
    });
    const data = await r.json();
    return data.success === true;
}