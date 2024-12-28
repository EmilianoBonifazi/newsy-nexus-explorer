import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Timeline, Network, Globe, Layers } from 'lucide-react';

const features = [
  {
    title: "Timeline Navigation",
    description: "Navigate news across history and dimensions",
    icon: Timeline,
  },
  {
    title: "Entity Linking",
    description: "Explore relationships between key entities",
    icon: Network,
  },
  {
    title: "Map Integration",
    description: "Locate events and trends geographically",
    icon: Globe,
  },
  {
    title: "Multidimensional Analysis",
    description: "View news from scientific, social, political, and historical perspectives",
    icon: Layers,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;