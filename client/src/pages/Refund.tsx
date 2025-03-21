import SectionTitle from '@/components/common/SectionTitle';

const Refund = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Refund & Cancellation Policy"
          subtitle="Our policy regarding donations and program fee refunds."
        />

        <div className="mt-12 prose prose-blue max-w-none">
          <h2>1. Introduction</h2>
          <p>
            This Refund and Cancellation Policy outlines the guidelines and procedures for refunds and cancellations 
            related to donations made to Orrisa Academy Trust. We appreciate your generosity and support for our 
            educational initiatives. Please read this policy carefully to understand our practices regarding refunds 
            and cancellations.
          </p>

          <h2>2. Donations</h2>
          <h3>2.1 General Donations</h3>
          <p>
            Charitable donations to Orrisa Academy Trust are generally non-refundable. As a non-profit educational 
            trust, we rely on your donations to support our ongoing programs and initiatives. Once a donation is made, 
            it is typically considered final.
          </p>

          <h3>2.2 Exceptions for Donation Refunds</h3>
          <p>
            Notwithstanding the general non-refundable nature of donations, we recognize that there may be exceptional 
            circumstances where a refund might be considered:
          </p>
          <ul>
            <li>
              <strong>Duplicate Donations:</strong> If you accidentally make the same donation twice or in duplicate 
              within a short period, we will refund one of the duplicate donations upon request and verification.
            </li>
            <li>
              <strong>Technical Errors:</strong> If there was a technical error that resulted in an incorrect donation 
              amount being processed (such as an amount significantly different from what you intended to donate), we 
              will work with you to resolve the issue.
            </li>
            <li>
              <strong>Unauthorized Transactions:</strong> If a donation was made using your payment information without 
              your authorization, please contact us immediately, and we will cooperate with any investigation and process 
              a refund if appropriate.
            </li>
          </ul>

          <h3>2.3 Refund Request Procedure</h3>
          <p>
            To request a refund for a donation under the exceptional circumstances mentioned above, please contact us 
            within 30 days of making the donation. Please provide the following information:
          </p>
          <ul>
            <li>Your full name</li>
            <li>Date of donation</li>
            <li>Amount donated</li>
            <li>Transaction reference (if available)</li>
            <li>Reason for requesting a refund</li>
            <li>Any supporting documentation relevant to your request</li>
          </ul>
          <p>
            We will review your request and respond within 10 business days. If your refund request is approved, the 
            refund will be processed using the original method of payment, when possible. Please note that it may take 
            5-10 business days for the refund to appear in your account, depending on your payment provider.
          </p>

          <h2>3. Program and Event Fees</h2>
          <h3>3.1 Educational Programs and Events</h3>
          <p>
            For any educational programs, workshops, or events that require a registration fee, the following refund 
            policy applies:
          </p>
          <ul>
            <li>
              <strong>Cancellation by Participant:</strong> If you cancel your registration 14 or more days before the 
              program or event, you will receive a full refund minus a 10% administrative fee. Cancellations made 7-13 
              days before the program or event will receive a 50% refund. Cancellations made less than 7 days before the 
              program or event are non-refundable.
            </li>
            <li>
              <strong>Cancellation by the Trust:</strong> If Orrisa Academy Trust cancels a program or event, registrants 
              will be offered either a full refund or the option to transfer their registration to a future program or event.
            </li>
          </ul>

          <h3>3.2 Program Transfer</h3>
          <p>
            In some cases, instead of a refund, you may request to transfer your registration to another individual or to 
            a future program or event. Such requests will be considered on a case-by-case basis.
          </p>

          <h2>4. Contact Information</h2>
          <p>
            For any questions or concerns regarding this Refund and Cancellation Policy, or to submit a refund request, 
            please contact us at:<br />
            Orrisa Academy Trust<br />
            At - Amalapada, 6th lane, Angul, Odisha, 759122<br />
            Email: finance@orrisaacademy.org<br />
            Phone: +91 1234567890
          </p>

          <h2>5. Modifications to This Policy</h2>
          <p>
            Orrisa Academy Trust reserves the right to modify this Refund and Cancellation Policy at any time. Any changes 
            will be effective immediately upon posting on our website. We encourage you to review this policy periodically 
            to stay informed about our refund practices.
          </p>

          <p className="text-sm text-gray-500 mt-8">Last updated: [Date]</p>
        </div>
      </div>
    </div>
  );
};

export default Refund;
