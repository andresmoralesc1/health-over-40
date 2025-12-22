import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Hacked Aging',
  description: 'Read the Privacy Policy for Hacked Aging to understand how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-extrabold text-center mb-4 text-white">Privacy Policy</h1>
        <p className="text-sm text-zinc-500 text-center mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-white">Your Privacy is Paramount</h2>
            <p>At Hacked Aging, we are committed to protecting the privacy and security of our visitors. This Privacy Policy outlines the types of information we collect and how we use it.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
            <p>We may collect information from you when you visit our site, subscribe to our newsletter, or fill out a contact form. This may include:</p>
            <ul>
              <li>Name and email address (for newsletter subscriptions).</li>
              <li>Information you provide in the contact form.</li>
              <li>Usage data, such as IP address, browser type, and access times, to analyze trends and improve our site.</li>
          </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our service.</li>
              <li>Send you periodic newsletters and promotional emails (which you can opt out of at any time).</li>
              <li>Respond to your inquiries and provide customer support.</li>
              <li>Monitor the usage of our site to improve its content and functionality.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Data Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information. However, please remember that no method of transmission over the Internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Third-Party Services</h2>
            <p>Our site may use third-party services that have their own privacy policies. For example, analytics services and email marketing platforms. We are not responsible for the content or privacy practices of these third-party sites.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-white">Your Consent</h2>
            <p>By using our site, you consent to our Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <p>By email: <a href="mailto:privacy@hackedaging.com" className="text-blue-400">privacy@hackedaging.com</a></p>
          </section>
        </div>
      </div>
    </div>
  );
}