
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="absolute top-24 right-8 z-10">
        <ThemeSwitcher />
      </div>
      
      <main className="container py-16 max-w-4xl flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: May 13, 2025
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p>
            WorkConnect ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, such as when you create an account, subscribe to our services, or communicate with us. This may include:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Personal information, such as your name, email address, and phone number</li>
            <li>Profile information, such as your resume, work experience, and education</li>
            <li>Account credentials, such as your username and password</li>
            <li>Payment information, such as credit card details and billing address</li>
            <li>Communications and correspondence with us</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p>
            We may use the information we collect for various purposes, including to:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and manage your account</li>
            <li>Send you technical notices, updates, security alerts, and administrative messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Communicate with you about products, services, offers, and events</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Personalize and improve your experience</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Sharing of Information</h2>
          <p>
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Service providers who perform services on our behalf</li>
            <li>Partners with whom we offer co-branded services or joint marketing campaigns</li>
            <li>Other users, such as when you apply for a job or make your profile public</li>
            <li>In response to legal process or when we believe disclosure is necessary to protect our rights</li>
            <li>In connection with a business transaction, such as a merger, sale of assets, or bankruptcy</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Choices</h2>
          <p>
            You have several choices regarding the information we collect and how it is used:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Account Information: You may update, correct, or delete your account information at any time by logging into your account.</li>
            <li>Cookies: Most web browsers are set to accept cookies by default. You can usually choose to set your browser to remove or reject cookies.</li>
            <li>Marketing Communications: You can opt out of receiving promotional emails from us by following the instructions in those emails.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
