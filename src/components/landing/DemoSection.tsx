import React from 'react';
import { Card } from "@/components/ui/card";

const DemoSection = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">See It In Action</h2>
      <div className="max-w-4xl mx-auto">
        <Card className="aspect-video bg-secondary/20 flex items-center justify-center">
          <p className="text-muted-foreground">Interactive Demo Coming Soon</p>
        </Card>
      </div>
    </section>
  );
};

export default DemoSection;