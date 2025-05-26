
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="absolute top-24 right-8 z-10">
        <ThemeSwitcher />
      </div>
      
      <main className="container py-16 max-w-4xl flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: May 13, 2025
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the WorkConnect website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Changes to Terms</h2>
          <p>
            We may modify these Terms of Service at any time. Your continued use of our services following any changes indicates your acceptance of the revised terms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
          <p>
            To access certain features of our services, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>
          <p className="mt-2">
            You agree to provide accurate and complete information when creating your account and to update your information to keep it accurate and current. We reserve the right to suspend or terminate accounts that contain false or misleading information.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Content</h2>
          <p>
            You retain ownership of any content you submit to our services, including resumes, profiles, and job postings ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute such content.
          </p>
          <p className="mt-2">
            You represent and warrant that you own or have the necessary rights to the User Content you submit and that such content does not violate the rights of any third party.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Prohibited Conduct</h2>
          <p>
            You agree not to:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Use our services for any illegal purpose or in violation of any laws</li>
            <li>Post or transmit harmful, fraudulent, or deceptive content</li>
            <li>Impersonate any person or entity</li>
            <li>Interfere with or disrupt our services or servers</li>
            <li>Attempt to gain unauthorized access to our services or systems</li>
            <li>Use our services to distribute unsolicited commercial messages (spam)</li>
            <li>Collect or store personal data about other users without their consent</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Intellectual Property</h2>
          <p>
            Our services, including all content, features, and functionality, are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Termination</h2>
          <p>
            We may terminate or suspend your access to our services at any time, without prior notice or liability, for any reason, including if you breach these Terms of Service.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Disclaimer of Warranties</h2>
          <p>
            Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="mt-2">
            Email: legal@workconnect.com<br />
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

export default TermsOfService;
