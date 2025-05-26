
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Briefcase, MapPin, Clock, DollarSign } from "lucide-react";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Remote";
  posted: string;
  logo?: string;
  featured?: boolean;
}

const JobCard = ({
  title,
  company,
  location,
  salary,
  type,
  posted,
  logo,
  featured = false,
}: JobCardProps) => {
  const typeColorMap = {
    "Full-time": "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300",
    "Part-time": "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300",
    "Contract": "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
    "Freelance": "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300",
    "Remote": "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300",
  };

  return (
    <Card className={`overflow-hidden transition-all hover:border-primary/50 hover:shadow-md ${featured ? 'border-brand-300 dark:border-brand-700 bg-brand-50/30 dark:bg-brand-700/10' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 rounded-md bg-muted w-12 h-12 flex items-center justify-center">
              {logo ? (
                <img src={logo} alt={`${company} logo`} className="w-10 h-10 object-contain" />
              ) : (
                <Briefcase className="h-6 w-6 opacity-70" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg leading-tight text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{company}</p>
            </div>
          </div>
          
          {featured && (
            <Badge className="bg-brand-500 hover:bg-brand-600">Featured</Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-foreground">{location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <DollarSign className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-foreground">{salary}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-foreground">Posted {posted}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Badge variant="outline" className={`${typeColorMap[type]} border-0 font-normal`}>
              {type}
            </Badge>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Button variant="outline" size="sm" className="mr-2">Save</Button>
        <Button size="sm">Apply Now</Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
