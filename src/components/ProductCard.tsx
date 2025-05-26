
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
  featured?: boolean;
  sale?: boolean;
}

const ProductCard = ({
  title,
  description,
  price,
  image,
  category,
  featured = false,
  sale = false,
}: ProductCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md hover:border-primary/50">
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        {sale && (
          <Badge className="absolute top-2 right-2 bg-destructive hover:bg-destructive">Sale</Badge>
        )}
        {featured && (
          <Badge className="absolute top-2 left-2 bg-primary hover:bg-primary">Featured</Badge>
        )}
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <CardDescription>{category}</CardDescription>
        </div>
        <CardTitle className="text-base leading-tight">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>
      
      <CardFooter className="pt-3 border-t flex justify-between items-center">
        <div className="font-semibold">{price}</div>
        <Button size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
