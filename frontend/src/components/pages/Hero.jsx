function HeroSection() {
  return (
    <section className="relative w-full h-auto md:h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-gray-900 via-blue-800 to-teal-600 p-8">
      {/* Text Content Section on the Left */}
      <div className="z-10 flex flex-col items-start justify-center text-white space-y-6 w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Plan Your Extraordinary Life Together
        </h1>
        <p className="text-base md:text-lg lg:text-xl max-w-lg mx-auto md:mx-0">
          Share schedules, set reminders, and collaborate effortlessly with <b>ExtraordinaryJoBle</b>. Make every moment meaningful, planned, and unforgettable.
        </p>

        <div className="space-y-4 flex flex-col items-center md:items-start">
          <a
            href="/signup"
            className="inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md shadow-md font-semibold transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Image Section on the Right */}
      <div className="relative w-full md:w-1/2 h-64 md:h-full flex items-center justify-center">
        <img
          src="Designer (1).jpeg"
          alt="Couples planning together"
          className="w-full h-full object-cover opacity-80 rounded-lg md:rounded-l-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-gray-900 opacity-60 rounded-lg md:rounded-l-lg"></div>
      </div>
    </section>
  );
}

export default HeroSection;
