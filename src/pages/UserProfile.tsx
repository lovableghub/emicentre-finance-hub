
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import { useToast } from '@/hooks/use-toast';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

const UserProfile = () => {
  const { toast } = useToast();
  
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-foreground">User Profile</h1>
          <ThemeSwitcher />
        </div>
        
        <Tabs defaultValue="personal" className="space-y-4">
          <TabsList className="border border-border bg-card">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal">
            <Card className="bg-card text-card-foreground">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your personal details here. This information will be displayed publicly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSave} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        className="min-h-[100px]"
                        defaultValue="I'm a software developer with 5+ years of experience in web applications."
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit">Save Changes</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="preferences">
            <Card className="bg-card text-card-foreground">
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
                <CardDescription>
                  Customize your application experience and notification settings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <h3 className="text-lg font-medium">Theme Preferences</h3>
                  <div className="flex items-center space-x-4 mb-6">
                    <ThemeSwitcher />
                  </div>
                  
                  <h3 className="text-lg font-medium">Email Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="jobAlerts" defaultChecked />
                      <Label htmlFor="jobAlerts" className="text-sm font-medium leading-none">Job Alerts</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="marketplaceDeals" defaultChecked />
                      <Label htmlFor="marketplaceDeals" className="text-sm font-medium leading-none">Marketplace Deals</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="membershipUpdates" defaultChecked />
                      <Label htmlFor="membershipUpdates" className="text-sm font-medium leading-none">Membership Updates</Label>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Save Preferences</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="account">
            <Card className="bg-card text-card-foreground">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account settings and password.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <div className="flex justify-end">
                    <Button>Update Password</Button>
                  </div>
                  
                  <div className="pt-6 border-t border-border">
                    <h3 className="text-lg font-medium text-destructive mb-2">Danger Zone</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <Button variant="destructive">Delete Account</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default UserProfile;
