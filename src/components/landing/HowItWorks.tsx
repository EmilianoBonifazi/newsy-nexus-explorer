import React from 'react';
import { Search, Brain, ArrowRightCircle } from 'lucide-react';

const steps = [
  {
    title: "Select a News Topic",
    description: "Choose topics or areas of interest",
    icon: Search,
  },
  {
    title: "Analyze and Explore",
    description: "View timelines, link entities, and discover dimensions",
    icon: Brain,
  },
  {
    title: "Gain Insights",
    description: "Get AI-powered analysis and correlations",
    icon: ArrowRightCircle,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-xs">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;