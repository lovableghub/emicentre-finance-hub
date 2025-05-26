
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Menu, User, Briefcase, CreditCard, Search } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';
import { useIsMobile } from '@/hooks/use-mobile';
import { ThemeSwitcher } from './ThemeSwitcher';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl text-foreground">WorkConnect</span>
          </Link>
        </div>

        {!isMobile && (
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/jobs" className="px-4 py-2 text-sm font-medium hover:text-primary">
                  Jobs
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/membership" className="px-4 py-2 text-sm font-medium hover:text-primary">
                  Membership
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/marketplace" className="px-4 py-2 text-sm font-medium hover:text-primary">
                  Marketplace
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}

        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          
          {!isMobile && (
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                className="rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          )}

          {isLoggedIn ? (
            <Link to="/profile">
              <Avatar>
                <AvatarFallback className="bg-primary/20 text-primary">US</AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          )}

          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  <Link to="/jobs" className="flex items-center gap-2 py-2 text-lg font-medium">
                    <Briefcase className="h-5 w-5" />
                    Jobs
                  </Link>
                  <Link to="/membership" className="flex items-center gap-2 py-2 text-lg font-medium">
                    <CreditCard className="h-5 w-5" />
                    Membership
                  </Link>
                  <Link to="/marketplace" className="flex items-center gap-2 py-2 text-lg font-medium">
                    <Search className="h-5 w-5" />
                    Marketplace
                  </Link>
                  {isLoggedIn && (
                    <Link to="/profile" className="flex items-center gap-2 py-2 text-lg font-medium">
                      <User className="h-5 w-5" />
                      Profile
                    </Link>
                  )}
                  {isLoggedIn && (
                    <Link to="/dashboard" className="flex items-center gap-2 py-2 text-lg font-medium">
                      <User className="h-5 w-5" />
                      Dashboard
                    </Link>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
