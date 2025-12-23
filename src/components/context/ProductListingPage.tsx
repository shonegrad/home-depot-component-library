import React from 'react';
import { NavigationComponents } from '../NavigationComponents';
import { ProductComponents } from '../ProductComponents';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ChevronRight } from '@mui/icons-material';

export function ProductListingPage() {
    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* 1. Global Header */}
            <div className="bg-white shadow-sm sticky top-0 z-50">
                <NavigationComponents activeComponent="Global Header" />
            </div>

            {/* 2. Breadcrumb & Title Area */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <span>Home</span>
                    <ChevronRight className="w-4 h-4 mx-1" />
                    <span>Tools</span>
                    <ChevronRight className="w-4 h-4 mx-1" />
                    <span className="font-medium text-foreground">Power Tools</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Power Tools</h1>
                <p className="text-gray-600 mb-6">Shop the best selection of power tools from top brands like DeWalt, Milwaukee, and Ryobi.</p>

                {/* Promotional Banner */}
                <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg p-6 text-white mb-8 shadow-md">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold mb-1">Save up to 40% on Combo Kits</h2>
                            <p className="opacity-90">Limited time offer. Online only.</p>
                        </div>
                        <Button variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold">
                            Shop Deals
                        </Button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-12 flex gap-8">
                {/* 3. Sidebar Filters */}
                <div className="w-64 flex-shrink-0 hidden lg:block space-y-6">
                    <div className="bg-white p-4 rounded-lg border shadow-sm">
                        <h3 className="font-semibold mb-4 text-lg">Filters</h3>
                        {/* Reusing Filter Bar logic implicitly or explicitly */}
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-medium mb-2 text-sm">Brand</h4>
                                <div className="space-y-2">
                                    {['DeWalt', 'Milwaukee', 'Ryobi', 'Makita', 'Ridgid'].map(brand => (
                                        <label key={brand} className="flex items-center space-x-2 text-sm">
                                            <input type="checkbox" className="rounded border-gray-300" />
                                            <span>{brand}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2 text-sm">Price</h4>
                                <div className="space-y-2">
                                    {['Under $50', '$50 - $100', '$100 - $200', '$200+'].map(price => (
                                        <label key={price} className="flex items-center space-x-2 text-sm">
                                            <input type="checkbox" className="rounded border-gray-300" />
                                            <span>{price}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Product Grid */}
                <div className="flex-1">
                    {/* Filter Bar (Sort) */}
                    <div className="mb-6">
                        <NavigationComponents activeComponent="Filter Bar" />
                    </div>

                    {/* Tiles */}
                    <ProductComponents activeComponent="Product Tile" />

                    {/* Pagination (Mock) */}
                    <div className="mt-12 flex justify-center gap-2">
                        <Button variant="outline" disabled>Previous</Button>
                        <Button variant="outline" className="bg-primary text-primary-foreground">1</Button>
                        <Button variant="outline">2</Button>
                        <Button variant="outline">3</Button>
                        <span className="flex items-end px-2">...</span>
                        <Button variant="outline">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
