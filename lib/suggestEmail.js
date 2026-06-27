// Suggests a correction when an email's domain looks like a typo of a
// common provider (e.g. "gmial.com" -> "gmail.com"). Returns the full
// suggested email string, or null if the domain looks fine / unknown.

const COMMON_DOMAINS = [
    "gmail.com", "googlemail.com", "yahoo.com", "hotmail.com",
    "outlook.com", "live.com", "icloud.com", "me.com", "aol.com",
    "proton.me", "protonmail.com", "msn.com",
];

// Levenshtein edit distance between two strings.
function distance(a, b) {
    const m = a.length, n = b.length;
    const d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
    for (let j = 0; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
        }
    }
    return d[m][n];
}

export function suggestEmail(email) {
    if (!email || !email.includes("@")) return null;
    const [local, domain] = email.split("@");
    if (!domain) return null;

    const lower = domain.toLowerCase();

    // Exact match on a known domain -> no suggestion needed.
    if (COMMON_DOMAINS.includes(lower)) return null;

    // Find the closest known domain within a small edit distance.
    let best = null;
    let bestDist = Infinity;
    for (const known of COMMON_DOMAINS) {
        const dist = distance(lower, known);
        if (dist < bestDist) {
            bestDist = dist;
            best = known;
        }
    }

    // Only suggest if it's close (1–2 edits). Further than that and we'd be
    // guessing wildly — better to stay quiet than nag on a legit rare domain.
    if (best && bestDist > 0 && bestDist <= 2) {
        return `${local}@${best}`;
    }
    return null;
}