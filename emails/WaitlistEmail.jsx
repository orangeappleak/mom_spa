// emails/WaitlistEmail.jsx
//
// Waitlist confirmation email. Rendered and sent by Resend when someone joins.
// No invite link yet — TestFlight isn't live, so this just confirms the signup
// and sets the expectation that we'll email them when early access opens.

import {
    Html, Head, Preview, Body, Container,
    Heading, Text, Hr, Img,
} from '@react-email/components';

export default function WaitlistEmail() {
    return (
        <Html>
            <Head />
            <Preview>You&apos;re officially in — we&apos;ll email you the moment early access opens.</Preview>
            <Body style={body}>
                <Container style={container}>
                    <Img
                        src="https://checkindaily.app/Images/app_icon.png"
                        width="56"
                        height="56"
                        alt="Momentum"
                        style={icon}
                    />
                    <Heading style={heading}>You&apos;re on the list.</Heading>
                    <Text style={paragraph}>
                        Thanks for joining the Momentum waitlist — you&apos;re officially in.
                    </Text>
                    <Text style={paragraph}>
                        We&apos;re putting the finishing touches on the app right now. The moment
                        early access opens up, you&apos;ll be among the first to know — we&apos;ll
                        email you a link to get in.
                    </Text>
                    <Text style={paragraph}>
                        Nothing you need to do until then. Sit tight, and we&apos;ll be in touch soon.
                    </Text>

                    <Hr style={hr} />
                    <Text style={footer}>
                        You&apos;re receiving this because you signed up for Momentum early access.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

const body = {
    backgroundColor: '#0B0B0B',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    margin: 0,
    padding: '40px 0',
};
const container = {
    backgroundColor: '#161616',
    borderRadius: 20,
    padding: '40px 32px',
    maxWidth: 440,
    margin: '0 auto',
};
const icon = {
    width: 56,
    height: 56,
    borderRadius: 14,
    display: 'block',
    margin: '0 auto 16px',
};
const heading = {
    color: '#FFFFFF', fontSize: 24, fontWeight: 700,
    textAlign: 'center', margin: '0 0 16px',
};
const paragraph = {
    color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: '24px',
    textAlign: 'center', margin: '0 0 16px',
};
const hr = { borderColor: 'rgba(255,255,255,0.1)', margin: '28px 0' };
const footer = {
    color: 'rgba(255,255,255,0.35)', fontSize: 12, textAlign: 'center', margin: 0,
};