function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-between bg-gradient-to-br from-gray-900 via-blue-800 to-teal-600 p-8">
      {/* Text Content Section on the Left */}
      <div className="z-10 flex flex-col items-start justify-center text-white space-y-6 w-full lg:w-1/2">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Plan Your Extraordinary Life Together
        </h1>
        <p className="text-lg lg:text-xl max-w-lg">
          Share schedules, set reminders, and collaborate effortlessly with <b>ExtraordinaryJoBle</b>. Make every moment meaningful, planned, and unforgettable.
        </p>
        
        <div className="space-y-4">
          <a
            href="/signup"
            className="inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md shadow-md font-semibold transition-colors duration-200"
          >
            Get Started
          </a>
          <a
            href="/learn-more"
            className="inline-block px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-blue-900 text-white rounded-md font-semibold transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Image Section on the Right */}
      <div className="relative hidden lg:block lg:w-1/2 h-full">
        <img
          src="Designer (2).jpeg"
          alt="Couples planning together"
          className="w-full h-full object-cover opacity-80 rounded-l-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900 opacity-60 rounded-l-lg"></div>
      </div>
    </section>
  );
}

export default HeroSection;
