import { Clock, Bell, Users, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'; // Social Media Icons from Lucide React

const LandingPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      
      {/* Header Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Site Logo" className="w-10 h-10" />
            <span className="text-white text-2xl font-bold">Extraordinary JoBle</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-white hover:text-gray-300">Features</a>
            <a href="#about" className="text-white hover:text-gray-300">About Us</a>
            <a href="#testimonials" className="text-white hover:text-gray-300">Testimonials</a>
          </nav>
          <a href="/login" className="bg-white text-indigo-600 hover:bg-gray-100 py-2 px-4 rounded-lg shadow-lg transition duration-300">Login</a>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 animate__animated animate__fadeIn">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
            Welcome to Extraordinary JoBle
          </h1>
          <p className="text-xl mb-8 animate__animated animate__fadeInUp">
            Simplify your life and boost productivity with our comprehensive scheduling app.
          </p>
          <a
            href="#features"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate__animated animate__fadeIn">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
              <Clock className="text-blue-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Schedule Management</h3>
              <p className="text-gray-600">
                Keep track of your daily, weekly, and monthly tasks effortlessly.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
              <Bell className="text-green-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Reminders & Notifications</h3>
              <p className="text-gray-600">
                Never miss an important task or event with timely reminders.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
              <Users className="text-purple-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Collaborative Planning</h3>
              <p className="text-gray-600">
                Share your schedules and plans with your loved ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-gray-900 via-indigo-700 to-purple-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p>
              Extraordinary JoBle is your trusted scheduling assistant, helping you simplify your daily tasks, set reminders, and collaborate with others seamlessly.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#features" className="hover:underline">Features</a></li>
              <li className="mb-2"><a href="#about" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="#testimonials" className="hover:underline">Testimonials</a></li>
              <li className="mb-2"><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: support@joble.com</p>
            <p>Phone: +123-456-7890</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-blue-500 hover:text-blue-700" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-600" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-blue-600 hover:text-blue-800" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-pink-600 hover:text-pink-800" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-sm">&copy; {new Date().getFullYear()} Extraordinary JoBle. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
