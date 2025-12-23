import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Separator } from './ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import {
  Search,
  ShoppingCart,
  Person as User,
  Menu,
  Home,
  Inventory2 as Package,
  Article as FileText,
  Settings,
  ExpandMore as ChevronDown,
  FilterList as Filter,
  SwapVert as ArrowUpDown,
  QrCodeScanner as Scan,
  Mic,
  Notifications as Bell,
  LocationOn as MapPin,
  LocalShipping as Truck,
  Star,
  AccessTime as Clock,
  Apps as Grid3X3,
  Close as X,
  ChevronRight
} from '@mui/icons-material';

export function NavigationComponents({ activeComponent }: { activeComponent: string }) {
  const [cartCount, setCartCount] = useState(3);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Featured');
  const [searchValue, setSearchValue] = useState('');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [notificationCount, setNotificationCount] = useState(2);

  // Sample data for enhanced components
  const departments = ['Tools', 'Hardware', 'Paint', 'Lumber', 'Electrical', 'Plumbing', 'Garden', 'Appliances'];
  const searchSuggestions = ['cordless drill', 'paint brush', 'screws', 'LED bulbs', 'garden hose'];
  const recentSearches = ['power tools', 'deck stain', 'door handles'];
  const filterOptions = ['In Stock', 'On Sale', 'Free Shipping', 'Pro Exclusive', 'New Arrivals'];
  const cartItems = [
    { name: 'DeWalt Drill', price: 199.99, quantity: 1 },
    { name: 'Paint Brush Set', price: 24.99, quantity: 2 },
    { name: 'Wood Screws', price: 12.99, quantity: 1 }
  ];

  if (activeComponent === 'Global Header') {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Global Header - Desktop</h3>
          <div className="border border-border rounded-lg p-4 bg-card shadow-sm">
            <header className="flex items-center justify-between py-4 px-6">
              <div className="flex items-center gap-8">
                <motion.div
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Home className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <nav className="hidden md:flex items-center gap-6">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="font-medium hover:text-primary">
                        Departments <ChevronDown className="w-4 h-4 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-64 p-4">
                      <div className="grid grid-cols-2 gap-2">
                        {departments.map((dept) => (
                          <DropdownMenuItem key={dept} className="flex items-center gap-2 p-2">
                            <Package className="w-4 h-4" />
                            {dept}
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button variant="ghost" className="font-medium hover:text-primary">Services</Button>
                  <Button variant="ghost" className="font-medium hover:text-primary">Projects & Ideas</Button>
                </nav>
              </div>

              <div className="flex-1 max-w-2xl mx-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="What can we help you find today?"
                    className="pl-10 pr-24 py-3 text-base focus:ring-2 focus:ring-primary/20 transition-all"
                    value={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                      setShowSearchSuggestions(e.target.value.length > 0);
                    }}
                    onFocus={() => setShowSearchSuggestions(searchValue.length > 0)}
                    onBlur={() => setTimeout(() => setShowSearchSuggestions(false), 200)}
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-primary/10">
                      <Scan className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-primary/10">
                      <Mic className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Search Suggestions Dropdown */}
                  {showSearchSuggestions && (
                    <motion.div
                      className="absolute top-full left-0 right-0 bg-card border border-border rounded-md mt-1 shadow-lg z-50"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <div className="py-2">
                        <div className="px-3 py-1 text-xs font-medium text-muted-foreground">Suggestions</div>
                        {searchSuggestions.map((suggestion) => (
                          <div key={suggestion} className="px-3 py-2 hover:bg-muted cursor-pointer text-sm">
                            <Search className="w-4 h-4 inline mr-2" />
                            {suggestion}
                          </div>
                        ))}
                        <Separator className="my-2" />
                        <div className="px-3 py-1 text-xs font-medium text-muted-foreground">Recent</div>
                        {recentSearches.map((search) => (
                          <div key={search} className="px-3 py-2 hover:bg-muted cursor-pointer text-sm">
                            <Clock className="w-4 h-4 inline mr-2" />
                            {search}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative hover:bg-primary/10">
                  <Bell className="w-5 h-5" />
                  {notificationCount > 0 && (
                    <Badge
                      variant="destructive"
                      className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs bg-primary border-0"
                    >
                      {notificationCount}
                    </Badge>
                  )}
                </Button>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative hover:bg-primary/10">
                      <ShoppingCart className="w-5 h-5" />
                      <Badge
                        variant="destructive"
                        className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs bg-primary border-0"
                      >
                        {cartCount}
                      </Badge>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Shopping Cart</DialogTitle>
                      <DialogDescription>
                        You have {cartCount} items in your cart
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-3">
                      {cartItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                          <p className="font-semibold">${item.price}</p>
                        </div>
                      ))}
                      <div className="pt-3 border-t">
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span>${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        View Cart & Checkout
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2 hover:bg-primary/10">
                      <User className="w-5 h-5" />
                      <span className="hidden lg:inline">Account</span>
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="px-3 py-2 border-b">
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-muted-foreground">john.doe@email.com</p>
                    </div>
                    <DropdownMenuItem className="gap-2">
                      <User className="w-4 h-4" />
                      My Account
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <Package className="w-4 h-4" />
                      Order History
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <Star className="w-4 h-4" />
                      My Lists
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <Settings className="w-4 h-4" />
                      Settings
                    </DropdownMenuItem>
                    <Separator className="my-1" />
                    <DropdownMenuItem className="text-destructive">Sign Out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </header>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Global Header - Mobile</h3>
          <div className="border border-border rounded-lg p-4 bg-card max-w-sm">
            <header className="flex items-center justify-between py-3">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <div className="py-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Home className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="font-semibold">Home Depot</span>
                    </div>
                    <nav className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start">Departments</Button>
                      <Button variant="ghost" className="w-full justify-start">Services</Button>
                      <Button variant="ghost" className="w-full justify-start">Projects & Ideas</Button>
                      <Separator className="my-4" />
                      <Button variant="ghost" className="w-full justify-start">Sign In</Button>
                      <Button variant="ghost" className="w-full justify-start">Account</Button>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>

              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Home className="w-4 h-4 text-primary-foreground" />
              </div>

              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs bg-primary border-0"
                >
                  {cartCount}
                </Badge>
              </Button>
            </header>
          </div>
        </div>
      </div>
    );
  }

  if (activeComponent === 'Hamburger Menu') {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Hamburger Menu - Mobile</h3>
          <div className="border border-border rounded-lg p-4 bg-card max-w-sm mx-auto">
            <div className="flex items-center justify-between py-3 px-2">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 p-0">
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="p-6 bg-primary text-primary-foreground">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-card rounded-lg flex items-center justify-center">
                            <Home className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold">Home Depot</p>
                            <p className="text-sm opacity-90">Welcome back, John!</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>Toronto, ON M5V 3A8</span>
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex-1 overflow-y-auto">
                      <div className="p-4 space-y-2">
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">Shop</h4>
                          <div className="space-y-1">
                            <Button variant="ghost" className="w-full justify-start gap-3 h-12">
                              <Grid3X3 className="w-5 h-5" />
                              All Departments
                              <ChevronRight className="w-4 h-4 ml-auto" />
                            </Button>
                            <Button variant="ghost" className="w-full justify-start gap-3 h-12">
                              <Package className="w-5 h-5" />
                              Tools
                              <Badge className="ml-auto bg-red-500">Sale</Badge>
                            </Button>
                            <Button variant="ghost" className="w-full justify-start gap-3 h-12">
                              <Home className="w-5 h-5" />
                              Hardware
                            </Button>
                            <Button variant="ghost" className="w-full justify-start gap-3 h-12">
                              <FileText className="w-5 h-5" />
                              Paint
                            </Button>
                          </div>
                        </div>

                        <Separator className="my-4" />

                        <div className="mb-4">
                          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">Services</h4>
                          <div className="space-y-1">
                            <Button variant="ghost" className="w-full justify-start gap-3 h-12">
                              <Truck className="w-5 h-5" />
                              Delivery & Installation
                            </Button>
                            <Button variant="ghost" className="w-full justify-start gap-3 h-12">
                              <Settings className="w-5 h-5" />
                              Tool Rental
                            </Button>
                          </div>
                        </div>

                        <Separator className="my-4" />

                        <div>
                          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-2">Account</h4>
                          <div className="space-y-1">
                            <Button variant="ghost" className="w-full justify-start gap-3 h-12">
                              <User className="w-5 h-5" />
                              My Account
                            </Button>
                            <Button variant="ghost" className="w-full justify-start gap-3 h-12">
                              <Package className="w-5 h-5" />
                              Order History
                            </Button>
                            <Button variant="ghost" className="w-full justify-start gap-3 h-12">
                              <Star className="w-5 h-5" />
                              My Lists
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="p-4 border-t bg-muted/30">
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <p className="font-medium">Store Hours</p>
                          <p className="text-muted-foreground">8 AM - 10 PM</p>
                        </div>
                        <Button size="sm" variant="outline">
                          Find Store
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-primary-foreground" />
              </div>

              <Button variant="ghost" size="icon" className="relative hover:bg-primary/10">
                <ShoppingCart className="w-5 h-5" />
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs bg-primary border-0"
                >
                  {cartCount}
                </Badge>
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Mobile Bottom Navigation</h3>
          <div className="border border-border rounded-lg p-4 bg-card max-w-sm mx-auto">
            <nav className="flex items-center justify-around py-2">
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" className="flex flex-col items-center gap-1 p-2">
                  <Home className="w-5 h-5 text-primary" />
                  <span className="text-xs font-medium text-primary">Home</span>
                </Button>
              </motion.div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" className="flex flex-col items-center gap-1 p-2">
                  <Package className="w-5 h-5" />
                  <span className="text-xs">Shop</span>
                </Button>
              </motion.div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" className="flex flex-col items-center gap-1 p-2">
                  <FileText className="w-5 h-5" />
                  <span className="text-xs">Articles</span>
                </Button>
              </motion.div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" className="flex flex-col items-center gap-1 p-2 relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="text-xs">Cart</span>
                  <Badge
                    variant="destructive"
                    className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center text-xs bg-primary border-0 animate-pulse"
                  >
                    {cartCount}
                  </Badge>
                </Button>
              </motion.div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" className="flex flex-col items-center gap-1 p-2">
                  <User className="w-5 h-5" />
                  <span className="text-xs">Profile</span>
                </Button>
              </motion.div>
            </nav>
          </div>
        </div>
      </div>
    );
  }

  if (activeComponent === 'Mobile Bottom Nav') {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Mobile Bottom Navigation</h3>
        <div className="border border-border rounded-lg p-4 bg-card max-w-sm mx-auto">
          <nav className="flex items-center justify-around py-2">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" className="flex flex-col items-center gap-1 p-2">
                <Home className="w-5 h-5 text-primary" />
                <span className="text-xs font-medium text-primary">Home</span>
              </Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" className="flex flex-col items-center gap-1 p-2">
                <Package className="w-5 h-5" />
                <span className="text-xs">Shop</span>
              </Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" className="flex flex-col items-center gap-1 p-2">
                <FileText className="w-5 h-5" />
                <span className="text-xs">Articles</span>
              </Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" className="flex flex-col items-center gap-1 p-2 relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="text-xs">Cart</span>
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center text-xs bg-primary border-0 animate-pulse"
                >
                  {cartCount}
                </Badge>
              </Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" className="flex flex-col items-center gap-1 p-2">
                <User className="w-5 h-5" />
                <span className="text-xs">Profile</span>
              </Button>
            </motion.div>
          </nav>
        </div>
      </div>
    );
  }

  if (activeComponent === 'Breadcrumb') {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Breadcrumb Navigation</h3>
        <div className="border border-border rounded-lg p-4 bg-card">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="hover:text-primary">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="hover:text-primary">Departments</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="hover:text-primary">Tools</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="hover:text-primary">Power Tools</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Drills</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    );
  }

  if (activeComponent === 'Filter Bar') {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Sticky Filter & Sort Bar</h3>
          <div className="border border-border rounded-lg p-4 bg-card shadow-sm">
            <div className="flex items-center justify-between py-3 px-4 border-b border-border bg-muted/30 rounded-md">
              <div className="flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2 hover:bg-primary/10">
                      <Filter className="w-4 h-4" />
                      Filter
                      {selectedFilters.length > 0 && (
                        <Badge className="ml-1 bg-primary text-primary-foreground">
                          {selectedFilters.length}
                        </Badge>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64 p-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Availability</h4>
                        <div className="space-y-2">
                          {filterOptions.map((option) => (
                            <div key={option} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id={option}
                                className="rounded border-border"
                                checked={selectedFilters.includes(option)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedFilters([...selectedFilters, option]);
                                  } else {
                                    setSelectedFilters(selectedFilters.filter(f => f !== option));
                                  }
                                }}
                              />
                              <label htmlFor={option} className="text-sm">
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">Apply</Button>
                        <Button size="sm" variant="outline" onClick={() => setSelectedFilters([])}>
                          Clear
                        </Button>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">1,247 results</span>
                  <span className="text-sm text-muted-foreground">for "power tools"</span>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2 hover:bg-primary/10">
                    <ArrowUpDown className="w-4 h-4" />
                    Sort: {selectedSort}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => setSelectedSort('Featured')} className="gap-2">
                    <Star className="w-4 h-4" />
                    Featured
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedSort('Price: Low to High')} className="gap-2">
                    Price: Low to High
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedSort('Price: High to Low')} className="gap-2">
                    Price: High to Low
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedSort('Customer Rating')} className="gap-2">
                    <Star className="w-4 h-4" />
                    Customer Rating
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSelectedSort('Newest')} className="gap-2">
                    Newest
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Active Filters */}
            {selectedFilters.length > 0 && (
              <div className="mt-3 flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium">Active filters:</span>
                {selectedFilters.map((filter) => (
                  <Badge key={filter} variant="secondary" className="gap-1">
                    {filter}
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-destructive"
                      onClick={() => setSelectedFilters(selectedFilters.filter(f => f !== filter))}
                    />
                  </Badge>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedFilters([])}
                  className="text-muted-foreground hover:text-destructive"
                >
                  Clear all
                </Button>
              </div>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Mobile Filter Sheet</h3>
          <div className="border border-border rounded-lg p-4 bg-card max-w-sm mx-auto">
            <div className="flex items-center justify-between py-2">
              <span className="text-sm font-medium">524 results</span>
              <div className="flex gap-2">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Filter className="w-4 h-4" />
                      Filter
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="bottom" className="h-96">
                    <div className="py-4">
                      <h3 className="font-semibold mb-4">Filter Products</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Price Range</h4>
                          <div className="flex gap-2">
                            <Input placeholder="Min" className="flex-1" />
                            <Input placeholder="Max" className="flex-1" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Brand</h4>
                          <div className="space-y-2">
                            {['DeWalt', 'Milwaukee', 'Ryobi'].map((brand) => (
                              <div key={brand} className="flex items-center space-x-2">
                                <input type="checkbox" id={`mobile-${brand}`} />
                                <label htmlFor={`mobile-${brand}`} className="text-sm">{brand}</label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2 pt-4">
                          <Button className="flex-1 bg-primary">Apply Filters</Button>
                          <Button variant="outline" className="flex-1">Reset</Button>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>

                <Button variant="outline" size="sm" className="gap-2">
                  <ArrowUpDown className="w-4 h-4" />
                  Sort
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Enhanced Search Bar</h3>
        <div className="border border-border rounded-lg p-4 bg-card max-w-lg shadow-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search tools, materials, and more..."
              className="pl-10 pr-24 py-3 text-base focus:ring-2 focus:ring-primary/20"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-primary/10">
                  <Scan className="w-4 h-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-primary/10">
                  <Mic className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Search Results Preview</h3>
        <Card className="max-w-lg">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Popular searches</span>
                <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                  Clear history
                </Button>
              </div>
              <div className="space-y-2">
                {['cordless drill', 'paint brushes', 'wood screws', 'LED light bulbs'].map((search) => (
                  <div key={search} className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{search}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}