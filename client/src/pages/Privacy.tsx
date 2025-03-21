import SectionTitle from '@/components/common/SectionTitle';

const Privacy = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Privacy Policy"
          subtitle="How we collect, use, and protect your information."
        />

        <div className="mt-12 prose prose-blue max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Orissa Academy Trust ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, disclose, and safeguard your information when you visit our website or make 
            donations to our Trust. Please read this Privacy Policy carefully. By continuing to use our website, you 
            consent to the practices described in this policy.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            <strong>Personal Information:</strong> We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul>
            <li>Make a donation</li>
            <li>Register for an event or program</li>
            <li>Sign up for our newsletter</li>
            <li>Fill out a contact form</li>
            <li>Apply for a position or volunteer opportunity</li>
          </ul>
          <p>This information may include your name, email address, postal address, phone number, and payment information.</p>

          <p>
            <strong>Non-Personal Information:</strong> We may also collect non-personal information about you such as browser type, 
            IP address, and pages visited on our website. This information is collected using cookies and similar technologies.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul>
            <li>Process and acknowledge donations</li>
            <li>Communicate with you about our programs, events, and activities</li>
            <li>Send you newsletters or updates that you have requested</li>
            <li>Respond to your inquiries or requests</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
            <li>Generate reports and analyze donation patterns (in aggregated, anonymous form)</li>
          </ul>

          <h2>4. Disclosure of Your Information</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Service providers who assist us in operating our website and conducting our operations</li>
            <li>Government authorities if required by law</li>
            <li>Payment processors to process donations</li>
          </ul>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to third parties 
            for marketing purposes.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect the security of your personal 
            information. However, please note that no method of transmission over the Internet or electronic storage 
            is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>6. Your Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li>The right to access the personal information we have about you</li>
            <li>The right to request correction of inaccurate personal information</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to object to or restrict certain processing of your personal information</li>
            <li>The right to data portability</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
          </p>

          <h2>7. Children's Privacy</h2>
          <p>
            Our website and services are not directed to individuals under the age of 13. We do not knowingly collect 
            personal information from children under 13. If you become aware that a child has provided us with personal 
            information, please contact us using the information provided below.
          </p>

          <h2>8. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and store certain information. 
            Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct 
            your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept 
            cookies, you may not be able to use some portions of our website.
          </p>

          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
            Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy 
            periodically for any changes.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:<br />
            Orissa Academy Trust<br />
            At - Amalapada, 6th lane, Angul, Odisha, 759122<br />
            Email: orissaacademy1@gmail.com<br />
            Phone: +91 1234567890
          </p>

          <p className="text-sm text-gray-500 mt-8">Last updated: [Date]</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
