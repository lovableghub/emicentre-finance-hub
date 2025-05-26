
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background dark:bg-background border-t border-border w-full py-6 md:py-10">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-semibold text-lg mb-3 text-foreground">WorkConnect</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Your centralized platform for job searching, membership management, and marketplace purchases.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold mb-3 text-foreground">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/jobs" className="text-muted-foreground hover:text-foreground transition-colors">Job Board</Link>
            </li>
            <li>
              <Link to="/membership" className="text-muted-foreground hover:text-foreground transition-colors">Membership Plans</Link>
            </li>
            <li>
              <Link to="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors">Marketplace</Link>
            </li>
            <li>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-3 text-foreground">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </li>
            <li>
              <Link to="/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-3 text-foreground">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
            </li>
            <li>
              <Link to="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-8 pt-4 border-t border-border">
        <div className="text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} WorkConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
