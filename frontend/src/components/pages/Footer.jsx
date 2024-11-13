// Footer.jsx
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-300 py-10">
      <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side: Brand and Navigation Links */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-white mb-2">ExtraordinaryJoBle</h2>
          <p className="text-gray-300 mb-4">Connecting, Collaborating, and Creating Memories Together.</p>
          <div className="flex space-x-4">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#footer" className="hover:text-white">Contact</a>
          </div>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600 transition-colors duration-300">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition-colors duration-300">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-700 transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      {/* Bottom Footer - Copyright */}
      <div className="text-center mt-8 text-gray-400 text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} ExtraordinaryJoBle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
