export interface NewsItem {
  id: string;
  source: string;
  date: string;
  title: string;
  description: string;
  region: string;
  topics: string[];
  sentiment: 'positive' | 'negative' | 'neutral';
  relatedArticles?: string[];
}

export type NewsFilter = {
  regions: string[];
  topics: string[];
  sources: string[];
  dateRange: {
    start: string | null;
    end: string | null;
  };
  sentiment: ('positive' | 'negative' | 'neutral')[];
};