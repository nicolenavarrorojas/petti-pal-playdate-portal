
import { PawPrint, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-petti-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo section */}
          <div className="col-span-1">
            <div className="flex items-center">
              <PawPrint className="h-8 w-8 text-petti-primary" />
              <span className="ml-2 text-2xl font-bold text-white">Petti</span>
            </div>
            <p className="mt-4 text-gray-300">
              Professional pet services for your furry friends. Grooming, walking, and sitting with love and care.
            </p>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-petti-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-petti-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-petti-primary">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-petti-primary">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-petti-primary cursor-pointer">
                Pet Grooming
              </li>
              <li className="text-gray-300 hover:text-petti-primary cursor-pointer">
                Pet Walking
              </li>
              <li className="text-gray-300 hover:text-petti-primary cursor-pointer">
                Pet Sitting
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-2 text-petti-primary" />
                <span>info@petti.com</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-2 text-petti-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2 text-petti-primary" />
                <span>123 Pet Lane, Pawsville</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Petti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
