
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, ShoppingCart, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample product data for demonstration
  const products = [
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
    {
      id: 3,
      title: "Interview Preparation Guide",
      description: "Comprehensive guide with practice questions",
      price: "$19.99",
      image: "/placeholder.svg",
      category: "Books",
    },
    {
      id: 4,
      title: "LinkedIn Profile Optimization",
      description: "Service to make your profile stand out to recruiters",
      price: "$39.99",
      image: "/placeholder.svg",
      category: "Services",
    },
    {
      id: 5,
      title: "Networking Mastery Course",
      description: "Learn how to build professional connections effectively",
      price: "$34.99",
      image: "/placeholder.svg",
      category: "Courses",
      featured: true,
    },
    {
      id: 6,
      title: "Modern Cover Letter Template",
      description: "Elegant and effective cover letter templates",
      price: "$14.99",
      image: "/placeholder.svg",
      category: "Templates",
      sale: true,
    },
    {
      id: 7,
      title: "Personal Brand Development",
      description: "Toolkit for building your professional brand",
      price: "$29.99",
      image: "/placeholder.svg",
      category: "Toolkits",
    },
    {
      id: 8,
      title: "Salary Negotiation Guide",
      description: "Expert strategies to maximize your compensation",
      price: "$22.99",
      image: "/placeholder.svg",
      category: "Books",
    },
  ];
  
  // Extract unique categories
  const categories = [...new Set(products.map(product => product.category))];
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-brand-50 dark:bg-background py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Professional Marketplace</h1>
              <p className="text-muted-foreground text-lg">
                Shop for resources, courses, and tools to accelerate your professional growth.
              </p>
            </div>
            
            <div className="bg-white dark:bg-card rounded-lg shadow p-4 md:p-6 max-w-3xl mx-auto">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="relative col-span-2">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8"
                  />
                </div>
                <Button className="h-10">Search</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="bg-white dark:bg-card rounded-lg border border-border p-6 sticky top-20">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-lg">Filters</h2>
                  <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground">
                    Reset
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox id={`category-${category}`} />
                          <label
                            htmlFor={`category-${category}`}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Price Range</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-1 block">Min</label>
                        <Input type="number" placeholder="$0" />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-1 block">Max</label>
                        <Input type="number" placeholder="$100" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Rating</h3>
                    <div className="space-y-2">
                      {["4★ & up", "3★ & up", "2★ & up", "1★ & up"].map((rating) => (
                        <div key={rating} className="flex items-center space-x-2">
                          <Checkbox id={`rating-${rating}`} />
                          <label
                            htmlFor={`rating-${rating}`}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {rating}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Availability</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="availability-sale" />
                        <label
                          htmlFor="availability-sale"
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          On Sale
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="availability-featured" />
                        <label
                          htmlFor="availability-featured"
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Featured
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/4">
              <div className="flex flex-wrap items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">
                  <span>{products.length}</span> Products Available
                </h2>
                <div className="flex items-center gap-2">
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-[160px] h-9">
                      <Filter className="h-3.5 w-3.5 mr-2" />
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="mb-6 bg-muted/50 dark:bg-muted/30">
                  <TabsTrigger value="all">All Products</TabsTrigger>
                  <TabsTrigger value="templates">Templates</TabsTrigger>
                  <TabsTrigger value="courses">Courses</TabsTrigger>
                  <TabsTrigger value="books">Books</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-0">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="templates" className="mt-0">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.filter(p => p.category === "Templates").map(product => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="courses" className="mt-0">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.filter(p => p.category === "Courses").map(product => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="books" className="mt-0">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.filter(p => p.category === "Books").map(product => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8 flex justify-center">
                <div className="join">
                  <Button variant="outline" className="mr-2">Previous</Button>
                  <Button variant="outline" className="bg-primary text-primary-foreground">1</Button>
                  <Button variant="outline" className="ml-2">Next</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section className="bg-brand-500 dark:bg-primary py-12 text-white">
          <div className="container text-center">
            <ShoppingCart className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Ready to enhance your career?</h2>
            <p className="max-w-2xl mx-auto mb-8 opacity-90">
              Browse our curated collection of professional resources designed to help you stand out and succeed.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a href="#top">Start Shopping</a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Marketplace;
