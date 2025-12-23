import React from 'react';
import { NavigationComponents } from '../NavigationComponents';
import { CheckoutComponents } from '../CheckoutComponents';
import { Button } from '../ui/button';
import { ChevronRight, Lock } from '@mui/icons-material';

export function CheckoutPage() {
    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* 1. Simplified Header */}
            <div className="bg-white border-b sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white font-bold">HD</div>
                        <span className="font-semibold text-lg">Checkout</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-green-700">
                        <Lock className="w-4 h-4" />
                        <span className="font-medium">Secure Checkout</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Checkout Flow */}
                    <div className="flex-1 space-y-6">
                        {/* Progress Steps (simplified visual) */}
                        <div className="flex items-center justify-between mb-8 px-4">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">✓</div>
                                <span className="text-xs font-medium">Cart</span>
                            </div>
                            <div className="flex-1 h-0.5 bg-green-600 mx-2"></div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center text-sm font-bold">2</div>
                                <span className="text-xs font-medium font-bold text-gray-900">Delivery</span>
                            </div>
                            <div className="flex-1 h-0.5 bg-gray-200 mx-2"></div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-sm font-bold">3</div>
                                <span className="text-xs font-medium text-gray-500">Payment</span>
                            </div>
                        </div>

                        {/* Delivery Options */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h2 className="text-xl font-bold mb-4">Delivery Options</h2>
                            {/* We reuse the component but in a real app we'd likely compose it specifically */}
                            <CheckoutComponents activeComponent="Delivery Options" />
                        </div>

                        {/* Address Selector */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                            <CheckoutComponents activeComponent="Address Selector" />
                        </div>

                        <div className="flex justify-end">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 px-8">
                                Continue to Payment
                            </Button>
                        </div>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="w-full lg:w-96 flex-shrink-0 space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border sticky top-24">
                            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                            <CheckoutComponents activeComponent="Order Summary" />

                            <div className="mt-6 text-xs text-gray-500 text-center">
                                By placing an order, you agree to our <a href="#" className="underline">Terms of Use</a> and <a href="#" className="underline">Privacy Policy</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
