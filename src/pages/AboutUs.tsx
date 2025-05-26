
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Users, 
  Award, 
  Star, 
  Clock, 
  Globe, 
  Target, 
  Heart, 
  Briefcase
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutUs = () => {
  const stats = [
    { label: "Years in Business", value: "10+" },
    { label: "Successful Placements", value: "50,000+" },
    { label: "Partner Companies", value: "2,500+" },
    { label: "Global Markets", value: "25+" },
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every interaction, placement, and relationship we build.",
      icon: Star,
    },
    {
      title: "Integrity",
      description: "We operate with honesty and transparency in all our dealings with clients and candidates.",
      icon: Award,
    },
    {
      title: "Commitment",
      description: "We're committed to the success of both our clients and the professionals we place.",
      icon: Target,
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and approaches to stay ahead in the evolving job market.",
      icon: Globe,
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      bio: "With over 20 years in recruitment and HR, Sarah founded the company with a vision to transform how people find meaningful careers.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      name: "Michael Chen",
      position: "CTO",
      bio: "Michael leads our technology initiatives, bringing 15 years of experience in building innovative recruitment platforms and AI solutions.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      name: "Jessica Rodriguez",
      position: "Head of Talent Acquisition",
      bio: "Jessica specializes in connecting top-tier talent with exceptional opportunities, with expertise in executive recruitment.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      name: "David Park",
      position: "Director of Client Relations",
      bio: "David ensures our corporate partnerships thrive, overseeing a portfolio of over 1,000 client relationships globally.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=300&h=300"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="bg-accent/20 dark:bg-accent/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Our Company</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground mb-8">
              Connecting exceptional talent with innovative companies since 2015.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">Our Services</Button>
              <Button size="lg" variant="outline">Meet Our Team</Button>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2015, our company began with a simple mission: to transform the way people find jobs and companies hire talent. 
                What started as a small team of passionate recruiters has grown into a global leader in recruitment and career services.
              </p>
              <p className="text-muted-foreground mb-6">
                Over the past decade, we've expanded our services to include career coaching, skills assessment, workforce planning, and 
                digital recruitment solutions. Our innovative approach has helped tens of thousands of professionals find fulfilling careers 
                and thousands of companies build high-performing teams.
              </p>
              <p className="text-foreground font-medium">
                Today, we continue to evolve, embracing new technologies and methodologies to stay at the forefront of the ever-changing 
                employment landscape while maintaining our core commitment to personalized service and meaningful connections.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Team collaborating in modern office" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-card dark:bg-card/50 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-6">
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card text-card-foreground">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{value.title}</h3>
                  <p className="text-muted-foreground text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-accent/20 dark:bg-accent/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Meet Our Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-card rounded-lg overflow-hidden shadow-md border border-border">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.position}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Join Us on Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground mb-8">
            Whether you're seeking new career opportunities or looking to build your team, 
            we're here to help you succeed in today's dynamic job market.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Briefcase className="h-5 w-5" />
              Explore Jobs
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Users className="h-5 w-5" />
              For Employers
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
