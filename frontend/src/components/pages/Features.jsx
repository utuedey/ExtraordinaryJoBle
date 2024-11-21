const features = [
  { icon: '📅', title: 'Shared Calendar', description: 'Plan and track events with your partner.' },
  { icon: '💬', title: 'Chat', description: 'Seamless communication whenever you need it.' },
  { icon: '🔔', title: 'Reminders', description: 'Never miss an important date.' },
  { icon: '📷', title: 'Memory Sharing', description: 'Capture and share memories together.' },
];

const Features = () => {
  return (
    <section id="features" className="bg-white py-20 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
