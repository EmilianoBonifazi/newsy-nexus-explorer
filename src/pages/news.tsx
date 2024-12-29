import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Globe, Network, Clock, Layers, Search, Brain, ArrowRightCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/landing/Footer';

const NewsPage = () => {
  const newsItems = [
    {
      id: 'NEWS-001',
      source: 'Reuters',
      date: '1/20/2024',
      title: 'Global Markets Show Signs of Recovery',
      description: 'Major global markets showed strong signs of recovery today as investors respond positively to new economic data...',
    },
    {
      id: 'NEWS-002',
      source: 'BBC News',
      date: '1/20/2024',
      title: 'New AI Breakthrough in Climate Research',
      description: 'Scientists have developed a new AI model that can predict climate patterns with unprecedented accuracy...',
    },
    {
      id: 'NEWS-003',
      source: 'The Guardian',
      date: '1/20/2024',
      title: 'Tech Giants Announce Collaboration on Privacy Standards',
      description: 'Leading technology companies have joined forces to develop new privacy standards for user data protection...',
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">News Analysis Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span>{item.source}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
                <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {item.description}
                </p>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Read
                  </Button>
                  <Button variant="outline" size="sm">
                    <Brain className="h-4 w-4 mr-2" />
                    Analyze
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;