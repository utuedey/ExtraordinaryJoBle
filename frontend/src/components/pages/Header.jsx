import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import the menu icons from lucide-react

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-6 bg-transparent w-full max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-white">ExtraordinaryJoBle</h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <a href="#features" className="text-white hover:text-blue-300">Features</a>
        <a href="#testimonials" className="text-white hover:text-blue-300">Testimonials</a>
        <a href="#footer" className="text-white hover:text-blue-300">Contact</a>
        <a href="/login" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">Login</a>
      </nav>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-white shadow-lg md:hidden">
          <nav className="flex flex-col items-center space-y-4 p-6">
            <a href="#features" className="hover:text-blue-300" onClick={toggleMenu}>Features</a>
            <a href="#testimonials" className="hover:text-blue-300" onClick={toggleMenu}>Testimonials</a>
            <a href="#footer" className="hover:text-blue-300" onClick={toggleMenu}>Contact</a>
            <a href="/login" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-center" onClick={toggleMenu}>Login</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
