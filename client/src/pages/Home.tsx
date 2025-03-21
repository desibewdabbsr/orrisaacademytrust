import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SectionTitle from '@/components/common/SectionTitle';
import { WavePattern } from '@/components/icons';
import { programs, team, testimonials, galleryImages, newsItems } from '@/lib/data';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeGalleryTab, setActiveGalleryTab] = useState('all');
  const [selectedDonationAmount, setSelectedDonationAmount] = useState<number | null>(null);

  const handlePreviousTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const filteredGalleryImages = activeGalleryTab === 'all' 
    ? galleryImages.slice(0, 8) 
    : galleryImages.filter(img => img.category === activeGalleryTab).slice(0, 8);

  return (
    <div className="font-inter text-gray-800 bg-gray-50">
      {/* Hero Section */}
      <section id="home" className="relative bg-[#1E40AF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
            <div className="mt-10 mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl font-['Merriweather']">
                <span className="block">Empowering Futures Through</span>
                <span className="block text-[#FCD34D]">Education &amp; Excellence</span>
              </h1>
              <p className="mt-6 text-xl text-gray-100 max-w-md mx-auto">
                Dedicated to providing quality education and nurturing the potential of every student in Odisha.
              </p>
              <div className="mt-10 flex justify-center space-x-4">
                <Link href="/about">
                  <Button size="lg" variant="secondary" className="text-[#1E40AF]">
                    Learn More
                  </Button>
                </Link>
                <Link href="/donate">
                  <Button size="lg" className="bg-[#BE185D] hover:bg-[#9D174D] text-white">
                    Support Our Cause
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="relative h-16 overflow-hidden">
            <WavePattern className="absolute inset-0 h-full w-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="About Orissa Academy Trust"
            subtitle="Fostering educational excellence and community development in Odisha since 2005."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Students in a classroom" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 font-['Merriweather']">Our Mission</h3>
              <p className="mt-4 text-gray-600">
                To empower underserved communities through quality education, skill development, and cultural enrichment, creating pathways for personal growth and social development across Odisha.
              </p>

              <h3 className="mt-8 text-2xl font-bold text-gray-900 font-['Merriweather']">Our Vision</h3>
              <p className="mt-4 text-gray-600">
                To transform lives through education and become a catalyst for positive social change in Odisha, creating a community where every individual has the opportunity to realize their full potential.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <div className="text-[#F59E0B] mb-2">
                    <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Quality Education</h4>
                  <p className="mt-2 text-sm text-gray-600">Providing accessible, high-quality education to all.</p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <div className="text-[#F59E0B] mb-2">
                    <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Community Support</h4>
                  <p className="mt-2 text-sm text-gray-600">Building stronger communities through education and outreach.</p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <div className="text-[#F59E0B] mb-2">
                    <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Cultural Values</h4>
                  <p className="mt-2 text-sm text-gray-600">Preserving and promoting cultural heritage and values.</p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <div className="text-[#F59E0B] mb-2">
                    <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900">Sustainable Growth</h4>
                  <p className="mt-2 text-sm text-gray-600">Creating lasting positive impact for future generations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Educational Programs"
            subtitle="We offer a diverse range of programs designed to nurture intellectual growth and personal development."
          />

          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {programs.map((program) => (
              <div key={program.id} className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-48 bg-gray-200 aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={program.image} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    alt={program.title} 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 font-['Merriweather'] group-hover:text-[#1E40AF] transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-gray-600">
                    {program.description}
                  </p>
                  <div className="mt-5">
                    <Link href="/programs">
                      <a className="inline-flex items-center text-sm font-medium text-[#1E40AF] hover:text-[#1D4ED8]">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Testimonials"
            subtitle="Hear from students, parents, and community members about the impact of our work."
          />

          <div className="mt-16 max-w-5xl mx-auto">
            <div className="testimonial-slider">
              {/* Current testimonial */}
              <div className="relative bg-white px-6 py-10 rounded-xl shadow-md overflow-hidden md:px-12">
                <div className="absolute top-0 left-0 transform -translate-y-4 -translate-x-4 h-32 w-32 text-primary-100 opacity-20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="h-32 w-32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <div className="relative flex flex-col sm:flex-row items-center">
                  <div className="sm:mr-8 mb-6 sm:mb-0 flex-shrink-0">
                    <img 
                      className="h-24 w-24 rounded-full object-cover" 
                      src={testimonials[activeTestimonial].image} 
                      alt={`${testimonials[activeTestimonial].name}'s testimonial`} 
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 italic text-lg leading-relaxed">
                      "{testimonials[activeTestimonial].content}"
                    </p>
                    <div className="mt-4">
                      <p className="text-gray-900 font-semibold font-['Merriweather']">{testimonials[activeTestimonial].name}</p>
                      <p className="text-sm text-gray-500">{testimonials[activeTestimonial].role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation controls */}
              <div className="mt-8 flex justify-center space-x-4">
                <Button
                  onClick={handlePreviousTestimonial}
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex space-x-2 items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-3 w-3 rounded-full ${
                        index === activeTestimonial ? 'bg-[#1E40AF]' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <Button
                  onClick={handleNextTestimonial}
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Gallery"
            subtitle="Glimpses of our educational initiatives, events, and community activities."
          />

          <div className="mt-8 text-center">
            <Tabs defaultValue="all" onValueChange={setActiveGalleryTab}>
              <TabsList className="inline-flex rounded-md">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="campus">Campus</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGalleryImages.map((image) => (
              <div key={image.id} className="gallery-item overflow-hidden rounded-lg shadow-md">
                <a href="#" className="block relative h-0 pb-[75%] overflow-hidden">
                  <img 
                    src={image.image} 
                    alt={image.alt} 
                    className="absolute inset-0 h-full w-full object-cover transform hover:scale-110 transition-transform duration-500" 
                  />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/gallery">
              <Button>
                View More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-16 bg-[#BE185D] text-white relative overflow-hidden">
        <div className="absolute opacity-10 top-0 right-0">
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
            <defs>
              <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-['Merriweather'] sm:text-4xl">Support Our Cause</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[#FBCFE8]">
              Your contribution helps us provide quality education to underprivileged children and strengthen our community programs.
            </p>
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 bg-[#9D174D]">
                <h3 className="text-2xl font-bold text-white font-['Merriweather']">How Your Donation Helps</h3>
                <ul className="mt-6 space-y-4 text-[#FBCFE8]">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-[#FCD34D] flex items-center justify-center">
                      <CheckCircle size={20} />
                    </span>
                    <span className="ml-3">Provides educational materials and resources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-[#FCD34D] flex items-center justify-center">
                      <CheckCircle size={20} />
                    </span>
                    <span className="ml-3">Supports scholarship programs for underprivileged students</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-[#FCD34D] flex items-center justify-center">
                      <CheckCircle size={20} />
                    </span>
                    <span className="ml-3">Improves classroom facilities and learning environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-[#FCD34D] flex items-center justify-center">
                      <CheckCircle size={20} />
                    </span>
                    <span className="ml-3">Funds teacher training and professional development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-[#FCD34D] flex items-center justify-center">
                      <CheckCircle size={20} />
                    </span>
                    <span className="ml-3">Enables community outreach and cultural programs</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-8 md:p-12 bg-white text-gray-800">
                <h3 className="text-2xl font-bold text-[#BE185D] font-['Merriweather']">Make a Donation</h3>
                <p className="mt-4 text-gray-600">
                  Your generosity makes a significant difference in the lives of our students and community.
                </p>
                
                <div className="mt-8">
                  <p className="mb-4 font-semibold text-gray-700">Choose donation amount:</p>
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {[500, 1000, 2500, 5000, 10000, "Custom"].map((amount, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        onClick={() => setSelectedDonationAmount(typeof amount === 'number' ? amount : 0)}
                        className={`py-2 ${
                          (typeof amount === 'number' && selectedDonationAmount === amount) ||
                          (amount === 'Custom' && selectedDonationAmount === 0)
                            ? 'bg-[#FCE7F3] border-[#BE185D] font-medium'
                            : ''
                        }`}
                      >
                        {typeof amount === 'number' ? `₹${amount.toLocaleString()}` : amount}
                      </Button>
                    ))}
                  </div>
                  
                  <Link href="/donate">
                    <Button 
                      className="mt-6 w-full bg-[#BE185D] hover:bg-[#9D174D] text-white py-3 px-6"
                    >
                      Donate Now
                    </Button>
                  </Link>
                  
                  <p className="mt-4 text-sm text-gray-500 text-center">
                    All donations are tax-deductible under Section 80G of the Income Tax Act.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="News & Events"
            subtitle="Stay updated with the latest happenings at Orissa Academy Trust."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3 sm:grid-cols-2">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    className="w-full h-48 object-cover" 
                    src={item.image} 
                    alt={item.title} 
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-[#BE185D]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 font-['Merriweather'] mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a href="#" className="inline-flex items-center text-[#1E40AF] hover:text-[#1D4ED8]">
                    Read more
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" className="border-[#1E40AF] text-[#1E40AF]">
              View All News
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Contact Us"
            subtitle="Have questions or want to get involved? Reach out to us."
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 font-['Merriweather']">Get in Touch</h3>

              <form className="mt-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      className="mt-1 py-3 px-4 block w-full shadow-sm focus:ring-[#1E40AF] focus:border-[#1E40AF] border-gray-300 rounded-md" 
                      placeholder="John Doe" 
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      className="mt-1 py-3 px-4 block w-full shadow-sm focus:ring-[#1E40AF] focus:border-[#1E40AF] border-gray-300 rounded-md" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    id="subject" 
                    className="mt-1 py-3 px-4 block w-full shadow-sm focus:ring-[#1E40AF] focus:border-[#1E40AF] border-gray-300 rounded-md" 
                    placeholder="How can we help you?" 
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    className="mt-1 py-3 px-4 block w-full shadow-sm focus:ring-[#1E40AF] focus:border-[#1E40AF] border-gray-300 rounded-md" 
                    placeholder="Your message..." 
                  />
                </div>

                <div>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#1E40AF] hover:bg-[#1D4ED8]"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
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
                      +91 947173479
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
                      orrisaacademy1@gmail.com
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
