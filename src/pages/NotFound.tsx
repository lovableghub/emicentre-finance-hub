
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container flex flex-col items-center justify-center min-h-[80vh]">
        <div className="absolute top-24 right-8">
          <ThemeSwitcher />
        </div>
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-semibold mb-4 text-foreground">Page Not Found</h2>
        <p className="text-xl text-muted-foreground mb-8 text-center max-w-md">
          We couldn't find the page you were looking for. It might have been moved or doesn't exist.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
