import React from 'react';

const benefits = [
  "Discover news connections you never imagined",
  "Explore timelines and historical relevance effortlessly",
  "Leverage AI to gain meaningful insights",
  "Get a holistic view of the world's events",
];

const Benefits = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold">{index + 1}</span>
              </div>
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;