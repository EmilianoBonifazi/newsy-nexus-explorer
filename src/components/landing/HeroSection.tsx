import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-20 gap-10">
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          Explore News Like Never Before
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Discover news across timelines, connect entities, and analyze multidimensional insights with AI-powered analysis.
        </p>
        <Link href="/news">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </Link>
      </div>
      <div className="flex-1 relative h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20 animate-pulse"></div>
        <Globe className="w-full h-full p-10 text-primary" />
      </div>
    </div>
  );
};

export default HeroSection;