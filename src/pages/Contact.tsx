
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Briefcase, 
  Users 
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    });
  };

  const locations = [
    {
      city: "New York",
      address: "123 Broadway, New York, NY 10001",
      phone: "+1 (212) 555-1234",
      email: "nyc@example.com",
      hours: "Mon-Fri: 9AM - 6PM",
    },
    {
      city: "San Francisco",
      address: "456 Market Street, San Francisco, CA 94105",
      phone: "+1 (415) 555-6789",
      email: "sf@example.com",
      hours: "Mon-Fri: 9AM - 6PM",
    },
    {
      city: "London",
      address: "10 Downing Street, London, UK SW1A 2AA",
      phone: "+44 20 7123 4567",
      email: "london@example.com",
      hours: "Mon-Fri: 9AM - 6PM",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-accent/20 dark:bg-accent/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto text-muted-foreground mb-8">
              Have questions or need assistance? We're here to help you navigate your career journey or hiring needs.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="mb-6 bg-card border border-border justify-center">
                  <TabsTrigger value="general">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    General Inquiries
                  </TabsTrigger>
                  <TabsTrigger value="jobseekers">
                    <Users className="h-4 w-4 mr-2" />
                    For Job Seekers
                  </TabsTrigger>
                  <TabsTrigger value="employers">
                    <Briefcase className="h-4 w-4 mr-2" />
                    For Employers
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="general">
                  <ContactForm onSubmit={handleSubmit} type="general" />
                </TabsContent>
                <TabsContent value="jobseekers">
                  <ContactForm onSubmit={handleSubmit} type="jobseeker" />
                </TabsContent>
                <TabsContent value="employers">
                  <ContactForm onSubmit={handleSubmit} type="employer" />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* Office Locations */}
        <section className="py-16 bg-muted/30 dark:bg-muted/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Our Offices</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <Card key={index} className="bg-card text-card-foreground">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl">{location.city}</CardTitle>
                    <CardDescription>{location.address}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start">
                        <Phone className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                        <span>{location.phone}</span>
                      </div>
                      <div className="flex items-start">
                        <Mail className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                        <span>{location.email}</span>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                        <span>{location.hours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Find Us</h2>
            <div className="h-[400px] rounded-lg overflow-hidden border border-border">
              {/* Map would be embedded here */}
              <div className="w-full h-full bg-accent/20 dark:bg-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium">Map Placeholder</p>
                  <p className="text-muted-foreground">An interactive map would be displayed here.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-primary/10 dark:bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Need Immediate Assistance?</h2>
            <p className="text-xl max-w-2xl mx-auto text-muted-foreground mb-8">
              Our support team is available to help you with any questions or concerns.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                Call Us
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <MessageSquare className="h-5 w-5" />
                Live Chat
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

interface ContactFormProps {
  onSubmit: (e: React.FormEvent) => void;
  type: 'general' | 'jobseeker' | 'employer';
}

const ContactForm = ({ onSubmit, type }: ContactFormProps) => {
  const getFormTitle = () => {
    switch (type) {
      case 'jobseeker':
        return "Job Seeker Support";
      case 'employer':
        return "Employer Inquiries";
      default:
        return "Send Us a Message";
    }
  };

  const getFormDescription = () => {
    switch (type) {
      case 'jobseeker':
        return "Have questions about your job search or need help with your profile? We're here to assist you.";
      case 'employer':
        return "Looking to hire talent or learn more about our recruitment services? Get in touch with our team.";
      default:
        return "Fill out the form below and our team will get back to you as soon as possible.";
    }
  };

  return (
    <Card className="bg-card text-card-foreground">
      <CardHeader>
        <CardTitle>{getFormTitle()}</CardTitle>
        <CardDescription>{getFormDescription()}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <Input id="phone" placeholder="+1 (123) 456-7890" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Select>
                <SelectTrigger id="subject">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  {type === 'jobseeker' ? (
                    <>
                      <SelectItem value="account">Account Help</SelectItem>
                      <SelectItem value="application">Application Status</SelectItem>
                      <SelectItem value="resume">Resume Review</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </>
                  ) : type === 'employer' ? (
                    <>
                      <SelectItem value="hiring">Hiring Needs</SelectItem>
                      <SelectItem value="pricing">Pricing Information</SelectItem>
                      <SelectItem value="platform">Platform Questions</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </>
                  ) : (
                    <>
                      <SelectItem value="general">General Question</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Please provide details about your inquiry..." className="min-h-[150px]" />
          </div>
          
          <div className="flex justify-end">
            <Button type="submit">Send Message</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default Contact;
