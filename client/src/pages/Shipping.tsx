import SectionTitle from '@/components/common/SectionTitle';

const Shipping = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Donation Policy"
          subtitle="Information about how we handle and process donations."
        />

        <div className="mt-12 prose prose-blue max-w-none">
          <h2>1. Introduction</h2>
          <p>
            This Donation Policy outlines the terms, conditions, and procedures related to donations made to 
            Orrisa Academy Trust. As an educational trust, we rely on the generosity of donors to support our 
            mission of providing quality education and nurturing the potential of every student in Odisha. This 
            policy is designed to ensure transparency and accountability in our donation process.
          </p>

          <h2>2. Types of Donations</h2>
          <h3>2.1 Monetary Donations</h3>
          <p>
            Orrisa Academy Trust accepts monetary donations through various channels, including:
          </p>
          <ul>
            <li>Online donations through our website</li>
            <li>Bank transfers</li>
            <li>Cheques or demand drafts</li>
            <li>Cash donations (receipted at our office)</li>
          </ul>

          <h3>2.2 In-Kind Donations</h3>
          <p>
            We also welcome in-kind donations such as:
          </p>
          <ul>
            <li>Books and educational materials</li>
            <li>Computers and technological equipment</li>
            <li>Furniture for educational facilities</li>
            <li>Other resources that support our educational programs</li>
          </ul>
          <p>
            For in-kind donations, please contact us before sending or delivering items to ensure that we can 
            effectively use and properly acknowledge your contribution.
          </p>

          <h2>3. Use of Donations</h2>
          <p>
            Donations to Orrisa Academy Trust are used to support our educational programs and initiatives, including:
          </p>
          <ul>
            <li>Providing educational resources and materials</li>
            <li>Funding scholarship programs for underprivileged students</li>
            <li>Improving classroom facilities and learning environments</li>
            <li>Supporting teacher training and professional development</li>
            <li>Facilitating community outreach and cultural programs</li>
          </ul>
          <p>
            Donors may designate their contributions for specific programs or purposes. We make every effort to honor 
            such designations, provided they align with our mission and operational capabilities.
          </p>

          <h2>4. Tax Benefits</h2>
          <p>
            Donations to Orrisa Academy Trust are eligible for tax deductions under Section 80G of the Income Tax Act 
            of India. Upon receiving your donation, we will issue an official receipt that can be used for tax purposes. 
            Please consult with your tax advisor regarding the specific tax implications of your donation.
          </p>

          <h2>5. Donation Processing</h2>
          <h3>5.1 Online Donations</h3>
          <p>
            Online donations are processed through secure payment gateways. The following information applies to 
            online donations:
          </p>
          <ul>
            <li>All online transactions are encrypted and secure.</li>
            <li>You will receive an automatic email confirmation of your donation.</li>
            <li>Official tax receipts will be sent within 7 business days of your donation.</li>
          </ul>

          <h3>5.2 Processing Time</h3>
          <p>
            Please allow the following processing times for different types of donations:
          </p>
          <ul>
            <li>Online donations: Processed within 1-2 business days</li>
            <li>Bank transfers: Processed within 3-5 business days after the transfer is confirmed</li>
            <li>Cheques/demand drafts: Processed within 7-10 business days after receipt</li>
          </ul>

          <h2>6. Donor Recognition</h2>
          <p>
            Orrisa Academy Trust recognizes and appreciates the support of our donors in the following ways:
          </p>
          <ul>
            <li>Acknowledgment in our annual reports (with donor permission)</li>
            <li>Recognition on our donor wall for significant contributions</li>
            <li>Invitations to special events and programs</li>
          </ul>
          <p>
            We respect our donors' privacy and will not publicly recognize any donor who wishes to remain anonymous.
          </p>

          <h2>7. Donor Privacy</h2>
          <p>
            Orrisa Academy Trust is committed to protecting the privacy of our donors. We do not sell, trade, or 
            share donors' personal information with anyone else, nor do we send donor mailings on behalf of other 
            organizations. Please refer to our Privacy Policy for more information on how we collect, use, and 
            protect your information.
          </p>

          <h2>8. Contact Information</h2>
          <p>
            For questions, concerns, or additional information regarding donations, please contact us at:<br />
            Orrisa Academy Trust<br />
            At - Amalapada, 6th lane, Angul, Odisha, 759122<br />
            Email: donations@orrisaacademy.org<br />
            Phone: +91 1234567890
          </p>

          <h2>9. Modifications to This Policy</h2>
          <p>
            Orrisa Academy Trust reserves the right to modify this Donation Policy at any time. Any changes will be 
            effective immediately upon posting on our website. We encourage you to review this policy periodically 
            to stay informed about our donation practices.
          </p>

          <p className="text-sm text-gray-500 mt-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
