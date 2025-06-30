import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-20 pb-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">Last updated: May 8, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Welcome to Quantum Data Synergy ("Company", "we", "our", "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [quantumdatasynergy.com] or engage with our consulting services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">We may collect personal information that you provide directly to us, such as:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Contact Information: name, email address, phone number, company name.</li>
              <li>Business Information: project descriptions, data types, consulting goals.</li>
              <li>Billing Information: payment and invoicing data processed through secure providers.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Automatically collected data includes:</p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>Log Information: IP address, browser type, operating system, access time, and referring URLs.</li>
              <li>Cookies and Tracking: to support website functionality and user experience. (See Section 5)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>Provide and improve our consulting and data services.</li>
              <li>Respond to inquiries and deliver customer support.</li>
              <li>Manage our business operations and security.</li>
              <li>Fulfill legal obligations under applicable laws (Panama, GDPR, CCPA).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">We do not sell or rent your information. We may share it with:</p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>Service Providers: for hosting, analytics, communication, and payment processing.</li>
              <li>Legal Authorities: when required by law or to defend our rights.</li>
              <li>Business Transfers: in the event of a merger, acquisition, or asset sale.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">We use cookies and similar tools to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Monitor and improve site performance.</li>
              <li>Personalize content and user experience.</li>
              <li>Secure access and prevent fraud.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300">You may control cookies via your browser. Disabling them may affect functionality.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Data Retention</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We retain your data only as long as necessary for the purposes stated in this policy or as legally required.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Data Security</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We implement industry-standard administrative, technical, and physical security measures to safeguard your personal data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Your Rights</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">You have rights under Panama's Law 81, GDPR, and CCPA:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">a. Under Panama's Law 81 (Applies to Panama-based users):</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Right to access, rectify, oppose, or delete your personal data.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">b. Under GDPR (Applies to EU residents):</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Right to access and correct your data.</li>
              <li>Right to data portability.</li>
              <li>Right to restrict or object to processing.</li>
              <li>Right to withdraw consent at any time.</li>
              <li>Right to lodge a complaint with a supervisory authority.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">c. Under CCPA (Applies to California residents):</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Right to know what personal data we collect, use, or share.</li>
              <li>Right to request deletion of your personal data.</li>
              <li>Right to opt out of the sale of personal data (note: we do not sell your data).</li>
              <li>Right to non-discrimination for exercising privacy rights.</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300">
              To exercise your rights, contact us at:<br />
              📧 <a href="mailto:contact@quantumdatasynergy.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@quantumdatasynergy.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. International Data Transfers</h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you are accessing our services from outside Panama, your data may be transferred to and processed in Panama or other countries. We ensure such transfers comply with applicable legal requirements, including GDPR safeguards for EU users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Jurisdiction</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This Privacy Policy is governed by the laws of the Republic of Panama, without prejudice to the protections offered under other applicable privacy regulations such as GDPR and CCPA.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Third-Party Links</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our website may contain links to external websites. We are not responsible for their content or privacy practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Changes to This Policy</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may update this Privacy Policy periodically. The revised version will be posted with the updated date above.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Contact</h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you have questions or concerns about this policy, contact us at:<br />
              📧 <a href="mailto:contact@quantumdatasynergy.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@quantumdatasynergy.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;