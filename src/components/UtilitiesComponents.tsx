import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from './ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Progress } from './ui/progress';
import { Skeleton } from './ui/skeleton';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';
import { 
  Plus, 
  ShoppingCart, 
  MapPin, 
  Mail, 
  User, 
  Lock,
  Loader2,
  CheckCircle,
  AlertCircle,
  Info,
  X,
  Store,
  Navigation,
  Phone
} from 'lucide-react';

export function UtilitiesComponents({ activeComponent }: { activeComponent: string }) {
  const [showToast, setShowToast] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate loading progress
  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= 100) {
            setIsLoading(false);
            return 0;
          }
          return prev + 10;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const showSuccessToast = () => {
    toast.success('Item added to cart!', {
      description: 'DeWalt 20V Drill has been added to your cart.',
      action: {
        label: 'View Cart',
        onClick: () => console.log('View cart clicked'),
      },
    });
  };

  const showErrorToast = () => {
    toast.error('Error adding item', {
      description: 'Please try again or contact support.',
    });
  };

  const showInfoToast = () => {
    toast('Store closing soon', {
      description: 'Your local store closes at 9 PM today.',
      icon: <Info className="w-4 h-4" />,
    });
  };

  if (activeComponent === 'Modals') {
    return (
      <div className="space-y-8">
        <h3 className="text-lg font-semibold">Modal Dialogs</h3>
        
        <div className="flex flex-wrap gap-4">
          {/* Login Modal */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <User className="w-4 h-4 mr-2" />
                Login Modal
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Sign In to Your Account
                </DialogTitle>
                <DialogDescription>
                  Enter your email and password to sign in to your Home Depot account
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    Remember me
                  </label>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Forgot password?
                  </Button>
                </div>
                <div className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Sign In
                  </Button>
                  <Button variant="outline" className="w-full">
                    Create New Account
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Store Locator Modal */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <MapPin className="w-4 h-4 mr-2" />
                Store Locator
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Store className="w-5 h-5" />
                  Find a Store Near You
                </DialogTitle>
                <DialogDescription>
                  Search for Home Depot stores near your location to find hours, services, and directions
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Enter Your Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      id="location" 
                      placeholder="City, Province or Postal Code" 
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Navigation className="w-4 h-4 mr-2" />
                  Search Stores
                </Button>
                
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {[
                    { name: 'Home Depot Toronto East', distance: '2.3 km', address: '123 Queen St E, Toronto, ON', phone: '(416) 555-0123' },
                    { name: 'Home Depot Scarborough', distance: '5.7 km', address: '456 Kingston Rd, Scarborough, ON', phone: '(416) 555-0456' },
                    { name: 'Home Depot Mississauga', distance: '8.2 km', address: '789 Dundas St W, Mississauga, ON', phone: '(905) 555-0789' }
                  ].map((store, index) => (
                    <div key={index} className="p-3 border border-border rounded-lg hover:bg-muted/50">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{store.name}</h4>
                        <span className="text-sm text-primary font-medium">{store.distance}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{store.address}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Phone className="w-3 h-3" />
                          {store.phone}
                        </div>
                        <Button size="sm" variant="outline">
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Newsletter Modal */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Mail className="w-4 h-4 mr-2" />
                Newsletter Signup
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Stay Updated
                </DialogTitle>
                <DialogDescription>
                  Subscribe to receive the latest deals, project ideas, and expert tips from Home Depot Canada
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <p className="text-muted-foreground">
                  Get the latest deals, project ideas, and expert tips delivered to your inbox.
                </p>
                <div className="space-y-2">
                  <Label htmlFor="newsletter-email">Email Address</Label>
                  <Input 
                    id="newsletter-email" 
                    type="email" 
                    placeholder="your@email.com" 
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-sm">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-muted-foreground">
                      I agree to receive promotional emails and updates from Home Depot Canada.
                    </span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div>
          <h4 className="font-medium mb-4">Mobile Sheet Modal</h4>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Quick Cart (Mobile)
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Your Cart (3 items)
                </SheetTitle>
              </SheetHeader>
              <div className="py-6 space-y-4">
                {[
                  { name: 'DeWalt 20V Drill', price: 199.99, qty: 1 },
                  { name: 'Milwaukee Impact Driver', price: 179.99, qty: 1 },
                  { name: 'Ryobi Circular Saw', price: 129.99, qty: 1 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                    <div className="w-12 h-12 bg-muted rounded-md"></div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.qty}</p>
                    </div>
                    <p className="font-semibold">${item.price}</p>
                  </div>
                ))}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Total:</span>
                    <span className="text-xl font-bold text-primary">$509.97</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Checkout
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    );
  }

  if (activeComponent === 'Tooltips') {
    return (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Tooltips</h3>
        
        <div className="flex flex-wrap gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <Info className="w-4 h-4 mr-2" />
                  Product Info
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This tool is perfect for both beginners and professionals</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click to add this item to your shopping cart</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">
                  <Lock className="w-4 h-4 mr-2" />
                  Secure Checkout
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="space-y-1">
                  <p className="font-medium">Secure Payment</p>
                  <p className="text-sm">Your payment information is encrypted and secure</p>
                </div>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="inline-flex items-center gap-2 p-2 border border-border rounded-md cursor-help">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span className="text-sm">Field Validation</span>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Please enter a valid email address</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    );
  }

  if (activeComponent === 'Toast Notifications') {
    return (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Toast Notifications</h3>
        
        <div className="flex flex-wrap gap-4">
          <Button onClick={showSuccessToast} className="bg-green-600 hover:bg-green-700">
            <CheckCircle className="w-4 h-4 mr-2" />
            Success Toast
          </Button>
          
          <Button onClick={showErrorToast} variant="destructive">
            <AlertCircle className="w-4 h-4 mr-2" />
            Error Toast
          </Button>
          
          <Button onClick={showInfoToast} variant="outline">
            <Info className="w-4 h-4 mr-2" />
            Info Toast
          </Button>

          <Button 
            onClick={() => toast.loading('Processing your order...', { id: 'loading-toast' })}
            variant="outline"
          >
            <Loader2 className="w-4 h-4 mr-2" />
            Loading Toast
          </Button>
        </div>

        <div className="p-4 border border-border rounded-lg bg-muted/20">
          <p className="text-sm text-muted-foreground mb-2">
            Toast notifications appear in the bottom-right corner with different variants:
          </p>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• Success: Confirmation messages (green)</li>
            <li>• Error: Error and warning messages (red)</li>
            <li>• Info: General information (blue)</li>
            <li>• Loading: Progress indicators (with animation)</li>
          </ul>
        </div>
      </div>
    );
  }

  if (activeComponent === 'Floating Action Button') {
    return (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Floating Action Button</h3>
        
        <div className="relative min-h-[300px] border border-border rounded-lg p-6 bg-muted/20">
          <p className="text-muted-foreground mb-4">
            The floating action button typically appears in the bottom-right corner of the screen for quick cart access.
          </p>
          
          {/* Simulated FAB */}
          <div className="fixed bottom-20 right-8 z-50">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    size="lg"
                    className="w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 relative"
                    onClick={() => toast.success('Quick cart opened!')}
                  >
                    <ShoppingCart className="w-6 h-6" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-semibold">
                      3
                    </div>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Quick Cart Access</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">FAB Features:</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Fixed position with shadow
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Badge showing cart item count
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Tooltip on hover
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Smooth hover animations
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h3 className="text-lg font-semibold">Loading States</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Loading Spinners */}
        <div className="space-y-4">
          <h4 className="font-medium">Loading Spinners</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
              <span>Loading products...</span>
            </div>
            
            <Button disabled className="w-full">
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Adding to Cart
            </Button>

            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <Loader2 className="w-5 h-5 animate-spin text-primary" />
                <div>
                  <p className="font-medium">Processing Payment</p>
                  <p className="text-sm text-muted-foreground">Please don't close this window</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="space-y-4">
          <h4 className="font-medium">Progress Indicators</h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Upload Progress</span>
                <span className="text-sm text-muted-foreground">65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Loading Progress</span>
                <span className="text-sm text-muted-foreground">{loadingProgress}%</span>
              </div>
              <Progress value={loadingProgress} className="h-2" />
              <Button 
                onClick={() => setIsLoading(true)} 
                disabled={isLoading}
                className="mt-2"
                size="sm"
              >
                {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Start Loading
              </Button>
            </div>

            <div className="space-y-2">
              <span className="text-sm">Order Status</span>
              <div className="flex items-center gap-2">
                <Progress value={75} className="h-2 flex-1" />
                <span className="text-sm text-primary font-medium">In Transit</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skeleton Loaders */}
      <div className="space-y-4">
        <h4 className="font-medium">Skeleton Loaders</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 border border-border rounded-lg space-y-3">
              <Skeleton className="h-40 w-full rounded-md" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-6 w-1/4" />
              </div>
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}