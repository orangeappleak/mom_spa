'use client';

// components/WaitlistForm.jsx
import { useState } from 'react';
import { suggestEmail } from '@/lib/suggestEmail';

export default function WaitlistForm() {
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState(''); // honeypot — must stay empty
    const [status, setStatus] = useState('idle'); // idle | loading | success | error | already
    const [error, setError] = useState('');
    const [suggestion, setSuggestion] = useState('');

    function checkForTypo(value) {
        setSuggestion(suggestEmail(value) || '');
    }

    function applySuggestion() {
        setEmail(suggestion);
        setSuggestion('');
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (status === 'loading') return;

        // Run a typo check on submit too — if there's a likely fix, surface it
        // and hold off sending so they can correct it first.
        const maybeTypo = suggestEmail(email);
        if (maybeTypo) {
            setSuggestion(maybeTypo);
            return;
        }

        setStatus('loading');
        setError('');

        try {
            const res = await fetch('/api/join', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, company }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Something went wrong.');
            setStatus(data.alreadyJoined ? 'already' : 'success');
        } catch (err) {
            setError(err.message);
            setStatus('error');
        }
    }

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center text-center gap-3 py-4 font-google-sans">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/15 text-2xl">
                    🔥
                </div>
                <h3 className="text-xl font-bold text-white">You&apos;re on the list.</h3>
                <p className="text-sm text-white/60 max-w-xs leading-relaxed">
                    Check your inbox for a confirmation. Don&apos;t see it in a minute? You
                    may have mistyped your email — try again.
                </p>
            </div>
        );
    }

    if (status === 'already') {
        return (
            <div className="flex flex-col items-center text-center gap-3 py-4 font-google-sans">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/15 text-2xl">
                    ✓
                </div>
                <h3 className="text-xl font-bold text-white">You&apos;re already on the list.</h3>
                <p className="text-sm text-white/60 max-w-xs leading-relaxed">
                    Looks like you&apos;ve already signed up — we&apos;ll email you the moment early access opens.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="w-full font-google-sans">
            {/* Field + button row: pill-shaped, becomes a single unit on desktop */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 w-full">
                <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (suggestion) setSuggestion(''); // clear stale suggestion as they edit
                    }}
                    onBlur={(e) => checkForTypo(e.target.value)}
                    className="flex-1 rounded-full bg-white/[0.06] border border-white/15
                     px-5 py-3.5 text-base text-white placeholder-white/40
                     outline-none transition
                     focus:border-white/40 focus:bg-white/[0.09]
                     focus:ring-2 focus:ring-indigo-500/40"
                />

                {/* Honeypot */}
                <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="absolute left-[-9999px] h-px w-px opacity-0"
                />

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="rounded-full bg-white px-6 py-3.5 text-base font-bold text-black
                     whitespace-nowrap transition
                     hover:bg-white/90 active:scale-[0.98]
                     disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {status === 'loading' ? 'Joining…' : 'Get early access'}
                </button>
            </div>

            {/* Reserve space so the layout doesn't jump when a message appears */}
            <div className="min-h-[1.25rem] mt-2 px-1">
                {suggestion && (
                    <p className="text-sm text-white/70">
                        Did you mean{' '}
                        <button
                            type="button"
                            onClick={applySuggestion}
                            className="font-semibold text-indigo-300 underline underline-offset-2 hover:text-indigo-200"
                        >
                            {suggestion}
                        </button>
                        ?
                    </p>
                )}
                {status === 'error' && !suggestion && (
                    <p className="text-sm text-red-400">{error}</p>
                )}
            </div>
        </form>
    );
}