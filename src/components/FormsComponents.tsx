import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Switch } from './ui/switch';
import { Slider } from './ui/slider';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { toast } from 'sonner@2.0.3';
import {
  Search,
  Plus,
  Minus,
  MapPin,
  CreditCard,
  Scan,
  Mic,
  Eye,
  EyeOff,
  AlertCircle,
  Check,
  Star,
  Filter,
  X,
  ChevronDown,
  Lock,
  Shield,
  Truck,
  Calendar,
  Gift,
  Percent,
  ShoppingBag
} from 'lucide-react';

export function FormsComponents({ activeComponent }: { activeComponent: string }) {
  const [quantity, setQuantity] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [priceRange, setPriceRange] = useState([50]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const searchSuggestions = ['drill bits', 'screwdriver set', 'hammer', 'paint brushes', 'wood screws'];
  const filterOptions = ['In Stock', 'On Sale', 'Free Shipping', 'Best Seller', 'New Arrivals'];
  const brandOptions = ['DeWalt', 'Milwaukee', 'Ryobi', 'Makita', 'Black & Decker', 'Bosch'];

  if (activeComponent === 'Text Input') {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Text Input States</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="default">Default State</Label>
              <Input id="default" placeholder="Enter your email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="focused">Focused State</Label>
              <Input id="focused" placeholder="Enter your email" className="ring-2 ring-primary ring-offset-2" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="filled">Filled State</Label>
              <Input id="filled" defaultValue="john.doe@email.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="error">Error State</Label>
              <Input id="error" placeholder="Enter your email" className="border-destructive" />
              <p className="text-sm text-destructive flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Please enter a valid email address
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="success">Success State</Label>
              <Input id="success" defaultValue="john.doe@email.com" className="border-green-500" />
              <p className="text-sm text-green-600 flex items-center gap-2">
                <Check className="w-4 h-4" />
                Email address is valid
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="disabled">Disabled State</Label>
              <Input id="disabled" placeholder="Disabled input" disabled />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Input with Icons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Password Input</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="pr-10"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Location Input</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Enter postal code" className="pl-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeComponent === 'Search Bar') {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Enhanced Search Bar Variations</h3>
          <div className="space-y-6">
            <div>
              <Label className="mb-2">Smart Search with Autocomplete</Label>
              <div className="relative max-w-2xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="What can we help you find today?"
                  className="pl-10 pr-4 py-3 text-base focus:ring-2 focus:ring-primary/20 transition-all"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(e.target.value.length > 0);
                  }}
                  onFocus={() => setShowSuggestions(searchQuery.length > 0)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                />
                {showSuggestions && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 bg-card border border-border rounded-md mt-1 shadow-lg z-50"
                  >
                    <div className="py-2">
                      <div className="px-3 py-1 text-xs font-medium text-muted-foreground">Popular searches</div>
                      {searchSuggestions.map((suggestion) => (
                        <div key={suggestion} className="px-3 py-2 hover:bg-muted cursor-pointer flex items-center gap-2">
                          <Search className="w-4 h-4 text-muted-foreground" />
                          <span>{suggestion}</span>
                        </div>
                      ))}
                      <div className="border-t mt-2 pt-2">
                        <div className="px-3 py-2 hover:bg-muted cursor-pointer flex items-center gap-2">
                          <Scan className="w-4 h-4 text-primary" />
                          <span className="text-primary">Scan barcode to search</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            <div>
              <Label className="mb-2">Mobile Search with Advanced Features</Label>
              <Card className="max-w-md">
                <CardContent className="p-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="Search tools, materials..."
                      className="pl-10 pr-24 py-3"
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
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
                  <div className="flex gap-2 mt-3">
                    <Badge variant="secondary" className="text-xs">Tools</Badge>
                    <Badge variant="secondary" className="text-xs">Paint</Badge>
                    <Badge variant="secondary" className="text-xs">Hardware</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Label className="mb-2">Search with Filters</Label>
              <Card className="max-w-3xl">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        placeholder="Search products..."
                        className="pl-10 pr-4 py-3"
                      />
                    </div>
                    <Select>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tools">Tools</SelectItem>
                        <SelectItem value="hardware">Hardware</SelectItem>
                        <SelectItem value="paint">Paint</SelectItem>
                        <SelectItem value="lumber">Lumber</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Search className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Quick Filters */}
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-sm font-medium">Quick filters:</span>
                    {filterOptions.slice(0, 4).map((filter) => (
                      <Button
                        key={filter}
                        variant={selectedFilters.includes(filter) ? "default" : "outline"}
                        size="sm"
                        className="text-xs"
                        onClick={() => {
                          if (selectedFilters.includes(filter)) {
                            setSelectedFilters(selectedFilters.filter(f => f !== filter));
                          } else {
                            setSelectedFilters([...selectedFilters, filter]);
                          }
                        }}
                      >
                        {filter}
                        {selectedFilters.includes(filter) && (
                          <X className="w-3 h-3 ml-1" />
                        )}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Voice Search Demo</h3>
          <Card className="max-w-md">
            <CardContent className="p-6 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full cursor-pointer mb-4"
              >
                <Mic className="w-8 h-8 text-white" />
              </motion.div>
              <h4 className="font-medium mb-2">Voice Search</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Tap to search by voice. Try saying "cordless drill" or "paint brushes"
              </p>
              <Button variant="outline" size="sm">
                Try Voice Search
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (activeComponent === 'Dropdown Menu') {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Select Dropdowns</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Single Select</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tools">Tools</SelectItem>
                  <SelectItem value="hardware">Hardware</SelectItem>
                  <SelectItem value="lumber">Lumber & Building Materials</SelectItem>
                  <SelectItem value="paint">Paint</SelectItem>
                  <SelectItem value="electrical">Electrical</SelectItem>
                  <SelectItem value="plumbing">Plumbing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Multi-Select Brands</Label>
              <div className="border border-border rounded-md p-3 space-y-2">
                {['DeWalt', 'Milwaukee', 'Ryobi', 'Makita', 'Black & Decker'].map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={brand}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedBrands([...selectedBrands, brand]);
                        } else {
                          setSelectedBrands(selectedBrands.filter(b => b !== brand));
                        }
                      }}
                    />
                    <Label htmlFor={brand}>{brand}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeComponent === 'Checkboxes & Radio') {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Checkboxes</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="instock" />
              <Label htmlFor="instock">In Stock Only</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="sale" />
              <Label htmlFor="sale">On Sale</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="freeShipping" />
              <Label htmlFor="freeShipping">Free Shipping</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled" disabled />
              <Label htmlFor="disabled">Disabled Option</Label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Radio Groups</h3>
          <div className="space-y-6">
            <div>
              <Label className="mb-3">Delivery Options</Label>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="store" id="store" />
                  <Label htmlFor="store">Pick up in store (Free)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard">Standard Delivery ($9.99)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="express" id="express" />
                  <Label htmlFor="express">Express Delivery ($19.99)</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="mb-3">Toggle Switch</Label>
              <div className="flex items-center space-x-2">
                <Switch id="notifications" />
                <Label htmlFor="notifications">Email Notifications</Label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeComponent === 'Quantity Stepper') {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Quantity Controls</h3>
          <div className="space-y-4">
            <div>
              <Label className="mb-2">Default Stepper</Label>
              <div className="flex items-center border border-border rounded-md w-fit">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-none border-r"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <div className="w-16 h-10 flex items-center justify-center font-medium">
                  {quantity}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-none border-l"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <Label className="mb-2">Large Stepper</Label>
              <div className="flex items-center border border-border rounded-md w-fit">
                <Button
                  variant="ghost"
                  className="h-12 px-4 rounded-none border-r"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-5 h-5" />
                </Button>
                <div className="w-20 h-12 flex items-center justify-center font-medium text-lg">
                  {quantity}
                </div>
                <Button
                  variant="ghost"
                  className="h-12 px-4 rounded-none border-l"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Price Range Slider</h3>
          <div className="space-y-4 max-w-md">
            <Label>Price Range: $0 - ${priceRange[0]}</Label>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={500}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>$0</span>
              <span>$500+</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeComponent === 'Address Form') {
    return (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Address Form</h3>
        <div className="max-w-2xl space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Street Address</Label>
            <Input id="address" placeholder="123 Main Street" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="apartment">Apartment, Suite, etc. (Optional)</Label>
            <Input id="apartment" placeholder="Apt 4B" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="Toronto" />
            </div>
            <div className="space-y-2">
              <Label>Province</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select province" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ON">Ontario</SelectItem>
                  <SelectItem value="BC">British Columbia</SelectItem>
                  <SelectItem value="AB">Alberta</SelectItem>
                  <SelectItem value="QC">Quebec</SelectItem>
                  <SelectItem value="NS">Nova Scotia</SelectItem>
                  <SelectItem value="NB">New Brunswick</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input id="postalCode" placeholder="M5V 3A8" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="(416) 555-0123" />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="defaultAddress" />
            <Label htmlFor="defaultAddress">Set as default address</Label>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Enhanced Payment Form</h3>
        <div className="max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                Secure Payment
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Your payment information is encrypted and secure
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Payment Method Selection */}
              <div>
                <Label className="mb-3">Payment Method</Label>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" className="p-4 h-auto border-2 border-primary bg-primary/5">
                      <CreditCard className="w-6 h-6 mr-2" />
                      <div className="text-left">
                        <div className="font-medium">Credit Card</div>
                        <div className="text-xs text-muted-foreground">Visa, Mastercard</div>
                      </div>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" className="p-4 h-auto">
                      <div className="w-6 h-6 bg-blue-600 rounded mr-2 flex items-center justify-center text-white text-xs font-bold">
                        P
                      </div>
                      <div className="text-left">
                        <div className="font-medium">PayPal</div>
                        <div className="text-xs text-muted-foreground">Quick & secure</div>
                      </div>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" className="p-4 h-auto">
                      <Gift className="w-6 h-6 mr-2" />
                      <div className="text-left">
                        <div className="font-medium">Gift Card</div>
                        <div className="text-xs text-muted-foreground">Home Depot</div>
                      </div>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="outline" className="p-4 h-auto">
                      <ShoppingBag className="w-6 h-6 mr-2" />
                      <div className="text-left">
                        <div className="font-medium">Store Credit</div>
                        <div className="text-xs text-muted-foreground">$45.20 available</div>
                      </div>
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* Credit Card Form */}
              <div className="space-y-4 p-4 bg-muted/20 rounded-lg">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <div className="relative">
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="pr-12"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <CreditCard className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <div className="relative">
                      <Input id="cvv" placeholder="123" className="pr-8" />
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                        <div className="w-4 h-4 border border-muted-foreground rounded text-xs flex items-center justify-center">
                          ?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input id="cardName" placeholder="John Doe" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="saveCard" />
                    <Label htmlFor="saveCard" className="text-sm">
                      Save this card for future purchases
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="billingAddress" />
                    <Label htmlFor="billingAddress" className="text-sm">
                      Billing address same as shipping address
                    </Label>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="border-t pt-4">
                <h4 className="font-medium mb-3">Order Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$267.98</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (HST)</span>
                    <span>$34.84</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Promo Code</span>
                    <div className="flex gap-2">
                      <Input placeholder="Enter code" className="h-8 text-xs w-24" />
                      <Button size="sm" variant="outline" className="h-8 text-xs">
                        Apply
                      </Button>
                    </div>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-primary">$302.82</span>
                  </div>
                </div>
              </div>

              {/* Security Features */}
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-green-800">Your payment is secure</p>
                    <p className="text-sm text-green-600">
                      256-bit SSL encryption • PCI DSS compliant • Fraud protection
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  Back to Cart
                </Button>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 h-12"
                    onClick={() => toast.success('Order placed successfully!')}
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    Complete Order
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Alternative Payment Methods */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Alternative Payment Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-medium">Buy Now, Pay Later</h4>
              <p className="text-sm text-muted-foreground">
                Split your purchase into 4 interest-free payments
              </p>
              <Badge variant="secondary" className="text-xs">
                0% Interest
              </Badge>
            </div>
          </Card>

          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-medium">Home Depot Credit Card</h4>
              <p className="text-sm text-muted-foreground">
                Special financing available for purchases over $299
              </p>
              <Badge className="text-xs bg-blue-500">
                Apply Now
              </Badge>
            </div>
          </Card>

          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Percent className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-medium">Military Discount</h4>
              <p className="text-sm text-muted-foreground">
                10% everyday discount for military personnel
              </p>
              <Badge className="text-xs bg-green-500">
                Verify Status
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}