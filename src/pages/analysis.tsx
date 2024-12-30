import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeft, Brain, ChartBar, MessageSquare } from 'lucide-react';
import { NewsItem } from '@/types/news';
import Footer from '@/components/landing/Footer';

const AnalysisPage = () => {
  const location = useLocation();
  const newsItem = location.state?.newsItem as NewsItem;

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-[400px]">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">No news item selected for analysis</p>
            <div className="mt-4 flex justify-center">
              <Link to="/news">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to News
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/news">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">News Analysis</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>{newsItem.title}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{newsItem.source}</span>
                <span>•</span>
                <span>{newsItem.date}</span>
                <span>•</span>
                <span>{newsItem.region}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{newsItem.description}</p>
              <div className="flex flex-wrap gap-2">
                {newsItem.topics.map(topic => (
                  <span key={topic} className="text-xs bg-secondary px-2 py-1 rounded-full">
                    {topic}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Sentiment Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="capitalize">{newsItem.sentiment}</span>
                  <div className={`px-2 py-1 rounded-full text-xs ${
                    newsItem.sentiment === 'positive' ? 'bg-green-100 text-green-800' :
                    newsItem.sentiment === 'negative' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {newsItem.sentiment.toUpperCase()}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChartBar className="h-5 w-5" />
                  Topic Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {newsItem.topics.map(topic => (
                    <div key={topic} className="flex items-center justify-between">
                      <span>{topic}</span>
                      <span className="text-muted-foreground text-sm">33%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Key Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Main focus on {newsItem.topics[0]}</li>
                  <li>{newsItem.sentiment.charAt(0).toUpperCase() + newsItem.sentiment.slice(1)} sentiment overall</li>
                  <li>Regional impact: {newsItem.region}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnalysisPage;