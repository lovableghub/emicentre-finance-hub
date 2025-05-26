
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface MembershipCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const MembershipCard = ({
  title,
  price,
  period,
  description,
  features,
  popular = false,
}: MembershipCardProps) => {
  return (
    <Card className={`w-full flex flex-col ${popular ? 'border-primary shadow-md' : ''}`}>
      {popular && (
        <div className="bg-primary text-primary-foreground text-center py-1.5 text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <div className="mt-2">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-muted-foreground ml-1">{period}</span>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button className={`w-full ${popular ? '' : 'variant-outline'}`}>
          {popular ? "Subscribe Now" : "Get Started"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MembershipCard;
