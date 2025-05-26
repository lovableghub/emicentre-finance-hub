
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MembershipCard from "@/components/MembershipCard";

const Membership = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly");
  
  // Sample membership plans for demonstration
  const membershipPlans = {
    monthly: [
      {
        id: 1,
        title: "Basic",
        price: "$9.99",
        period: "/month",
        description: "Essential features for individuals",
        features: [
          "Access to job board",
          "Basic profile",
          "5 job applications per month",
          "Email notifications"
        ],
        popular: false
      },
      {
        id: 2,
        title: "Professional",
        price: "$19.99",
        period: "/month",
        description: "Advanced features for serious job seekers",
        features: [
          "Everything in Basic",
          "Priority job applications",
          "Unlimited job applications",
          "Access to premium jobs",
          "Profile highlighting",
          "Direct messaging with employers"
        ],
        popular: true
      },
      {
        id: 3,
        title: "Enterprise",
        price: "$39.99",
        period: "/month",
        description: "Complete solution for businesses",
        features: [
          "Everything in Professional",
          "Multiple user accounts",
          "Dedicated support",
          "API access",
          "Custom branding",
          "Analytics dashboard",
          "Bulk job posting"
        ],
        popular: false
      }
    ],
    annually: [
      {
        id: 1,
        title: "Basic",
        price: "$99.99",
        period: "/year",
        description: "Essential features for individuals",
        features: [
          "Access to job board",
          "Basic profile",
          "5 job applications per month",
          "Email notifications"
        ],
        popular: false
      },
      {
        id: 2,
        title: "Professional",
        price: "$199.99",
        period: "/year",
        description: "Advanced features for serious job seekers",
        features: [
          "Everything in Basic",
          "Priority job applications",
          "Unlimited job applications",
          "Access to premium jobs",
          "Profile highlighting",
          "Direct messaging with employers"
        ],
        popular: true
      },
      {
        id: 3,
        title: "Enterprise",
        price: "$399.99",
        period: "/year",
        description: "Complete solution for businesses",
        features: [
          "Everything in Professional",
          "Multiple user accounts",
          "Dedicated support",
          "API access",
          "Custom branding",
          "Analytics dashboard",
          "Bulk job posting"
        ],
        popular: false
      }
    ]
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-brand-50 dark:bg-background py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl font-bold mb-4">Choose Your Membership Plan</h1>
              <p className="text-lg text-muted-foreground">
                Select the right plan to unlock premium features and advance your professional journey.
              </p>
            </div>
            
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center bg-muted rounded-lg p-1">
                <button
                  onClick={() => setBillingPeriod("monthly")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    billingPeriod === "monthly" 
                      ? "bg-white dark:bg-card shadow-sm" 
                      : "text-muted-foreground"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod("annually")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    billingPeriod === "annually" 
                      ? "bg-white dark:bg-card shadow-sm" 
                      : "text-muted-foreground"
                  }`}
                >
                  Annually <span className="text-xs font-normal text-brand-500">Save 20%</span>
                </button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {membershipPlans[billingPeriod].map(plan => (
                <MembershipCard key={plan.id} {...plan} />
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white dark:bg-card">
          <div className="container max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-10">Compare Membership Features</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 w-1/3">Features</th>
                    <th className="text-center py-4 px-4">Basic</th>
                    <th className="text-center py-4 px-4">Professional</th>
                    <th className="text-center py-4 px-4">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">Job Applications</td>
                    <td className="text-center py-4 px-4">5 per month</td>
                    <td className="text-center py-4 px-4">Unlimited</td>
                    <td className="text-center py-4 px-4">Unlimited</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">Premium Job Listings</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-muted-foreground">-</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">Profile Highlighting</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-muted-foreground">-</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">Direct Messaging</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-muted-foreground">-</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">Multiple User Accounts</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-muted-foreground">-</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-muted-foreground">-</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">API Access</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-muted-foreground">-</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-muted-foreground">-</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">Custom Branding</td>
                    <td className="text-center py-4 px-4">
                      <span className="text-muted-foreground">-</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <span className="text-muted-foreground">-</span>
                    </td>
                    <td className="text-center py-4 px-4">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4"></td>
                    <td className="text-center py-4 px-4">
                      <Button>Get Basic</Button>
                    </td>
                    <td className="text-center py-4 px-4">
                      <Button>Get Professional</Button>
                    </td>
                    <td className="text-center py-4 px-4">
                      <Button>Get Enterprise</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-muted/30 dark:bg-muted/10">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="grid gap-4 md:gap-6">
              <div className="bg-white dark:bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">How do I upgrade my membership?</h3>
                <p className="text-muted-foreground">
                  You can upgrade your membership at any time from your account settings. 
                  The price difference will be prorated for your current billing cycle.
                </p>
              </div>
              
              <div className="bg-white dark:bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Can I cancel my subscription?</h3>
                <p className="text-muted-foreground">
                  Yes, you can cancel your subscription at any time. Your membership will remain active 
                  until the end of your current billing period.
                </p>
              </div>
              
              <div className="bg-white dark:bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Is there a free trial?</h3>
                <p className="text-muted-foreground">
                  We offer a 7-day free trial for new users on our Professional plan. 
                  You can cancel anytime during the trial period without being charged.
                </p>
              </div>
              
              <div className="bg-white dark:bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, including Visa, Mastercard, American Express, 
                  and Discover. We also support PayPal for select regions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Membership;
