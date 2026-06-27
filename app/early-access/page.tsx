import EarlyAccessContent from "@/components/EarlyAccessContent";

export const metadata = {
    title: "Get early access — Momentum",
    description:
        "Join the waitlist for Momentum. Build habits that actually last — and be first in when we launch.",
};

export default function EarlyAccessPage() {

    return (
        <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white font-google-sans px-6">
            {/* Ambient indigo glow */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(70% 55% at 50% 45%, rgba(99,102,241,0.30) 0%, rgba(99,102,241,0.10) 40%, rgba(0,0,0,0) 75%)",
                }}
            />
            <div className="absolute top-0 inset-x-0 h-40 z-[1] bg-gradient-to-b from-black to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-40 z-[1] bg-gradient-to-t from-black to-transparent" />

            <EarlyAccessContent />
        </main>
    );
}