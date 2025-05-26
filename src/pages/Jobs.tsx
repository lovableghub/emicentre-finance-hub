
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MapPin, Briefcase, Filter, SortAsc } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JobCard from "@/components/JobCard";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [salaryRange, setSalaryRange] = useState([0]);
  
  // Sample job data for demonstration
  const jobs = [
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
    {
      id: 3,
      title: "Marketing Manager",
      company: "Growth Strategies Ltd",
      location: "New York, NY",
      salary: "$75k - $95k",
      type: "Full-time" as const,
      posted: "3 days ago",
      featured: false,
    },
    {
      id: 4,
      title: "Content Writer",
      company: "Publishing House",
      location: "Remote",
      salary: "$50k - $65k",
      type: "Part-time" as const,
      posted: "1 day ago",
      featured: false,
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "Boston, MA",
      salary: "$110k - $130k",
      type: "Contract" as const,
      posted: "4 days ago",
      featured: false,
    },
    {
      id: 6,
      title: "Project Manager",
      company: "Enterprise Solutions",
      location: "Chicago, IL",
      salary: "$85k - $105k",
      type: "Full-time" as const,
      posted: "2 weeks ago",
      featured: false,
    },
  ];
  
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-accent/20 dark:bg-accent/10 py-12">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 text-foreground">Find Your Dream Job</h1>
              <p className="text-muted-foreground text-lg">
                Search through thousands of job listings curated for professionals like you.
              </p>
            </div>
            
            <div className="bg-card rounded-lg shadow p-4 md:p-6 max-w-4xl mx-auto text-card-foreground border border-border">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Job title or keyword"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Location"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    className="pl-8"
                  />
                </div>
                <Button className="h-10">Search Jobs</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="bg-card rounded-lg border border-border p-6 sticky top-20 text-card-foreground">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-lg">Filters</h2>
                  <div className="flex gap-2">
                    <ThemeSwitcher />
                    <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground">
                      Reset
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Job Type</h3>
                    <div className="space-y-2">
                      {["Full-time", "Part-time", "Contract", "Freelance", "Remote"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox id={`type-${type}`} />
                          <label
                            htmlFor={`type-${type}`}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Experience Level</h3>
                    <div className="space-y-2">
                      {["Entry Level", "Mid Level", "Senior Level", "Director", "Executive"].map((level) => (
                        <div key={level} className="flex items-center space-x-2">
                          <Checkbox id={`level-${level}`} />
                          <label
                            htmlFor={`level-${level}`}
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Salary Range</h3>
                    <Slider
                      defaultValue={[50000]}
                      max={200000}
                      step={5000}
                      value={salaryRange}
                      onValueChange={setSalaryRange}
                      className="mb-4"
                    />
                    <div className="text-sm text-foreground">
                      Up to ${salaryRange[0].toLocaleString()}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Posted</h3>
                    <Select defaultValue="anytime">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select time frame" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="anytime">Anytime</SelectItem>
                        <SelectItem value="day">Past 24 hours</SelectItem>
                        <SelectItem value="week">Past week</SelectItem>
                        <SelectItem value="month">Past month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/4">
              <div className="flex flex-wrap items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">
                  <span>{jobs.length}</span> Jobs Available
                </h2>
                <div className="flex items-center gap-2">
                  <Select defaultValue="relevance">
                    <SelectTrigger className="w-[160px] h-9">
                      <SortAsc className="h-3.5 w-3.5 mr-2" />
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                      <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Tabs defaultValue="all">
                <TabsList className="mb-6 bg-card border border-border">
                  <TabsTrigger value="all">All Jobs</TabsTrigger>
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  <TabsTrigger value="remote">Remote</TabsTrigger>
                  <TabsTrigger value="fulltime">Full-time</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-0">
                  <div className="space-y-4">
                    {jobs.map(job => (
                      <JobCard key={job.id} {...job} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="featured" className="mt-0">
                  <div className="space-y-4">
                    {jobs.filter(job => job.featured).map(job => (
                      <JobCard key={job.id} {...job} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="remote" className="mt-0">
                  <div className="space-y-4">
                    {jobs.filter(job => job.type === "Remote").map(job => (
                      <JobCard key={job.id} {...job} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="fulltime" className="mt-0">
                  <div className="space-y-4">
                    {jobs.filter(job => job.type === "Full-time").map(job => (
                      <JobCard key={job.id} {...job} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="mr-2">Previous</Button>
                <Button variant="outline" className="bg-primary text-primary-foreground">1</Button>
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

export default Jobs;
