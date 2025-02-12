import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-100 pt-16 pb-12">  {/* Light blue background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
          {/* Logo and About */}
          <div>
            <img 
              src="/iit.jpeg"  
              alt="IIT Labs Logo" 
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-gray-600">
              IITLabs offers the ‘AI’ cloud for Banks, Insurers, and Financial Services (BFSI) institutions, 
              providing access to curated AI APIs, advanced AI solutions, and robust AI governance tools to enable 
              the deployment of trustworthy and self-learning AI engines.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <MapPin size={18} className="mr-2 text-primary" />
                <span>24 Fairfield Ave, Albany, NY 12205, United States</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone size={18} className="mr-2 text-primary" />
                <span>+1 518-400-0755</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail size={18} className="mr-2 text-primary" />
                <span>info@IITLabs.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-red-300 text-white px-4 py-2 rounded-md hover:bg-red-400 transition-colors" 
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} IIT Labs Private Limited Company. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
