import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { DotPattern } from '@/components/icons';
import { donationAmounts } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from '@/components/ui/input';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const { toast } = useToast();

  const handleDonationClick = () => {
    // This will be connected to Cashfree payment gateway in the future
    const amount = selectedAmount === 0 ? customAmount : selectedAmount;
    toast({
      title: "Donation Processing",
      description: `Thank you for your donation of ₹${amount}. You will be redirected to the payment gateway.`,
    });
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Support Our Cause"
          subtitle="Your contribution helps us provide quality education to underprivileged children and strengthen our community programs."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 font-['Merriweather']">Why Your Support Matters</CardTitle>
                <CardDescription>
                  Your generous donation enables us to continue our mission of providing quality education to all.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-blue max-w-none">
                  <p>
                    At Orrisa Academy Trust, we believe that education is the most powerful tool for 
                    transforming lives and communities. Your support helps us make quality education 
                    accessible to underprivileged children across Odisha.
                  </p>
                  
                  <h4>How Your Donation Helps:</h4>
                  <ul>
                    <li>
                      <strong>₹500</strong> - Provides educational materials for one student for a month
                    </li>
                    <li>
                      <strong>₹1,000</strong> - Supports our digital literacy program for five students
                    </li>
                    <li>
                      <strong>₹2,500</strong> - Funds teacher training workshops to improve education quality
                    </li>
                    <li>
                      <strong>₹5,000</strong> - Helps maintain and upgrade our library and learning resources
                    </li>
                    <li>
                      <strong>₹10,000</strong> - Sponsors a scholarship for a deserving student for a term
                    </li>
                  </ul>

                  <h4>Your Impact:</h4>
                  <p>
                    Every donation, regardless of size, makes a significant difference in our ability 
                    to serve our community. Your generosity directly contributes to improving educational 
                    outcomes and creating opportunities for students who might otherwise be left behind.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 font-['Merriweather']">Donation Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-[#1E40AF] flex items-center justify-center">
                        <CheckCircle size={20} />
                      </span>
                      <span className="ml-3">Tax benefits under Section 80G of the Income Tax Act</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-[#1E40AF] flex items-center justify-center">
                        <CheckCircle size={20} />
                      </span>
                      <span className="ml-3">Regular updates on how your donation is making an impact</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-[#1E40AF] flex items-center justify-center">
                        <CheckCircle size={20} />
                      </span>
                      <span className="ml-3">Recognition in our annual report (for donations above ₹10,000)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-[#1E40AF] flex items-center justify-center">
                        <CheckCircle size={20} />
                      </span>
                      <span className="ml-3">Invitation to special events and programs at our campus</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader className="bg-[#1E40AF] text-white rounded-t-lg">
                <CardTitle className="text-xl font-bold">Make a Donation</CardTitle>
                <CardDescription className="text-gray-100">
                  Your generosity transforms lives through education
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-700">Choose donation amount:</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {donationAmounts.map((amount, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          onClick={() => {
                            setSelectedAmount(amount.value);
                            if (amount.value !== 0) setCustomAmount('');
                          }}
                          className={`${
                            selectedAmount === amount.value
                              ? 'bg-[#FCE7F3] border-[#BE185D] font-medium'
                              : ''
                          }`}
                        >
                          {amount.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {selectedAmount === 0 && (
                    <div>
                      <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-1">
                        Enter custom amount (₹):
                      </label>
                      <Input
                        id="customAmount"
                        type="number"
                        min="100"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                      />
                    </div>
                  )}

                  <div className="mt-2">
                    <label htmlFor="donorName" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name:
                    </label>
                    <Input
                      id="donorName"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="donorEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address:
                    </label>
                    <Input
                      id="donorEmail"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="donorPhone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number:
                    </label>
                    <Input
                      id="donorPhone"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button 
                  onClick={handleDonationClick}
                  className="w-full bg-[#BE185D] hover:bg-[#9D174D] text-white py-3 px-6 mb-4"
                  disabled={!selectedAmount || (selectedAmount === 0 && !customAmount)}
                >
                  Proceed to Donate
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  All donations are tax-deductible under Section 80G of the Income Tax Act. You will receive a receipt for your donation.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mt-16 bg-[#BE185D] text-white relative overflow-hidden rounded-lg">
          <div className="absolute opacity-10 top-0 right-0">
            <DotPattern width="404" height="404" />
          </div>
          <div className="relative p-8 md:p-12">
            <h3 className="text-2xl font-bold font-['Merriweather']">Other Ways to Support</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#9D174D] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Volunteer</h4>
                <p className="text-[#FBCFE8]">Share your skills and time by volunteering for our educational programs and community initiatives.</p>
              </div>
              
              <div className="bg-[#9D174D] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Sponsor a Program</h4>
                <p className="text-[#FBCFE8]">Support specific educational programs or initiatives that align with your interests and values.</p>
              </div>
              
              <div className="bg-[#9D174D] p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Corporate Partnership</h4>
                <p className="text-[#FBCFE8]">Explore corporate social responsibility opportunities to make a lasting impact on education.</p>
              </div>
            </div>
            
            <p className="mt-8 text-center">
              For more information on these opportunities, please contact us at <span className="font-semibold">donations@orrisaacademy.org</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
