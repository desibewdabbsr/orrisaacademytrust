import { Link } from 'wouter';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold font-['Merriweather'] mb-4">Orrisa Academy Trust</h3>
            <p className="text-gray-400 mb-4">
              Dedicated to providing quality education and nurturing the potential of every student in Odisha.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/programs" className="text-gray-400 hover:text-white">Programs</Link></li>
              <li><Link href="/gallery" className="text-gray-400 hover:text-white">Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/donate" className="text-gray-400 hover:text-white">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/refund" className="text-gray-400 hover:text-white">Refund & Cancellation Policy</Link></li>
              <li><Link href="/shipping" className="text-gray-400 hover:text-white">Donation Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p className="flex items-center mb-2">
                <MapPin className="mr-2" size={16} />
                At - Amalapada, 6th lane, Angul, Odisha, 759122
              </p>
              <p className="flex items-center mb-2">
                <Phone className="mr-2" size={16} />
                +91 947173479
              </p>
              <p className="flex items-center mb-2">
                <Mail className="mr-2" size={16} />
                orrisaacademy1@gmail.com
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Orrisa Academy Trust. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <p className="text-gray-400 text-sm">
              Registered under the Indian Trusts Act, 1882
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
