import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Globe, Network, Clock, Layers, Search, Brain, ArrowRightCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import HowItWorks from '@/components/landing/HowItWorks';
import DemoSection from '@/components/landing/DemoSection';
import Benefits from '@/components/landing/Benefits';
import Footer from '@/components/landing/Footer';

const NewsPage = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">News Analysis Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
            <p className="text-muted-foreground">Start exploring the latest news and analysis.</p>
          </Card>
          {/* Add more cards for different news sections */}
        </div>
        <div className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore?</h2>
          <Link to="/news">
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

export default NewsPage;
