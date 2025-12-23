import React, { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { AspectRatio } from './ui/aspect-ratio';
import { toast } from 'sonner@2.0.3';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Star,
  Favorite as Heart,
  ShoppingCart,
  Visibility as Eye,
  Add as Plus,
  Remove as Minus,
  ZoomIn,
  Share,
  LocalShipping as Truck,
  LocationOn as MapPin,
  CalendarToday as Calendar,
  ChevronLeft,
  ChevronRight,
  BarChart as BarChart3,
  Check,
  Close as X,
  AccessTime as Clock,
  Security as Shield,
  EmojiEvents as Award,
  ThumbUp as ThumbsUp,
  Timer,
  Percent,
  Notifications as Bell
} from '@mui/icons-material';

export function ProductComponents({ activeComponent }: { activeComponent: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [wishlistedProducts, setWishlistedProducts] = useState<number[]>([]);
  const [compareProducts, setCompareProducts] = useState<number[]>([]);
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [selectedVariant, setSelectedVariant] = useState('20V');

  // Helper functions
  const toggleWishlist = (productId: number) => {
    setWishlistedProducts(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
    toast.success(
      wishlistedProducts.includes(productId)
        ? 'Removed from wishlist'
        : 'Added to wishlist'
    );
  };

  const toggleCompare = (productId: number) => {
    if (compareProducts.includes(productId)) {
      setCompareProducts(prev => prev.filter(id => id !== productId));
      toast.success('Removed from comparison');
    } else if (compareProducts.length < 3) {
      setCompareProducts(prev => [...prev, productId]);
      toast.success('Added to comparison');
    } else {
      toast.error('Maximum 3 products can be compared');
    }
  };

  const addToCart = (productId: number) => {
    setCartItems(prev => [...prev, productId]);
    toast.success('Added to cart');
  };

  // Sample data
  const productImages = [
    'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1609205797038-7ed45f8074bf?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1622650316687-e5c8e8c0b02e?w=400&h=400&fit=crop'
  ];

  const relatedProducts = [
    {
      id: 1,
      name: 'DeWalt 20V MAX Cordless Drill/Driver Kit',
      price: 199.99,
      originalPrice: 229.99,
      rating: 4.5,
      reviewCount: 247,
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&h=500&fit=crop',
      badge: 'Best Seller',
      badgeColor: 'bg-primary',
      inStock: true,
      quickShip: true
    },
    {
      id: 2,
      name: 'Milwaukee M18 FUEL Impact Driver',
      price: 179.99,
      originalPrice: 259.99,
      rating: 4.8,
      reviewCount: 163,
      image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=500&h=500&fit=crop',
      badge: '30% OFF',
      badgeColor: 'bg-red-500',
      inStock: true,
      quickShip: false
    },
    {
      id: 3,
      name: 'Ryobi 18V ONE+ Circular Saw',
      price: 129.99,
      rating: 4.2,
      reviewCount: 89,
      image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=500&h=500&fit=crop',
      inStock: false,
      quickShip: false
    },
    {
      id: 4,
      name: 'Makita 18V Angle Grinder',
      price: 159.99,
      rating: 4.6,
      reviewCount: 124,
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&h=500&fit=crop',
      badge: 'New',
      badgeColor: 'bg-green-500',
      inStock: true,
      quickShip: true
    },
    {
      id: 5,
      name: 'BLACK+DECKER 20V Drill',
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.0,
      reviewCount: 205,
      image: 'https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?w=500&h=500&fit=crop',
      badge: 'Pro Choice',
      badgeColor: 'bg-blue-500',
      inStock: true,
      quickShip: true
    },
    {
      id: 6,
      name: 'Bosch 12V Compact Drill',
      price: 149.99,
      rating: 4.3,
      reviewCount: 87,
      image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=500&h=500&fit=crop',
      inStock: true,
      quickShip: false
    }
  ];

  if (activeComponent === 'Product Tile') {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Enhanced Product Tiles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.slice(0, 6).map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Card className={`group hover:shadow-xl transition-all duration-300 ${!product.inStock ? 'opacity-75' : ''} ${product.badge === '30% OFF' ? 'border-red-200' : ''}`}>
                  <CardHeader className="p-0">
                    <div className="relative aspect-square overflow-hidden rounded-t-lg">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ${!product.inStock ? 'grayscale' : ''}`}
                      />

                      {/* Badges */}
                      {product.badge && (
                        <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white`}>
                          {product.badge}
                        </Badge>
                      )}

                      {product.quickShip && product.inStock && (
                        <Badge className="absolute top-3 right-12 bg-green-600 text-white text-xs">
                          <Truck className="w-3 h-3 mr-1" />
                          Quick Ship
                        </Badge>
                      )}

                      {/* Action Buttons */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="bg-card/90 hover:bg-card shadow-sm"
                            onClick={() => toggleWishlist(product.id)}
                          >
                            <Heart className={`w-4 h-4 ${wishlistedProducts.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                          </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="bg-card/90 hover:bg-card shadow-sm"
                            onClick={() => toggleCompare(product.id)}
                          >
                            <BarChart3 className={`w-4 h-4 ${compareProducts.includes(product.id) ? 'text-primary' : ''}`} />
                          </Button>
                        </motion.div>

                        <Dialog>
                          <DialogTrigger asChild>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="bg-card/90 hover:bg-card shadow-sm"
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                            </motion.div>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>{product.name}</DialogTitle>
                              <DialogDescription>Quick product preview with detailed information</DialogDescription>
                            </DialogHeader>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <AspectRatio ratio={1} className="bg-muted rounded-lg overflow-hidden">
                                <ImageWithFallback
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full h-full object-cover"
                                />
                              </AspectRatio>
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold">{product.name}</h4>
                                  <div className="flex items-center gap-1 mt-2">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                      />
                                    ))}
                                    <span className="text-sm text-muted-foreground ml-1">({product.reviewCount})</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-2xl font-bold text-primary">${product.price}</span>
                                  {product.originalPrice && (
                                    <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                                  )}
                                </div>
                                <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => addToCart(product.id)}>
                                  <ShoppingCart className="w-4 h-4 mr-2" />
                                  Add to Cart
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>

                      {/* Out of Stock Overlay */}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Badge variant="secondary" className="bg-card text-black font-medium">
                            Out of Stock
                          </Badge>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h4>

                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="text-sm text-muted-foreground ml-1">({product.reviewCount})</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-primary">${product.price}</span>
                        {product.originalPrice && (
                          <>
                            <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                              Save ${(product.originalPrice - product.price).toFixed(2)}
                            </Badge>
                          </>
                        )}
                      </div>

                      {product.inStock ? (
                        <div className="flex gap-2">
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                            <Button
                              className="w-full bg-primary hover:bg-primary/90 transition-all"
                              onClick={() => addToCart(product.id)}
                            >
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Add to Cart
                            </Button>
                          </motion.div>
                        </div>
                      ) : (
                        <Button className="w-full" variant="outline" disabled>
                          <Bell className="w-4 h-4 mr-2" />
                          Notify When Available
                        </Button>
                      )}

                      {/* Additional Info */}
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        {product.quickShip && product.inStock && (
                          <div className="flex items-center gap-1">
                            <Truck className="w-3 h-3" />
                            Quick Ship
                          </div>
                        )}
                        {product.inStock && (
                          <div className="flex items-center gap-1">
                            <Check className="w-3 h-3 text-green-600" />
                            In Stock
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Bar */}
        {compareProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg shadow-lg p-4 z-50"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                <span className="font-medium">Compare ({compareProducts.length}/3)</span>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-primary">
                  Compare Now
                </Button>
                <Button size="sm" variant="outline" onClick={() => setCompareProducts([])}>
                  Clear All
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    );
  }

  if (activeComponent === 'Product Carousel') {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Featured Products Carousel</h3>
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {relatedProducts.map((product) => (
                  <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <motion.div whileHover={{ y: -4 }}>
                      <Card className="group hover:shadow-xl transition-all duration-300 h-full">
                        <CardHeader className="p-0">
                          <div className="relative aspect-square overflow-hidden rounded-t-lg">
                            <ImageWithFallback
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />

                            {product.badge && (
                              <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white`}>
                                {product.badge}
                              </Badge>
                            )}

                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="bg-card/90 hover:bg-card shadow-sm hover:text-primary transition-colors"
                                  onClick={() => toggleWishlist(product.id)}
                                >
                                  <Heart className={`w-4 h-4 ${wishlistedProducts.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                                </Button>
                              </motion.div>
                            </div>

                            {/* Quick Add Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileHover={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Button
                                  className="bg-card text-black hover:bg-card/90"
                                  onClick={() => addToCart(product.id)}
                                  variant="secondary"
                                >
                                  <ShoppingCart className="w-4 h-4 mr-2" />
                                  Quick Add
                                </Button>
                              </motion.div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                              {product.name}
                            </h4>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                />
                              ))}
                              <span className="text-xs text-muted-foreground ml-1">({product.reviewCount})</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-primary">${product.price}</span>
                              {product.originalPrice && (
                                <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                              )}
                            </div>
                            {product.quickShip && (
                              <div className="flex items-center gap-1 text-xs text-green-600">
                                <Truck className="w-3 h-3" />
                                Ships today
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 hover:bg-primary hover:text-primary-foreground border-none bg-background/80" />
              <CarouselNext className="right-2 hover:bg-primary hover:text-primary-foreground border-none bg-background/80" />
            </Carousel>
          </div>
        </div>

        {/* Category-based Carousels */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Deal of the Day</h3>
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Timer className="w-5 h-5 text-red-500" />
                    <span className="font-medium text-red-600">Limited Time Deal</span>
                  </div>
                  <h4 className="text-2xl font-bold">Milwaukee M18 FUEL Impact Driver</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-red-600">$179.99</span>
                    <span className="text-lg text-muted-foreground line-through">$259.99</span>
                    <Badge className="bg-red-500">31% OFF</Badge>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">(163)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span className="text-red-600 font-medium">Ends in 4h 23m</span>
                  </div>
                  <Button size="lg" className="bg-red-500 hover:bg-red-600">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Grab This Deal
                  </Button>
                </div>
                <div className="relative">
                  <AspectRatio ratio={1} className="bg-card rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1609205797038-7ed45f8074bf?w=400&h=400&fit=crop"
                      alt="Milwaukee Impact Driver"
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                    <Percent className="w-3 h-3 mr-1" />
                    31% OFF
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trending Now Carousel */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Trending Now</h3>
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {relatedProducts.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                className="flex-shrink-0 w-48"
                whileHover={{ scale: 1.02 }}
              >
                <Card className="group hover:shadow-lg transition-all">
                  <CardHeader className="p-0">
                    <div className="relative aspect-square overflow-hidden rounded-t-lg">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <Badge className="absolute top-2 left-2 bg-green-500 text-white">
                        #{index + 1} Trending
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3">
                    <h4 className="font-medium text-sm line-clamp-2 mb-2">{product.name}</h4>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <p className="font-bold text-primary">${product.price}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeComponent === 'Product Detail') {
    return (
      <div className="space-y-8">
        <h3 className="text-lg font-semibold">Product Detail Page</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg border">
              <ImageWithFallback
                src={productImages[currentImageIndex]}
                alt="Product main image"
                className="w-full h-full object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-card/80 hover:bg-card"
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${currentImageIndex === index ? 'border-primary' : 'border-transparent'
                    }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge>Best Seller</Badge>
                <Badge variant="secondary">Free Shipping</Badge>
              </div>
              <h1 className="text-2xl font-semibold mb-2">DeWalt 20V MAX Cordless Drill/Driver Kit</h1>
              <p className="text-muted-foreground">Model: DCD771C2</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="font-medium">4.5</span>
              <span className="text-muted-foreground">(247 reviews)</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-primary">$199.99</span>
                <span className="text-xl text-muted-foreground line-through">$229.99</span>
                <Badge className="bg-green-100 text-green-800">Save $30</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Price includes tax</p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <Truck className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-green-800">Free Shipping</p>
                <p className="text-sm text-green-600">Order by 2 PM for same-day pickup</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-medium">Quantity:</label>
                <div className="flex items-center border border-border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-none"
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
                    className="h-10 w-10 rounded-none"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 bg-primary hover:bg-primary/90 h-12">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Share className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Check Store Availability</span>
              </div>
              <Button variant="outline" className="w-full">
                Find in Store
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="qa">Q&A</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4 mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="overview">
                  <AccordionTrigger>Product Overview</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      The DeWalt 20V MAX Cordless Drill/Driver Kit offers versatility and convenience for drilling and fastening applications.
                      Features a high-performance motor that delivers 300 unit watts out (UWO) of power, completing a wide range of applications.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="features">
                  <AccordionTrigger>Key Features</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>High-performance motor delivers 300 unit watts out (UWO)</li>
                      <li>Compact, lightweight design fits into tight areas</li>
                      <li>High-speed transmission delivers 2 speeds (0-450 & 0-1,500 RPM)</li>
                      <li>1/2" single sleeve ratcheting chuck provides tight bit gripping strength</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="includes">
                  <AccordionTrigger>What's Included</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>DCD771 20V MAX Cordless Drill/Driver</li>
                      <li>(2) 20V MAX Compact Lithium Ion Battery Packs</li>
                      <li>20V MAX Lithium Ion Charger</li>
                      <li>Contractor Bag</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold">4.5</div>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">247 reviews</div>
                  </div>

                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <span className="text-sm w-8">{rating}★</span>
                        <Progress value={rating === 5 ? 60 : rating === 4 ? 30 : rating === 3 ? 8 : 2} className="flex-1" />
                        <span className="text-sm text-muted-foreground w-8">
                          {rating === 5 ? '148' : rating === 4 ? '74' : rating === 3 ? '20' : '5'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  Write a Review
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  }

  if (activeComponent === 'Recommendations') {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Customers Also Bought</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.slice(0, 4).map((product) => (
              <Card key={product.id} className="group hover:shadow-md transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-3">
                  <h4 className="font-medium text-sm line-clamp-2 mb-1">{product.name}</h4>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="font-semibold text-primary">${product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Recently Viewed</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {relatedProducts.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-48">
                <Card className="group hover:shadow-md transition-shadow">
                  <CardHeader className="p-0">
                    <div className="relative aspect-square overflow-hidden rounded-t-lg">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-3">
                    <h4 className="font-medium text-sm line-clamp-2 mb-1">{product.name}</h4>
                    <p className="font-semibold text-primary">${product.price}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Promotional Banner</h3>
      <div className="space-y-4">
        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-orange-600 text-white p-8">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">Spring Tool Sale</h2>
            <p className="text-lg mb-4">Save up to 40% on power tools and accessories</p>
            <Button size="lg" variant="secondary">
              Shop Now
            </Button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=400&fit=crop"
              alt="Power tools"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Category Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative overflow-hidden rounded-lg bg-gray-100 p-6">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2">New Arrivals</h3>
              <p className="text-muted-foreground mb-3">Latest tools and equipment</p>
              <Button variant="outline">
                Explore
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-blue-50 p-6">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2">Pro Services</h3>
              <p className="text-muted-foreground mb-3">Installation and repair services</p>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}