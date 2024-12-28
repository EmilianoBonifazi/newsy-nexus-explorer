import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Globe, Network, Clock, Layers, Search, Brain, ArrowRightCircle } from 'lucide-react';
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
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <DemoSection />
        <Benefits />
        <div className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore?</h2>
          <Link href="/news">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Analyzing News <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
