const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-transparent w-full max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-white">ExtraordinaryJoBle</h1>
      <nav className="flex space-x-6">
        <a href="#features" className="text-white hover:text-blue-300">Features</a>
        <a href="#testimonials" className="text-white hover:text-blue-300">Testimonials</a>
        <a href="#footer" className="text-white hover:text-blue-300">Contact</a>
        <a href="/login" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">Login</a>
      </nav>
    </header>
  );
};

export default Header;
