
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Tag, ChevronRight, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
}

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Top 10 Job Search Strategies for 2025",
      excerpt: "Discover the most effective ways to stand out in today's competitive job market and land your dream role.",
      author: "Sarah Johnson",
      date: "May 10, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Career Advice",
      tags: ["Job Search", "Career Development", "Interviews"]
    },
    {
      id: 2,
      title: "The Future of Remote Work: Trends and Predictions",
      excerpt: "How remote work is evolving and what professionals should know about the future of distributed teams.",
      author: "David Lee",
      date: "May 5, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Work Trends",
      tags: ["Remote Work", "Future of Work", "Collaboration"]
    },
    {
      id: 3,
      title: "Mastering the Technical Interview: A Comprehensive Guide",
      excerpt: "Prepare for technical interviews with confidence using these proven strategies and practice approaches.",
      author: "Emily Chen",
      date: "April 28, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Tech Careers",
      tags: ["Technical Interview", "Coding", "Problem Solving"]
    },
    {
      id: 4,
      title: "Building a Personal Brand That Gets You Noticed",
      excerpt: "Learn how to develop and promote your personal brand to attract better job opportunities and advance your career.",
      author: "Michael Rodriguez",
      date: "April 22, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Personal Development",
      tags: ["Personal Branding", "Networking", "LinkedIn"]
    },
    {
      id: 5,
      title: "How to Negotiate Your Salary with Confidence",
      excerpt: "Expert tips for negotiating compensation packages that reflect your true worth in the job market.",
      author: "Jessica Kim",
      date: "April 15, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Career Advice",
      tags: ["Salary Negotiation", "Compensation", "Career Growth"]
    },
    {
      id: 6,
      title: "The Most In-Demand Skills for 2025 and Beyond",
      excerpt: "Stay ahead of the curve by developing these high-demand skills that employers are actively seeking.",
      author: "Robert Williams",
      date: "April 8, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Skill Development",
      tags: ["Skills", "Professional Development", "Learning"]
    },
  ];
  
  const categories = [...new Set(blogPosts.map(post => post.category))];
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];
  
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-accent/20 dark:bg-accent/10 py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 text-foreground">Our Blog</h1>
              <p className="text-muted-foreground text-lg">
                Insights, tips, and resources to help you advance your career and professional development.
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow p-4 md:p-6 max-w-4xl mx-auto text-card-foreground border border-border">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="bg-card rounded-lg border border-border p-6 sticky top-20 text-card-foreground">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-lg">Blog</h2>
                  <ThemeSwitcher />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center justify-between">
                          <Button variant="ghost" className="p-0 justify-start h-auto text-foreground hover:text-primary hover:bg-transparent">
                            {category}
                          </Button>
                          <Badge variant="outline">{blogPosts.filter(post => post.category === category).length}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-3">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {allTags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="hover:bg-primary hover:text-primary-foreground cursor-pointer">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-3">Newsletter</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Subscribe to our newsletter to get the latest updates.
                    </p>
                    <div className="space-y-2">
                      <Input placeholder="Your email" type="email" />
                      <Button className="w-full">Subscribe</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/4">
              <Tabs defaultValue="all">
                <TabsList className="mb-6 bg-card border border-border">
                  <TabsTrigger value="all">All Posts</TabsTrigger>
                  <TabsTrigger value="career">Career Advice</TabsTrigger>
                  <TabsTrigger value="tech">Tech</TabsTrigger>
                  <TabsTrigger value="trends">Trends</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-0">
                  <div className="grid gap-6 md:grid-cols-2">
                    {blogPosts.map((post) => (
                      <Card key={post.id} className="overflow-hidden h-full flex flex-col hover:border-primary/50 transition-colors">
                        <div className="aspect-[16/9] overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-center mb-2">
                            <Badge>{post.category}</Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="h-3.5 w-3.5 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <CardTitle className="text-xl">{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground">{post.excerpt}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center border-t pt-4">
                          <div className="flex items-center text-sm">
                            <User className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                            <span className="text-muted-foreground">{post.author}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Calendar className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                            <span className="text-muted-foreground">{post.date}</span>
                          </div>
                        </CardFooter>
                        <Button variant="ghost" className="m-4 mt-0 flex justify-between items-center">
                          Read More <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="career" className="mt-0">
                  <div className="grid gap-6 md:grid-cols-2">
                    {blogPosts
                      .filter(post => post.category === "Career Advice")
                      .map((post) => (
                        <Card key={post.id} className="overflow-hidden h-full flex flex-col hover:border-primary/50 transition-colors">
                          <div className="aspect-[16/9] overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                          <CardHeader>
                            <div className="flex justify-between items-center mb-2">
                              <Badge>{post.category}</Badge>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Clock className="h-3.5 w-3.5 mr-1" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <CardTitle className="text-xl">{post.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{post.excerpt}</p>
                          </CardContent>
                          <CardFooter className="flex justify-between items-center border-t pt-4">
                            <div className="flex items-center text-sm">
                              <User className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                              <span className="text-muted-foreground">{post.author}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Calendar className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                              <span className="text-muted-foreground">{post.date}</span>
                            </div>
                          </CardFooter>
                          <Button variant="ghost" className="m-4 mt-0 flex justify-between items-center">
                            Read More <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="tech" className="mt-0">
                  <div className="grid gap-6 md:grid-cols-2">
                    {blogPosts
                      .filter(post => post.category === "Tech Careers")
                      .map((post) => (
                        <Card key={post.id} className="overflow-hidden h-full flex flex-col hover:border-primary/50 transition-colors">
                          <div className="aspect-[16/9] overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                          <CardHeader>
                            <div className="flex justify-between items-center mb-2">
                              <Badge>{post.category}</Badge>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Clock className="h-3.5 w-3.5 mr-1" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <CardTitle className="text-xl">{post.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{post.excerpt}</p>
                          </CardContent>
                          <CardFooter className="flex justify-between items-center border-t pt-4">
                            <div className="flex items-center text-sm">
                              <User className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                              <span className="text-muted-foreground">{post.author}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Calendar className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                              <span className="text-muted-foreground">{post.date}</span>
                            </div>
                          </CardFooter>
                          <Button variant="ghost" className="m-4 mt-0 flex justify-between items-center">
                            Read More <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="trends" className="mt-0">
                  <div className="grid gap-6 md:grid-cols-2">
                    {blogPosts
                      .filter(post => post.category === "Work Trends")
                      .map((post) => (
                        <Card key={post.id} className="overflow-hidden h-full flex flex-col hover:border-primary/50 transition-colors">
                          <div className="aspect-[16/9] overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                          <CardHeader>
                            <div className="flex justify-between items-center mb-2">
                              <Badge>{post.category}</Badge>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Clock className="h-3.5 w-3.5 mr-1" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <CardTitle className="text-xl">{post.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{post.excerpt}</p>
                          </CardContent>
                          <CardFooter className="flex justify-between items-center border-t pt-4">
                            <div className="flex items-center text-sm">
                              <User className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                              <span className="text-muted-foreground">{post.author}</span>
                            </div>
                            <div className="flex items-center text-sm">
                              <Calendar className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                              <span className="text-muted-foreground">{post.date}</span>
                            </div>
                          </CardFooter>
                          <Button variant="ghost" className="m-4 mt-0 flex justify-between items-center">
                            Read More <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="mr-2">Previous</Button>
                <Button variant="outline" className="bg-primary text-primary-foreground">1</Button>
                <Button variant="outline" className="mx-2">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline" className="ml-2">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
