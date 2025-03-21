import SectionTitle from '@/components/common/SectionTitle';

const Terms = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Terms & Conditions"
          subtitle="Please read these terms carefully before using our services."
        />

        <div className="mt-12 prose prose-blue max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Orissa Academy Trust. These Terms and Conditions govern your use of our 
            website and services. By accessing our website or using our services, you agree to 
            be bound by these Terms and Conditions. If you disagree with any part of these terms, 
            please do not use our website or services.
          </p>

          <h2>2. Definitions</h2>
          <p>"Trust" refers to Orissa Academy Trust, a registered educational trust under the Indian Trusts Act, 1882.</p>
          <p>"Website" refers to the website operated by Orissa Academy Trust accessible at [website address].</p>
          <p>"Services" refers to educational services, programs, and activities provided by the Trust.</p>
          <p>"Donation" refers to voluntary financial contributions made to support the Trust's activities.</p>
          <p>"User," "You," and "Your" refers to the individual or entity accessing or using our website or services.</p>

          <h2>3. Use of Website</h2>
          <p>
            The content of this website is for general information and use only. It is subject to change without notice.
            This website may contain links to other websites which are not controlled by the Trust. The Trust has no 
            control over the nature, content, and availability of those sites. The inclusion of any links does not 
            necessarily imply a recommendation or endorse the views expressed within them.
          </p>

          <h2>4. Donations</h2>
          <p>
            All donations made to the Trust are voluntary and non-refundable, except as specified in our Refund Policy.
            The Trust reserves the right to utilize donations according to its priorities and needs, unless specifically 
            designated for a particular program or purpose by the donor and accepted as such by the Trust.
            Tax receipts for donations will be issued in accordance with the applicable Indian tax laws.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content published on this website, including but not limited to text, graphics, logos, images, and 
            software, is the property of Orissa Academy Trust or its content providers and is protected by Indian 
            and international copyright laws.
            Users may not reproduce, distribute, modify, or create derivative works of any material found on this 
            website without express written permission from the Trust.
          </p>

          <h2>6. Privacy Policy</h2>
          <p>
            Our Privacy Policy, which sets out how we use and protect any information that you give us when you use 
            this website, is incorporated by reference into these Terms and Conditions. Please review our Privacy 
            Policy to understand our practices.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            The Trust shall not be liable for any direct, indirect, incidental, consequential, or punitive damages 
            arising out of your access to, or use of, or inability to use this website or any errors or omissions in 
            the content of the website.
            The Trust does not warrant that the website or the server that makes it available are free of viruses or 
            other harmful components.
          </p>

          <h2>8. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Orissa Academy Trust, its trustees, officers, employees, 
            and agents from and against any and all claims, liabilities, damages, losses, or expenses, including 
            reasonable attorneys' fees and costs, arising out of or in any way connected with your access to or use of 
            this website.
          </p>

          <h2>9. Modifications to Terms and Conditions</h2>
          <p>
            The Trust reserves the right to modify these Terms and Conditions at any time without prior notice. Such 
            modifications shall be effective immediately upon posting on the website. Your continued use of the website 
            after such modifications will constitute acknowledgment and acceptance of the modified Terms and Conditions.
          </p>

          <h2>10. Governing Law and Jurisdiction</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any 
            dispute arising under these Terms and Conditions shall be subject to the exclusive jurisdiction of the 
            courts in Odisha, India.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            If you have any questions or concerns regarding these Terms and Conditions, please contact us at:<br />
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

export default Terms;
