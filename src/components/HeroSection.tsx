
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

const HeroSection = () => {
  const { theme, themeColor } = useTheme();
  
  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      {/* Dynamic background that respects theme */}
      <div className={`absolute inset-0 z-0 ${theme === 'dark' ? 'bg-background' : 'bg-brand-50'}`}>
        <div className={`absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full ${theme === 'dark' ? 'bg-brand-900/20' : 'bg-brand-200'}`}></div>
        <div className={`absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full ${theme === 'dark' ? 'bg-brand-900/10' : 'bg-brand-100'}`}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-6">
              Your Complete <span className="text-primary">Professional Platform</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-xl">
              Connect with top opportunities, manage memberships, and access exclusive marketplace offerings all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/jobs">Find Jobs</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/membership">Explore Memberships</Link>
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-6">
              <div className="flex overflow-hidden">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className={`h-10 w-10 rounded-full border-2 border-background ${theme === 'dark' ? 'bg-muted/50' : 'bg-muted'} -ml-${item > 1 ? '4' : '0'}`}>
                    <span className="sr-only">User {item}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold">5,000+</span> professionals have joined
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative h-80 w-80 md:h-96 md:w-96">
              <div className={`absolute inset-0 rounded-full ${theme === 'dark' ? 'bg-gradient-to-tr from-brand-900/40 to-brand-800/20' : 'bg-gradient-to-tr from-brand-300 to-brand-100'} p-8 flex items-center justify-center`}>
                <img
                  src="/placeholder.svg"
                  alt="Professional network"
                  className="rounded-3xl shadow-lg max-w-[80%]"
                />
              </div>
              <div className={`absolute -left-10 top-10 ${theme === 'dark' ? 'bg-card' : 'bg-white'} p-4 rounded-lg shadow-lg`}>
                <div className={`w-16 h-3 ${theme === 'dark' ? 'bg-brand-500/30' : 'bg-brand-200'} rounded mb-2`}></div>
                <div className="w-24 h-3 bg-muted rounded"></div>
              </div>
              <div className={`absolute -right-10 bottom-20 ${theme === 'dark' ? 'bg-card' : 'bg-white'} p-4 rounded-lg shadow-lg`}>
                <div className={`w-20 h-3 ${theme === 'dark' ? 'bg-brand-500/30' : 'bg-brand-200'} rounded mb-2`}></div>
                <div className="w-28 h-3 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
