import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { Progress } from './ui/progress';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  Truck, 
  Store, 
  Calendar,
  CreditCard,
  Smartphone,
  Gift,
  CheckCircle,
  Confetti,
  MapPin,
  Clock,
  Star,
  Heart,
  Share,
  ShieldCheck,
  AlertCircle,
  Info,
  Percent,
  Tag,
  Users,
  Home,
  Building,
  Package
} from 'lucide-react';

export function CheckoutComponents({ activeComponent }: { activeComponent: string }) {
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: 'DeWalt 20V MAX Cordless Drill/Driver Kit', 
      price: 199.99, 
      originalPrice: 229.99,
      quantity: 1, 
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=100&h=100&fit=crop',
      rating: 4.5,
      inStock: true,
      warranty: '2 years',
      seller: 'Home Depot'
    },
    { 
      id: 2, 
      name: 'Milwaukee M18 FUEL Impact Driver', 
      price: 179.99, 
      originalPrice: 259.99,
      quantity: 2, 
      image: 'https://images.unsplash.com/photo-1609205797038-7ed45f8074bf?w=100&h=100&fit=crop',
      rating: 4.8,
      inStock: true,
      warranty: '5 years',
      seller: 'Home Depot'
    },
    { 
      id: 3, 
      name: 'Ryobi 18V ONE+ Circular Saw', 
      price: 129.99, 
      quantity: 1, 
      image: 'https://images.unsplash.com/photo-1622650316687-e5c8e8c0b02e?w=100&h=100&fit=crop',
      rating: 4.2,
      inStock: true,
      warranty: '3 years',
      seller: 'Home Depot'
    }
  ]);

  const [deliveryOption, setDeliveryOption] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [currentStep, setCurrentStep] = useState(1);
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState('');
  const [deliveryInstructions, setDeliveryInstructions] = useState('');
  const [selectedStore, setSelectedStore] = useState('');
  const [wishlistItems, setWishlistItems] = useState<number[]>([]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items => 
      items.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          toast.success(`Updated quantity to ${newQuantity}`);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number) => {
    const item = cartItems.find(item => item.id === id);
    setCartItems(items => items.filter(item => item.id !== id));
    toast.success(`${item?.name} removed from cart`);
  };

  const moveToWishlist = (id: number) => {
    const item = cartItems.find(item => item.id === id);
    setCartItems(items => items.filter(item => item.id !== id));
    setWishlistItems(prev => [...prev, id]);
    toast.success(`${item?.name} moved to wishlist`);
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'save10') {
      setAppliedPromo('SAVE10');
      toast.success('Promo code applied! 10% off your order');
    } else if (promoCode.toLowerCase() === 'freeship') {
      setAppliedPromo('FREESHIP');
      toast.success('Free shipping applied!');
    } else {
      toast.error('Invalid promo code');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const promoDiscount = appliedPromo === 'SAVE10' ? subtotal * 0.1 : 0;
  const shipping = appliedPromo === 'FREESHIP' ? 0 : deliveryOption === 'express' ? 19.99 : deliveryOption === 'standard' ? 9.99 : 0;
  const tax = (subtotal - promoDiscount) * 0.13; // HST
  const total = subtotal - promoDiscount + shipping + tax;

  const stores = [
    { id: '1', name: 'Toronto East', address: '123 Queen St E', distance: '2.3 km', availability: 'All items available' },
    { id: '2', name: 'Scarborough', address: '456 Kingston Rd', distance: '5.7 km', availability: 'All items available' },
    { id: '3', name: 'Mississauga', address: '789 Dundas St W', distance: '8.2 km', availability: '2 of 3 items available' }
  ];

  if (activeComponent === 'Cart List') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Shopping Cart</h3>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{cartItems.length} items</Badge>
            <Button variant="outline" size="sm">
              <Share className="w-4 h-4 mr-2" />
              Share Cart
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Your Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
                  </div>
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    Clear all
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <AnimatePresence>
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex items-start gap-4 p-4 border border-border rounded-lg hover:shadow-sm transition-shadow"
                    >
                      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                        <ImageWithFallback 
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-medium line-clamp-2">{item.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-3 h-3 ${i < Math.floor(item.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                  />
                                ))}
                                <span className="text-xs text-muted-foreground ml-1">({item.rating})</span>
                              </div>
                              <Badge variant="secondary" className="text-xs">
                                {item.warranty} warranty
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant={item.inStock ? "default" : "destructive"} className="text-xs">
                                {item.inStock ? "In Stock" : "Out of Stock"}
                              </Badge>
                              <span className="text-xs text-muted-foreground">Sold by {item.seller}</span>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="flex items-center gap-2">
                              {item.originalPrice && (
                                <span className="text-sm text-muted-foreground line-through">
                                  ${item.originalPrice.toFixed(2)}
                                </span>
                              )}
                              <span className="font-semibold text-primary">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
                            {item.originalPrice && (
                              <Badge variant="secondary" className="text-xs mt-1">
                                Save ${((item.originalPrice - item.price) * item.quantity).toFixed(2)}
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center border border-border rounded-md">
                              <motion.div whileTap={{ scale: 0.95 }}>
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  className="h-8 w-8 rounded-none"
                                  onClick={() => updateQuantity(item.id, -1)}
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="w-3 h-3" />
                                </Button>
                              </motion.div>
                              <div className="w-12 h-8 flex items-center justify-center text-sm font-medium">
                                {item.quantity}
                              </div>
                              <motion.div whileTap={{ scale: 0.95 }}>
                                <Button 
                                  variant="ghost" 
                                  size="icon"
                                  className="h-8 w-8 rounded-none"
                                  onClick={() => updateQuantity(item.id, 1)}
                                >
                                  <Plus className="w-3 h-3" />
                                </Button>
                              </motion.div>
                            </div>
                            
                            <div className="flex gap-1">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button 
                                      variant="ghost" 
                                      size="icon"
                                      className="h-8 w-8"
                                      onClick={() => moveToWishlist(item.id)}
                                    >
                                      <Heart className="w-4 h-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Move to wishlist</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>

                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button 
                                      variant="ghost" 
                                      size="icon"
                                      onClick={() => removeItem(item.id)}
                                      className="h-8 w-8 text-destructive hover:text-destructive"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Remove from cart</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {cartItems.length === 0 && (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="font-medium mb-2">Your cart is empty</h3>
                    <p className="text-muted-foreground mb-4">Add some items to get started</p>
                    <Button className="bg-primary">
                      Continue Shopping
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {promoDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Promo discount ({appliedPromo})</span>
                      <span>-${promoDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `${shipping.toFixed(2)}`}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Tax (HST)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="space-y-2">
                  <Label htmlFor="promo">Promo Code</Label>
                  <div className="flex gap-2">
                    <Input
                      id="promo"
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      variant="outline" 
                      onClick={applyPromoCode}
                      disabled={!promoCode}
                    >
                      Apply
                    </Button>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Try: SAVE10 or FREESHIP
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>Free returns within 90 days</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Price match guarantee</span>
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 h-12"
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Checkout
                  </Button>
                </motion.div>

                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (activeComponent === 'Delivery Options') {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Choose Your Delivery Method</h3>
          <Card>
            <CardContent className="p-6">
              <RadioGroup value={deliveryOption} onValueChange={setDeliveryOption} className="space-y-4">
                {/* Store Pickup */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    deliveryOption === 'pickup' ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="pickup" id="pickup" className="mt-1" />
                    <Label htmlFor="pickup" className="flex-1 cursor-pointer">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Store className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Store Pickup</p>
                            <p className="text-sm text-muted-foreground mb-2">Ready in 2 hours • Free</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                Fast & convenient
                              </div>
                              <div className="flex items-center gap-1">
                                <CheckCircle className="w-3 h-3 text-green-600" />
                                No contact pickup available
                              </div>
                            </div>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Free</Badge>
                      </div>
                    </Label>
                  </div>
                  
                  {deliveryOption === 'pickup' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 pl-16"
                    >
                      <div className="space-y-3">
                        <div>
                          <Label className="text-sm font-medium">Select Store</Label>
                          <Select value={selectedStore} onValueChange={setSelectedStore}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Choose pickup location" />
                            </SelectTrigger>
                            <SelectContent>
                              {stores.map((store) => (
                                <SelectItem key={store.id} value={store.id}>
                                  <div className="flex items-center justify-between w-full">
                                    <div>
                                      <p className="font-medium">{store.name}</p>
                                      <p className="text-xs text-muted-foreground">{store.address}</p>
                                    </div>
                                    <div className="text-right">
                                      <p className="text-xs text-primary">{store.distance}</p>
                                      <p className="text-xs text-green-600">{store.availability}</p>
                                    </div>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          💡 You'll receive a notification when your order is ready for pickup
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                {/* Standard Delivery */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    deliveryOption === 'standard' ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="standard" id="standard" className="mt-1" />
                    <Label htmlFor="standard" className="flex-1 cursor-pointer">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Truck className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">Standard Delivery</p>
                            <p className="text-sm text-muted-foreground mb-2">3-5 business days</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Home className="w-3 h-3" />
                                Delivered to your door
                              </div>
                              <div className="flex items-center gap-1">
                                <Package className="w-3 h-3" />
                                Tracking included
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="font-medium">$9.99</span>
                      </div>
                    </Label>
                  </div>
                </motion.div>

                {/* Express Delivery */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    deliveryOption === 'express' ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="express" id="express" className="mt-1" />
                    <Label htmlFor="express" className="flex-1 cursor-pointer">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-orange-600" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-medium">Express Delivery</p>
                              <Badge className="bg-orange-100 text-orange-800 text-xs">Popular</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">Next business day by 8 PM</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                Order by 2 PM today
                              </div>
                              <div className="flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" />
                                Signature required
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="font-medium">$19.99</span>
                      </div>
                    </Label>
                  </div>
                </motion.div>

                {/* Professional Installation */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="p-4 border-2 border-dashed border-muted-foreground/30 rounded-lg"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Professional Installation</p>
                      <p className="text-sm text-muted-foreground mb-2">White glove delivery & setup service</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" />
                          Licensed professionals
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Schedule at your convenience
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Check Availability
                      </Button>
                    </div>
                    <span className="text-sm font-medium">From $99</span>
                  </div>
                </motion.div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        {/* Delivery Instructions */}
        {(deliveryOption === 'standard' || deliveryOption === 'express') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Delivery Instructions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="instructions">Special delivery instructions (optional)</Label>
                    <Textarea
                      id="instructions"
                      placeholder="e.g., Leave at back door, Ring doorbell twice, etc."
                      value={deliveryInstructions}
                      onChange={(e) => setDeliveryInstructions(e.target.value)}
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Safe delivery guarantee</p>
                        <p className="text-muted-foreground">Your items are protected during shipping</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Truck className="w-4 h-4 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium">Real-time tracking</p>
                        <p className="text-muted-foreground">Get updates every step of the way</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Estimated Delivery Date */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Calendar className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium">
                  {deliveryOption === 'pickup' 
                    ? 'Ready for pickup: Today by 6 PM' 
                    : deliveryOption === 'express' 
                    ? 'Estimated delivery: Tomorrow by 8 PM'
                    : 'Estimated delivery: March 18-20, 2024'
                  }
                </p>
                <p className="text-sm text-muted-foreground">
                  We'll send you tracking updates via email and SMS
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (activeComponent === 'Payment Methods') {
    return (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Payment Methods</h3>
        <Card>
          <CardContent className="p-6">
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
              <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="credit" id="credit" />
                <Label htmlFor="credit" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Credit / Debit Card</p>
                      <p className="text-sm text-muted-foreground">Visa, Mastercard, American Express</p>
                    </div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">PayPal</p>
                      <p className="text-sm text-muted-foreground">Pay with your PayPal account</p>
                    </div>
                  </div>
                </Label>
              </div>

              <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer">
                <RadioGroupItem value="giftcard" id="giftcard" />
                <Label htmlFor="giftcard" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Gift className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Gift Card</p>
                      <p className="text-sm text-muted-foreground">Redeem a Home Depot gift card</p>
                    </div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (activeComponent === 'Order Summary') {
    return (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Order Summary</h3>
        <Card>
          <CardHeader>
            <CardTitle>Order Total</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal ({cartItems.length} items)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Tax (HST)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              
              <Separator />
              
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span className="text-primary">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-2 text-sm text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span>Free returns within 90 days</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span>2-year manufacturer warranty</span>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 h-12">
              Proceed to Checkout
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (activeComponent === 'Progress Indicator') {
    return (
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Checkout Progress</h3>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Step {currentStep} of 5</span>
                <span className="text-sm text-muted-foreground">{Math.round((currentStep / 5) * 100)}% Complete</span>
              </div>
              
              <Progress value={(currentStep / 5) * 100} className="h-2" />
              
              <div className="flex justify-between">
                {['Cart', 'Delivery', 'Address', 'Payment', 'Review'].map((step, index) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      index + 1 <= currentStep 
                        ? 'bg-primary text-white' 
                        : index + 1 === currentStep + 1
                        ? 'bg-primary/20 text-primary border-2 border-primary'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {index + 1 < currentStep ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <span className={`text-xs mt-1 ${
                      index + 1 <= currentStep ? 'text-primary font-medium' : 'text-muted-foreground'
                    }`}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  disabled={currentStep <= 1}
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                >
                  Previous
                </Button>
                <Button 
                  className="flex-1 bg-primary hover:bg-primary/90"
                  disabled={currentStep >= 5}
                  onClick={() => setCurrentStep(Math.min(5, currentStep + 1))}
                >
                  {currentStep === 5 ? 'Place Order' : 'Continue'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Order Confirmation</h3>
      <Card>
        <CardContent className="p-8 text-center">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-2">Order Confirmed!</h2>
              <p className="text-muted-foreground">Thank you for your purchase. Your order has been received.</p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium">Order Number</p>
                  <p className="text-muted-foreground">#HD-2024-001234</p>
                </div>
                <div>
                  <p className="font-medium">Total Amount</p>
                  <p className="text-muted-foreground">${total.toFixed(2)}</p>
                </div>
                <div>
                  <p className="font-medium">Delivery Method</p>
                  <p className="text-muted-foreground">
                    {deliveryOption === 'pickup' ? 'Store Pickup' : 
                     deliveryOption === 'express' ? 'Express Delivery' : 'Standard Delivery'}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Estimated Delivery</p>
                  <p className="text-muted-foreground">March 15, 2024</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-primary hover:bg-primary/90">
                Track Your Order
              </Button>
              <Button variant="outline" className="w-full">
                Continue Shopping
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              A confirmation email has been sent to your registered email address.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}