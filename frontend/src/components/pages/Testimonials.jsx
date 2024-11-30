// Testimonials.jsx

const testimonials = [
  {
    name: 'Jane Doe',
    quote: 'ExtraordinaryJoBle has brought us closer than ever!',
    image: 'Designer.jpeg' // Replace with actual image paths
  },
  {
    name: 'John Smith',
    quote: 'A fantastic way to stay organized and connected.',
    image: 'Designer (4).jpeg' // Replace with actual image paths
  },
  {
    name: 'Emily Chen',
    quote: 'We love sharing memories and planning together.',
    image: 'Designer (1).jpeg' // Replace with actual image paths
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white text-gray-900 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s photo`}
                  className="w-16 h-16 rounded-full object-cover shadow-md"
                />
              </div>
              <p className="italic mb-4 text-gray-600">{testimonial.quote}</p>
              <h3 className="font-bold text-lg text-gray-700">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
