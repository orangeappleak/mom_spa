import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy — Momentum",
  description:
    "How Momentum collects, uses, and shares your information across the app and the checkindaily.app website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="Last updated: June 30, 2026">
      <p>
        This Privacy Policy explains how Karthik Appannagari ("we," "us," or "I")
        collects, uses, and shares information when you use the{" "}
        <strong>Momentum</strong> mobile application (the "App") and the{" "}
        <strong>checkindaily.app</strong> website (the "Site"), together the
        "Services."
      </p>
      <p>
        By using the Services, you agree to the practices described here. If you
        do not agree, please do not use the Services.
      </p>
      <p>
        <strong>Contact:</strong>{" "}
        <a href="mailto:redmango.karthik@gmail.com">
          redmango.karthik@gmail.com
        </a>
      </p>

      <h2>1. Who is responsible for your data</h2>
      <p>
        Momentum is operated by Karthik Appannagari, an individual developer
        based in New Jersey, United States. For the purposes of data protection
        laws such as the EU/UK GDPR, I am the "data controller" for the personal
        information described in this policy. Where I use third-party services to
        process data on my behalf (described in Section 6), those providers act
        as "processors" or "subprocessors."
      </p>

      <h2>2. Information we collect</h2>

      <h3>a. Information you provide</h3>
      <ul>
        <li>
          <strong>Account information.</strong> When you create an account, we
          collect your email address and a password. Passwords are handled by
          our authentication provider (Supabase) and are stored in hashed form;
          we never see or store your password in plain text.
        </li>
        <li>
          <strong>Profile information.</strong> A display name (which may default
          to the first part of your email), and optionally a timezone and
          appearance preference.
        </li>
        <li>
          <strong>Onboarding responses.</strong> During onboarding you may tell
          us your primary goal, the areas you want to improve (which can include
          fitness, sleep, mental health, hydration, nutrition, screen time, and
          productivity), your typical wake and sleep times, how much free time
          you have, your activity level, and your biggest challenge. This
          information is used to personalize your experience.
        </li>
        <li>
          <strong>Habit and check-in data.</strong> The habits you create (name,
          emoji, schedule, reminder time, color, and check-in window settings),
          your daily check-ins, optional notes you attach to a check-in, your
          streaks, XP, levels, and any commitments you start.
        </li>
        <li>
          <strong>Waitlist information.</strong> If you join the waitlist on
          checkindaily.app, we collect the email address you submit.
        </li>
      </ul>

      <h3>b. Information collected automatically</h3>
      <ul>
        <li>
          <strong>Technical and device information.</strong> When you use the
          Site, our hosting provider may automatically process standard technical
          data such as your IP address, browser type, and access times for
          security and operational purposes. We also use a privacy-friendly,
          cookieless analytics tool (Vercel Web Analytics) on the Site to measure
          aggregate traffic such as page views and referrers; it does not use
          cookies, does not track you across other websites, and does not collect
          personally identifiable information. The App relies on your device and
          our backend to function and does not include third-party analytics or
          advertising SDKs.
        </li>
        <li>
          <strong>Push notification token (future).</strong> If and when we
          enable remote push notifications, we will collect a device push token
          to deliver them. Reminder notifications in the current version are
          generated locally on your device.
        </li>
      </ul>

      <h3>c. Information we do not collect</h3>
      <p>
        Beyond the cookieless Site analytics described above, we do not use
        third-party advertising, crash-reporting, or cross-site tracking SDKs,
        and we do not sell your personal information. We do not access Apple
        Health / HealthKit data unless and until a future version offers that
        feature and you explicitly grant permission.
      </p>

      <h2>3. How we use your information</h2>
      <p>We use the information described above to:</p>
      <ul>
        <li>Create and maintain your account and authenticate you;</li>
        <li>
          Provide core functionality: tracking habits, check-ins, streaks, XP,
          levels, and commitments;
        </li>
        <li>
          Personalize your experience, including generating recommendations and
          insights (see Section 4);
        </li>
        <li>
          Send you local reminders and, in the future, remote notifications you
          have enabled;
        </li>
        <li>
          Operate social features such as friend requests and shared public
          habits (see Section 5);
        </li>
        <li>Maintain the security and integrity of the Services and prevent abuse;</li>
        <li>Respond to your requests and provide support;</li>
        <li>Comply with legal obligations.</li>
      </ul>
      <p>
        Our legal bases for processing (where the GDPR applies) are: performance
        of our contract with you (to provide the Services), your consent (for
        example, optional features and notifications), and our legitimate
        interests (such as keeping the Services secure).
      </p>

      <h2>4. AI-powered features and processing</h2>
      <p>
        Momentum offers, or will offer, features that use a third-party large
        language model provided by <strong>Groq</strong> to generate personalized
        content:
      </p>
      <ul>
        <li>
          <strong>Personalized onboarding plan.</strong> Your onboarding
          responses (such as your goal, focus areas, wake/sleep times, activity
          level, and stated challenge) may be sent to Groq through our backend to
          generate a personalized plan.
        </li>
        <li>
          <strong>Habit insights.</strong> Once a habit has enough check-in
          history, limited habit data (such as the habit name and your check-in
          and streak statistics) may be sent to Groq to generate insight cards
          about your progress.
        </li>
      </ul>
      <p>
        When this data is sent to Groq, it is processed to produce the feature
        output and is subject to Groq's own data-handling terms. We send only the
        data needed to generate the feature and do not send your password or full
        account record. AI-generated insights are informational only and are not
        professional, medical, psychological, or other expert advice.
      </p>

      <h2>5. Social features and information visible to others</h2>
      <p>Momentum includes social features. You should be aware that:</p>
      <ul>
        <li>
          Other users can search for accounts to send friend requests.{" "}
          <strong>Your display name may be visible to other users</strong>{" "}
          through friend search and friend-request screens so they can find and
          recognize you. Your email address is not shown to other users.
        </li>
        <li>
          Habits you explicitly mark as <strong>public</strong> can be viewed by
          your accepted friends, including the habit details and your progress on
          them. Habits are private by default unless you choose to make them
          public.
        </li>
      </ul>
      <p>
        If you would like us to limit this visibility for your account, contact
        us at the email above.
      </p>

      <h2>6. Service providers and subprocessors</h2>
      <p>
        We share information with the following third parties only as needed to
        operate the Services:
      </p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Data involved</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Supabase</strong>
              </td>
              <td>Database, authentication, and backend functions</td>
              <td>
                Account credentials, profile, habits, check-ins, streaks, XP,
                commitments, onboarding responses
              </td>
            </tr>
            <tr>
              <td>
                <strong>Groq</strong>
              </td>
              <td>AI generation of plans and insights</td>
              <td>
                Onboarding responses; habit name and check-in/streak statistics
              </td>
            </tr>
            <tr>
              <td>
                <strong>Resend</strong>
              </td>
              <td>Waitlist and transactional email delivery</td>
              <td>Email address you submit to the waitlist</td>
            </tr>
            <tr>
              <td>
                <strong>Vercel</strong>
              </td>
              <td>
                Hosting and privacy-friendly web analytics for checkindaily.app
              </td>
              <td>
                Standard technical/server data; cookieless, aggregate
                page-view analytics
              </td>
            </tr>
            <tr>
              <td>
                <strong>Apple</strong>
              </td>
              <td>
                App distribution, TestFlight, and (if enabled) in-app purchases
              </td>
              <td>Information governed by Apple's own privacy policy</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        These providers are authorized to use your information only to perform
        services for us. We encourage you to review each provider's own privacy
        policy.
      </p>
      <p>
        We do <strong>not</strong> sell your personal information, and we do not
        share it for cross-context behavioral advertising.
      </p>
      <p>
        We may also disclose information if required by law, to enforce our Terms
        of Service, or to protect the rights, safety, or property of our users or
        others.
      </p>

      <h2>7. Data retention</h2>
      <p>
        We retain your personal information for as long as your account is active
        or as needed to provide the Services. If you delete your account, we will
        delete or anonymize your personal data within a reasonable period, except
        where we are required to retain certain information to comply with legal
        obligations, resolve disputes, or enforce our agreements. Backups may
        persist for a limited additional period before being overwritten.
      </p>

      <h2>8. Your rights and choices</h2>
      <p>
        Depending on where you live, you may have some or all of the following
        rights:
      </p>
      <ul>
        <li>
          <strong>Access</strong> the personal information we hold about you;
        </li>
        <li>
          <strong>Correct</strong> inaccurate information;
        </li>
        <li>
          <strong>Delete</strong> your account and associated personal data;
        </li>
        <li>
          <strong>Export / portability</strong> of your data;
        </li>
        <li>
          <strong>Object to or restrict</strong> certain processing;
        </li>
        <li>
          <strong>Withdraw consent</strong> where processing is based on consent.
        </li>
      </ul>
      <p>
        <strong>California residents</strong> have rights under the CCPA/CPRA,
        including the right to know, delete, correct, and opt out of "sale" or
        "sharing" of personal information. We do not sell or share personal
        information as those terms are defined under California law, and we will
        not discriminate against you for exercising your rights.
      </p>
      <p>
        To exercise any of these rights, email{" "}
        <a href="mailto:redmango.karthik@gmail.com">
          redmango.karthik@gmail.com
        </a>
        . We will verify your request and respond within the timeframe required
        by applicable law. You may also delete most of your data directly within
        the App where account-deletion controls are provided.
      </p>

      <h2>9. Children's privacy</h2>
      <p>
        The Services are intended for users{" "}
        <strong>16 years of age and older</strong>. We do not knowingly collect
        personal information from anyone under 16. If you believe a child under
        16 has provided us with personal information, contact us and we will
        delete it.
      </p>

      <h2>10. Security</h2>
      <p>
        We use industry-standard measures to protect your information, including
        encryption in transit, hashed password storage handled by our
        authentication provider, and access controls on our database. No method
        of transmission or storage is completely secure, however, and we cannot
        guarantee absolute security.
      </p>

      <h2>11. International data transfers</h2>
      <p>
        We are based in the United States, and our service providers may process
        data in the United States and other countries. If you access the Services
        from outside the United States, you understand that your information may
        be transferred to, stored, and processed in the United States, where
        data-protection laws may differ from those in your country. Where
        required, we rely on appropriate safeguards for such transfers.
      </p>

      <h2>12. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will
        revise the "Last updated" date above and, where appropriate, notify you
        within the Services. Your continued use of the Services after an update
        constitutes acceptance of the revised policy.
      </p>

      <h2>13. Contact</h2>
      <p>
        If you have any questions about this Privacy Policy or your personal
        information, contact:
      </p>
      <p>
        <strong>Karthik Appannagari</strong>
        <br />
        Email:{" "}
        <a href="mailto:redmango.karthik@gmail.com">
          redmango.karthik@gmail.com
        </a>
      </p>
    </LegalPage>
  );
}