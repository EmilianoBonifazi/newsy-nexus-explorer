import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Brain, Filter, Map, PieChart, Tags } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '@/components/landing/Footer';
import { NewsItem, NewsFilter } from '@/types/news';

const NewsPage = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState<'list' | 'map' | 'graph'>('list');
  const [filters, setFilters] = useState<NewsFilter>({
    regions: [],
    topics: [],
    sources: [],
    dateRange: { start: null, end: null },
    sentiment: []
  });

  const newsItems: NewsItem[] = [
    {
      id: 'NEWS-001',
      source: 'Reuters',
      date: '2024-01-20',
      title: 'Global Markets Show Signs of Recovery',
      description: 'Major global markets showed strong signs of recovery today as investors respond positively to new economic data...',
      region: 'Global',
      topics: ['Economics', 'Markets', 'Finance'],
      sentiment: 'positive'
    },
    {
      id: 'NEWS-002',
      source: 'BBC News',
      date: '2024-01-20',
      title: 'New AI Breakthrough in Climate Research',
      description: 'Scientists have developed a new AI model that can predict climate patterns with unprecedented accuracy...',
      region: 'Europe',
      topics: ['Technology', 'Climate', 'Science'],
      sentiment: 'positive'
    },
    {
      id: 'NEWS-003',
      source: 'The Guardian',
      date: '2024-01-20',
      title: 'Tech Giants Announce Collaboration on Privacy Standards',
      description: 'Leading technology companies have joined forces to develop new privacy standards for user data protection...',
      region: 'North America',
      topics: ['Technology', 'Privacy', 'Business'],
      sentiment: 'neutral'
    }
  ];

  const handleAnalyze = (newsItem: NewsItem) => {
    navigate('/analysis', { state: { newsItem } });
  };

  const renderFilters = () => (
    <div className="bg-card p-4 rounded-lg mb-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Clear Filters
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Topics</label>
          <div className="flex flex-wrap gap-2">
            {['Technology', 'Economics', 'Climate'].map(topic => (
              <Button
                key={topic}
                variant="outline"
                size="sm"
                className={`${
                  filters.topics.includes(topic) ? 'bg-primary text-primary-foreground' : ''
                }`}
              >
                {topic}
              </Button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Regions</label>
          <div className="flex flex-wrap gap-2">
            {['Global', 'Europe', 'North America'].map(region => (
              <Button
                key={region}
                variant="outline"
                size="sm"
                className={`${
                  filters.regions.includes(region) ? 'bg-primary text-primary-foreground' : ''
                }`}
              >
                {region}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderViewToggle = () => (
    <div className="flex gap-2 mb-6">
      <Button
        variant={activeView === 'list' ? 'default' : 'outline'}
        onClick={() => setActiveView('list')}
      >
        <Tags className="h-4 w-4 mr-2" />
        List View
      </Button>
      <Button
        variant={activeView === 'map' ? 'default' : 'outline'}
        onClick={() => setActiveView('map')}
      >
        <Map className="h-4 w-4 mr-2" />
        Geographic View
      </Button>
      <Button
        variant={activeView === 'graph' ? 'default' : 'outline'}
        onClick={() => setActiveView('graph')}
      >
        <PieChart className="h-4 w-4 mr-2" />
        Topic Analysis
      </Button>
    </div>
  );

  const renderNewsCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsItems.map((item) => (
        <Card key={item.id} className="flex flex-col h-full">
          <CardHeader>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>{item.source}</span>
              <span>•</span>
              <span>{item.date}</span>
              <span>•</span>
              <span>{item.region}</span>
            </div>
            <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {item.topics.map(topic => (
                <span key={topic} className="text-xs bg-secondary px-2 py-1 rounded-full">
                  {topic}
                </span>
              ))}
            </div>
            <div className="flex gap-2 mt-auto">
              <Button variant="outline" size="sm">
                <ArrowRight className="h-4 w-4 mr-2" />
                Read
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleAnalyze(item)}>
                <Brain className="h-4 w-4 mr-2" />
                Analyze
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl font-bold">News Analysis Dashboard</h1>
        </div>
        
        {renderFilters()}
        {renderViewToggle()}
        
        {activeView === 'list' && renderNewsCards()}
        {activeView === 'map' && (
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Geographic Distribution</h2>
            <p className="text-muted-foreground">Map visualization coming soon...</p>
          </div>
        )}
        {activeView === 'graph' && (
          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Topic Analysis</h2>
            <p className="text-muted-foreground">Topic visualization coming soon...</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;