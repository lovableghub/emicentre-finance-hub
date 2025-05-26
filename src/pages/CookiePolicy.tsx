
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="absolute top-24 right-8 z-10">
        <ThemeSwitcher />
      </div>
      
      <main className="container py-16 max-w-4xl flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: May 13, 2025
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
          <p>
            We use cookies for various purposes, including:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be turned off in our systems.
            </li>
            <li>
              <strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
            </li>
            <li>
              <strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization, such as remembering your preferences.
            </li>
            <li>
              <strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant ads on other sites.
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Session Cookies</h3>
          <p>
            Session cookies are temporary cookies that are deleted when you close your browser. They enable certain site functionalities like maintaining your login session.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Persistent Cookies</h3>
          <p>
            Persistent cookies remain on your device for a set period or until you delete them. They help us recognize you when you return to our website.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">First-Party Cookies</h3>
          <p>
            First-party cookies are set by us directly when you visit our website.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Third-Party Cookies</h3>
          <p>
            Third-party cookies are set by our partners and service providers, such as Google Analytics, to collect information about your browsing habits and provide relevant advertising.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings. You can typically:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>View and delete cookies</li>
            <li>Block third-party cookies</li>
            <li>Block cookies from particular sites</li>
            <li>Block all cookies</li>
            <li>Delete all cookies when you close your browser</li>
          </ul>
          <p>
            Please note that blocking or deleting cookies may impact your experience on our website, as some features may not function properly.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Cookie Policy</h2>
          <p>
            We may update our Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy, please contact us at:
          </p>
          <p className="mt-2">
            Email: privacy@workconnect.com<br />
            Address: 123 Main Street, Suite 456, San Francisco, CA 94105
          </p>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border">
          <Link to="/" className="text-primary hover:underline">Back to Home</Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
