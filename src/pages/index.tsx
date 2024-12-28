import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import HowItWorks from '@/components/landing/HowItWorks';
import DemoSection from '@/components/landing/DemoSection';
import Benefits from '@/components/landing/Benefits';
import Footer from '@/components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20 gap-10">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Explore News Like Never Before
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover news across timelines, connect entities, and analyze multidimensional insights with AI-powered analysis.
            </p>
            <Link to="/news">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
        <FeaturesSection />
        <HowItWorks />
        <DemoSection />
        <Benefits />
        <div className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start?</h2>
          <div className="space-x-4">
            <Link to="/news">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Exploring
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;