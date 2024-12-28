import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">News Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Explore news across dimensions and time with AI-powered insights.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>Timeline Navigation</li>
              <li>Entity Linking</li>
              <li>Map Integration</li>
              <li>AI Analysis</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Github className="w-5 h-5" />
              <Twitter className="w-5 h-5" />
              <Mail className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 News Analysis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
