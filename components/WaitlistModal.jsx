'use client';

// components/WaitlistModal.jsx
//
// Controlled modal holding the waitlist form. Portals to document.body so it
// always covers the full screen, even with a transform-based smooth scroller.

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import WaitlistForm from './WaitlistForm';

export default function WaitlistModal({ open, onClose }) {
    // Close on Escape, and lock background scroll while open.
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [open, onClose]);

    if (!open) return null;

    return createPortal(
        <div onClick={onClose} role="dialog" aria-modal="true" style={overlay}>
            {/* stopPropagation so clicks inside the card don't close the modal */}
            <div onClick={(e) => e.stopPropagation()} style={card} className="waitlist-modal">
                <button onClick={onClose} aria-label="Close" style={closeBtn}>×</button>
                <h2 style={heading}>Get early access 🔥</h2>
                <p style={sub}>Join the waitlist and we&apos;ll send your TestFlight invite.</p>
                <WaitlistForm />
            </div>
        </div>,
        document.body
    );
}

const overlay = {
    position: 'fixed', inset: 0, zIndex: 9999,
    background: 'rgba(0,0,0,0.6)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: 20,
};
const card = {
    position: 'relative',
    background: '#161616', borderRadius: 20,
    padding: '32px 28px', width: '100%', maxWidth: 380,
};
const closeBtn = {
    position: 'absolute', top: 12, right: 16,
    background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)',
    fontSize: 26, lineHeight: 1, cursor: 'pointer',
};
const heading = { color: '#fff', fontSize: 22, fontWeight: 700, margin: '0 0 6px' };
const sub = { color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: '20px', margin: '0 0 20px' };