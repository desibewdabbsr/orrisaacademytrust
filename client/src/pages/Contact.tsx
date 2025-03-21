import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // This will be handled by Netlify Forms when deployed
      toast({
        title: 'Message Sent',
        description: 'Thank you for contacting us. We will get back to you soon.',
        variant: 'default',
      });
      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was a problem sending your message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Contact Us"
          subtitle="Have questions or want to get involved? Reach out to us."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 font-['Merriweather']">Get in Touch</h3>

            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="mt-8 space-y-6"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="How can we help you?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message..." 
                          rows={4} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-[#1E40AF] hover:bg-[#1D4ED8]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-md p-8 h-full">
            <h3 className="text-2xl font-bold text-gray-900 font-['Merriweather']">Our Information</h3>

            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1E40AF] text-white">
                    <MapPin />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Address</h4>
                  <p className="mt-1 text-gray-600">
                    At - Amalapada, 6th lane, <br />
                    Angul, Odisha, 759122
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1E40AF] text-white">
                    <Phone />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                  <p className="mt-1 text-gray-600">
                    +91 1234567890
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1E40AF] text-white">
                    <Mail />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <p className="mt-1 text-gray-600">
                    info@orrisaacademy.org
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#1E40AF] text-white">
                    <Clock />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Office Hours</h4>
                  <p className="mt-1 text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM <br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Our Location</h4>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-gray-500" />
                  <p className="text-gray-700">Google Maps will be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
