import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, CreditCard, ShoppingCart, ArrowRight, CheckCircle } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import JobCard from "@/components/JobCard";
import MembershipCard from "@/components/MembershipCard";
import ProductCard from "@/components/ProductCard";
import { useTheme } from "@/components/ThemeProvider";

const Index = () => {
  const [featureTab, setFeatureTab] = useState("jobs");
  const { theme, themeColor } = useTheme();
  
  // Sample data for demonstration
  const featuredJobs = [
    {
      id: 1,
      title: "Senior UI/UX Designer",
      company: "Creative Solutions Inc",
      location: "San Francisco, CA",
      salary: "$90k - $120k",
      type: "Full-time" as const,
      posted: "2 days ago",
      featured: true,
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Tech Innovators",
      location: "Remote",
      salary: "$80k - $100k",
      type: "Remote" as const,
      posted: "1 week ago",
      featured: true,
    },
  ];
  
  const membershipPlans = [
    {
      id: 1,
      title: "Basic",
      price: "$9.99",
      period: "/month",
      description: "Essential features for individuals",
      features: [
        "Access to job board",
        "Basic profile",
        "5 job applications per month",
        "Email notifications",
      ],
      popular: false,
    },
    {
      id: 2,
      title: "Professional",
      price: "$19.99",
      period: "/month",
      description: "Advanced features for serious job seekers",
      features: [
        "Everything in Basic",
        "Priority job applications",
        "Unlimited job applications",
        "Access to premium jobs",
        "Profile highlighting",
      ],
      popular: true,
    },
  ];
  
  const featuredProducts = [
    {
      id: 1,
      title: "Professional Resume Template",
      description: "Standout resume template designed by HR experts",
      price: "$24.99",
      image: "/placeholder.svg",
      category: "Templates",
      featured: true,
    },
    {
      id: 2,
      title: "Career Development Course",
      description: "30-day course to accelerate your career growth",
      price: "$49.99",
      image: "/placeholder.svg",
      category: "Courses",
      sale: true,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">All-in-One Professional Platform</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                WorkConnect brings together job opportunities, membership benefits, and professional 
                resources in a single, streamlined platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-brand-50 dark:bg-brand-900/30 p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-7 w-7 text-brand-500 dark:text-brand-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Job Portal</h3>
                  <p className="text-muted-foreground mb-4">
                    Find and apply to thousands of curated job listings from top companies.
                  </p>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/jobs" className="gap-1">
                      Explore Jobs <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-brand-50 dark:bg-brand-900/30 p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="h-7 w-7 text-brand-500 dark:text-brand-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Memberships</h3>
                  <p className="text-muted-foreground mb-4">
                    Unlock premium features with our flexible membership options.
                  </p>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/membership" className="gap-1">
                      View Plans <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-brand-50 dark:bg-brand-900/30 p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="h-7 w-7 text-brand-500 dark:text-brand-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Marketplace</h3>
                  <p className="text-muted-foreground mb-4">
                    Shop for professional resources, courses, and tools.
                  </p>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/marketplace" className="gap-1">
                      Browse Products <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-muted/30 dark:bg-muted/10">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Explore Our Platform</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Take a look at some of our featured content across our platform.
              </p>
            </div>
            
            <Tabs defaultValue="jobs" value={featureTab} onValueChange={setFeatureTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="jobs">Jobs</TabsTrigger>
                  <TabsTrigger value="membership">Memberships</TabsTrigger>
                  <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="jobs" className="mt-0">
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredJobs.map(job => (
                    <JobCard key={job.id} {...job} />
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button asChild>
                    <Link to="/jobs">View All Jobs</Link>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="membership" className="mt-0">
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {membershipPlans.map(plan => (
                    <MembershipCard key={plan.id} {...plan} />
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button asChild>
                    <Link to="/membership">Compare All Plans</Link>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="marketplace" className="mt-0">
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredProducts.map(product => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button asChild>
                    <Link to="/marketplace">Browse All Products</Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="py-16 bg-background border-y border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Why Choose WorkConnect?</h2>
                <p className="text-muted-foreground mb-6">
                  Our platform is designed to provide everything professionals need in one place,
                  from job opportunities to membership benefits and essential resources.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-500 dark:text-brand-300 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Centralized Professional Hub</h3>
                      <p className="text-sm text-muted-foreground">
                        Access jobs, memberships, and resources all in one place.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-500 dark:text-brand-300 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Curated Opportunities</h3>
                      <p className="text-sm text-muted-foreground">
                        We carefully select the best opportunities for our platform.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-500 dark:text-brand-300 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Flexible Memberships</h3>
                      <p className="text-sm text-muted-foreground">
                        Choose the right plan for your career stage and needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-brand-500 dark:text-brand-300 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Professional Marketplace</h3>
                      <p className="text-sm text-muted-foreground">
                        Shop for tools and resources to advance your career.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/signup">Join WorkConnect</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="WorkConnect Platform"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-white/90 dark:bg-black/40 flex items-center justify-center shadow-lg">
                      <div className="h-0 w-0 border-y-8 border-y-transparent border-l-12 border-l-brand-500 dark:border-l-brand-300 ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-brand-100 dark:bg-brand-900/30 -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-brand-200 dark:bg-brand-800/40 -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of professionals who are already leveraging WorkConnect
              to advance their careers and access exclusive opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/signup">Create Account</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/jobs">Browse Jobs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
