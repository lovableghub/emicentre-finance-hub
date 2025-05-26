
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Clock, Briefcase, Building, Users, Coffee, Target, HeartHandshake } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  posted: string;
}

const Careers = () => {
  const jobOpenings: JobPosition[] = [
    {
      id: 1,
      title: "Senior Recruitment Specialist",
      department: "Talent Acquisition",
      location: "New York, NY",
      type: "Full-time",
      description: "We're seeking an experienced recruitment specialist to join our team and help connect top talent with our client companies.",
      requirements: [
        "5+ years of experience in recruitment or talent acquisition",
        "Strong network in the technology industry",
        "Excellent communication and negotiation skills",
        "Experience with modern recruitment tools and platforms"
      ],
      posted: "3 days ago"
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Join our product team to create intuitive and beautiful user experiences for our digital recruitment platforms.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Strong portfolio showcasing web and mobile app designs",
        "Proficiency in Figma, Sketch, and Adobe Creative Suite",
        "Experience in user research and usability testing"
      ],
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Client Success Manager",
      department: "Client Relations",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Help our enterprise clients leverage our platform to meet their hiring objectives and drive business growth.",
      requirements: [
        "4+ years of account management or client success experience",
        "Strong understanding of recruitment processes",
        "Excellent presentation and relationship-building skills",
        "Experience with CRM systems and data analysis"
      ],
      posted: "2 days ago"
    },
    {
      id: 4,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Part-time",
      description: "Assist in developing and implementing marketing strategies to promote our services to job seekers and employers.",
      requirements: [
        "2+ years of marketing experience",
        "Knowledge of digital marketing channels",
        "Content creation skills",
        "Experience with marketing analytics"
      ],
      posted: "1 week ago"
    },
    {
      id: 5,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Build and maintain our web applications that power our recruitment marketplace and services.",
      requirements: [
        "4+ years of experience in web development",
        "Proficiency in React, Node.js, and SQL/NoSQL databases",
        "Experience with RESTful APIs and microservices",
        "Knowledge of CI/CD pipelines and cloud services"
      ],
      posted: "5 days ago"
    },
    {
      id: 6,
      title: "Data Analyst",
      department: "Data & Analytics",
      location: "Boston, MA",
      type: "Full-time",
      description: "Analyze recruitment data to provide insights that help improve our services and client outcomes.",
      requirements: [
        "3+ years of experience in data analysis",
        "Proficiency in SQL, Python, and data visualization tools",
        "Experience with business intelligence platforms",
        "Strong statistical analysis skills"
      ],
      posted: "2 weeks ago"
    }
  ];

  const faqs = [
    {
      question: "What is the interview process like?",
      answer: "Our interview process typically consists of an initial phone screening, followed by a skills assessment or task, and then 1-2 rounds of interviews with team members and leadership. The entire process usually takes 2-3 weeks."
    },
    {
      question: "Do you offer remote work options?",
      answer: "Yes, many of our positions offer remote or hybrid work arrangements. Each job posting specifies the work location requirements. We believe in creating a flexible work environment that supports work-life balance."
    },
    {
      question: "What benefits do you offer?",
      answer: "We offer competitive benefits including health insurance, 401(k) matching, flexible PTO, professional development stipends, wellness programs, and regular team events and retreats. We're committed to supporting our employees' wellbeing and growth."
    },
    {
      question: "What is your company culture like?",
      answer: "We foster an inclusive, collaborative environment where innovation and personal growth are encouraged. We value transparency, open communication, and work-life balance. Our team is passionate about connecting people with opportunities that enhance their careers."
    },
    {
      question: "Do you offer internships or entry-level positions?",
      answer: "Yes, we offer internships and associate-level positions throughout the year. We're committed to developing early-career professionals and providing mentorship opportunities. These positions are posted on our careers page when available."
    }
  ];

  const benefits = [
    {
      icon: Building,
      title: "Flexible Work",
      description: "Remote and hybrid options with flexible schedules"
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Generous PTO and mental health days"
    },
    {
      icon: Users,
      title: "Inclusive Environment",
      description: "Diverse teams and employee resource groups"
    },
    {
      icon: Target,
      title: "Growth Opportunities",
      description: "Training budgets and career development paths"
    },
    {
      icon: HeartHandshake,
      title: "Comprehensive Benefits",
      description: "Health, dental, vision insurance and 401(k) matching"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-accent/20 dark:bg-accent/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Join Our Team</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground mb-8">
              Build a career helping others find theirs. Explore opportunities to make an impact with us.
            </p>
            <div className="flex justify-center">
              <div className="flex items-center gap-4">
                <Button size="lg" className="px-8">View Open Positions</Button>
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 container">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Why Join Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card text-card-foreground">
                <CardContent className="pt-6">
                  <div className="mb-4 h-12 w-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{benefit.title}</h3>
                  <p className="text-muted-foreground text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-16 bg-muted/30 dark:bg-muted/10">
          <div className="container">
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Open Positions</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Explore our current job openings and find your next career opportunity with us.
            </p>

            <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
              <TabsList className="mb-6 bg-card border border-border mx-auto flex justify-center">
                <TabsTrigger value="all">All Departments</TabsTrigger>
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="product">Product</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="talent">Talent Acquisition</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <div className="space-y-4">
                  {jobOpenings.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="engineering" className="mt-0">
                <div className="space-y-4">
                  {jobOpenings
                    .filter(job => job.department === "Engineering")
                    .map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="product" className="mt-0">
                <div className="space-y-4">
                  {jobOpenings
                    .filter(job => job.department === "Product")
                    .map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="marketing" className="mt-0">
                <div className="space-y-4">
                  {jobOpenings
                    .filter(job => job.department === "Marketing")
                    .map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="talent" className="mt-0">
                <div className="space-y-4">
                  {jobOpenings
                    .filter(job => job.department === "Talent Acquisition")
                    .map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 container">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/10 dark:bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Don't See a Position That Fits?</h2>
            <p className="text-xl max-w-2xl mx-auto text-muted-foreground mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button size="lg" className="px-8">Submit Your Resume</Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Job Card Component
const JobCard = ({ job }: { job: JobPosition }) => {
  return (
    <Card className="overflow-hidden hover:border-primary/50 transition-colors">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{job.title}</CardTitle>
            <p className="text-primary font-medium">{job.department}</p>
          </div>
          <Badge variant="outline" className="bg-primary/10 dark:bg-primary/20 border-primary/20 text-primary">
            {job.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-muted-foreground mb-4">{job.description}</p>
        
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <span>Posted {job.posted}</span>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Requirements:</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="pt-3 border-t">
        <Button className="mr-2">Apply Now</Button>
        <Button variant="outline">Learn More</Button>
      </CardFooter>
    </Card>
  );
};

export default Careers;
