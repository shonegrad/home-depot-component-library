import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Clock, 
  User,
  Calendar,
  ArrowRight,
  Bookmark,
  Share,
  ThumbsUp,
  MessageCircle,
  Play,
  Download,
  Search,
  Filter,
  Star,
  Eye,
  TrendingUp,
  BookOpen,
  Video,
  FileText,
  Tag,
  ChevronRight,
  Heart
} from 'lucide-react';

export function ArticlesComponents({ activeComponent }: { activeComponent: string }) {
  const articles = [
    {
      id: 1,
      title: 'How to Build a Deck: Complete Beginner\'s Guide',
      excerpt: 'Learn the step-by-step process of building a beautiful deck for your backyard, from planning to finishing touches.',
      readTime: '15 min read',
      category: 'DIY Projects',
      author: 'Mike Thompson',
      publishDate: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=400&h=300&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: '10 Essential Power Tools for Every Workshop',
      excerpt: 'Discover the must-have power tools that will make your DIY projects easier and more professional.',
      readTime: '8 min read',
      category: 'Tools & Equipment',
      author: 'Sarah Wilson',
      publishDate: 'March 8, 2024',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Spring Garden Preparation Checklist',
      excerpt: 'Get your garden ready for spring with this comprehensive checklist of tasks and supplies.',
      readTime: '12 min read',
      category: 'Garden & Outdoor',
      author: 'Jennifer Garcia',
      publishDate: 'March 5, 2024',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Bathroom Renovation: Planning and Budgeting',
      excerpt: 'Everything you need to know about planning a successful bathroom renovation project.',
      readTime: '20 min read',
      category: 'Home Improvement',
      author: 'David Chen',
      publishDate: 'March 3, 2024',
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400&h=300&fit=crop'
    }
  ];

  if (activeComponent === 'Article List') {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Featured Article</h3>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="relative aspect-video md:aspect-square">
                  <ImageWithFallback 
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">
                    Featured
                  </Badge>
                </div>
              </div>
              <div className="md:w-1/2 p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{articles[0].category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {articles[0].readTime}
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{articles[0].title}</h2>
                    <p className="text-muted-foreground mb-4">{articles[0].excerpt}</p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {articles[0].author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {articles[0].publishDate}
                    </div>
                  </div>

                  <Button className="bg-primary hover:bg-primary/90">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="p-0">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <ImageWithFallback 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <Button variant="ghost" size="icon" className="w-8 h-8 bg-white/80 hover:bg-white">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold line-clamp-2 mb-2">{article.title}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <User className="w-3 h-3" />
                        {article.author}
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeComponent === 'Article Detail') {
    return (
      <div className="space-y-8">
        <h3 className="text-lg font-semibold">Article Detail Layout</h3>
        
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-primary">DIY Projects</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  15 min read
                </div>
              </div>
              
              <h1 className="text-4xl font-bold">How to Build a Deck: Complete Beginner's Guide</h1>
              
              <p className="text-xl text-muted-foreground">
                Learn the step-by-step process of building a beautiful deck for your backyard, from planning to finishing touches.
              </p>
              
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Mike Thompson</p>
                    <p className="text-sm text-muted-foreground">March 10, 2024</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>

            <Separator />

            {/* Hero Image */}
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&h=500&fit=crop"
                alt="Deck building project"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg">
                Building a deck is one of the most rewarding DIY projects you can undertake. Not only does it add value to your home, 
                but it also creates a beautiful outdoor space for family gatherings and relaxation.
              </p>
              
              <h2>Planning Your Deck Project</h2>
              <p>
                Before you start building, proper planning is essential. Consider the size, location, and materials you'll use. 
                Check with your local building department about permits and building codes.
              </p>
              
              <h3>Tools and Materials Needed</h3>
              <p>Here's what you'll need to get started:</p>
              
              {/* Inline Product Recommendations */}
              <div className="not-prose bg-muted/30 p-6 rounded-lg my-8">
                <h4 className="font-semibold mb-4">Recommended Tools for This Project</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: 'Cordless Drill', price: '$199.99', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=150&h=150&fit=crop' },
                    { name: 'Circular Saw', price: '$129.99', image: 'https://images.unsplash.com/photo-1622650316687-e5c8e8c0b02e?w=150&h=150&fit=crop' },
                    { name: 'Level Set', price: '$39.99', image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09b8?w=150&h=150&fit=crop' }
                  ].map((tool) => (
                    <div key={tool.name} className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                      <div className="w-12 h-12 rounded-md overflow-hidden">
                        <ImageWithFallback 
                          src={tool.image}
                          alt={tool.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{tool.name}</p>
                        <p className="text-primary font-semibold text-sm">{tool.price}</p>
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Add
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <h2>Step-by-Step Instructions</h2>
              <p>
                Follow these detailed steps to build your deck safely and efficiently. Take your time with each step to ensure 
                the best results.
              </p>
            </div>

            {/* Engagement Actions */}
            <div className="flex items-center justify-between py-6 border-t border-b">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Helpful (24)
                </Button>
                <Button variant="outline" size="sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Comments (12)
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  PDF Guide
                </Button>
                <Button variant="outline" size="sm">
                  <Play className="w-4 h-4 mr-2" />
                  Video Tutorial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Project Recommendation Card</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Start Your Project Card */}
        <Card className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Play className="w-4 h-4 text-white" />
                </div>
                <Badge className="bg-primary">New Project</Badge>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Ready to Start Your Deck Project?</h3>
                <p className="text-muted-foreground mb-4">
                  Get everything you need in one convenient package. Our deck building kit includes all the essential tools and materials.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Complete tool list included</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Step-by-step video guides</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Expert support available</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button className="flex-1 bg-primary hover:bg-primary/90">
                  Start Project
                </Button>
                <Button variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Calculator Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Project Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Estimate the cost and materials needed for your deck project.
            </p>
            
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium">Deck Size (sq ft)</label>
                <div className="flex items-center gap-2 mt-1">
                  <input 
                    type="number" 
                    placeholder="200" 
                    className="flex-1 px-3 py-2 border border-border rounded-md text-sm"
                  />
                  <span className="text-sm text-muted-foreground">sq ft</span>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium">Material Type</label>
                <select className="w-full px-3 py-2 border border-border rounded-md text-sm mt-1">
                  <option>Pressure Treated Lumber</option>
                  <option>Cedar</option>
                  <option>Composite</option>
                </select>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium">Estimated Cost:</span>
                <span className="text-xl font-bold text-primary">$2,450</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                *Estimate includes materials only
              </p>
            </div>

            <Button className="w-full" variant="outline">
              Get Detailed Quote
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Calculator icon component since it's not in lucide
const Calculator = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);