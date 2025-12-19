import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Clock, ExternalLink } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  featured: boolean;
}

const mockArticles: Article[] = [
  {
    id: "1",
    title: "New Study Reveals Optimal Protein Intake for Muscle Maintenance After 40",
    excerpt: "Research shows that distributing protein intake throughout the day may be more effective than consuming it all at once for preserving muscle mass in adults over 40.",
    category: "Nutrition",
    readTime: "5 min",
    publishDate: "2024-01-15",
    featured: true
  },
  {
    id: "2", 
    title: "The Mediterranean Diet and Cognitive Function: Latest Findings",
    excerpt: "A comprehensive review of recent studies confirms strong correlations between Mediterranean dietary patterns and reduced cognitive decline in middle-aged adults.",
    category: "Brain Health",
    readTime: "7 min", 
    publishDate: "2024-01-14",
    featured: false
  },
  {
    id: "3",
    title: "Sleep Quality Impact on Metabolic Health After 40",
    excerpt: "New research emphasizes how sleep quality becomes increasingly crucial for metabolic health as we age, with specific recommendations for improved sleep hygiene.",
    category: "Sleep Science",
    readTime: "6 min",
    publishDate: "2024-01-13", 
    featured: false
  }
];

export default function FeaturedArticles() {
  const featuredArticle = mockArticles.find(article => article.featured);
  const regularArticles = mockArticles.filter(article => !article.featured);

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Latest Research & News
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">
              Stay updated with the latest health research, news, and insights specifically curated for adults over 40.
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {/* Featured Article */}
          {featuredArticle && (
            <Card className="relative overflow-hidden">
              <Badge className="absolute right-4 top-4" variant="secondary">
                Featured
              </Badge>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  {featuredArticle.publishDate}
                  <Clock className="h-4 w-4 ml-2" />
                  {featuredArticle.readTime}
                </div>
                <CardTitle className="text-xl leading-tight">
                  {featuredArticle.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{featuredArticle.category}</Badge>
                  <Button asChild size="sm">
                    <Link href={`/blog/${featuredArticle.id}`}>
                      Read More
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Regular Articles List */}
          <div className="space-y-6">
            {regularArticles.map((article) => (
              <Card key={article.id} className="transition-all hover:shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {article.publishDate}
                    <Clock className="h-4 w-4 ml-2" />
                    {article.readTime}
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <Button asChild variant="ghost" size="sm">
                      <Link href={`/blog/${article.id}`}>
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Read
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">
              View All Articles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}