import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export function ShadowsAndRadius() {
    return (
        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto w-full">
            <div className="space-y-2 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Depth & Shape</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Shadows create elevation to denote hierarchy, while border radius defines our shape language.
                </p>
            </div>

            {/* Elevation Section */}
            <section className="space-y-8">
                <div className="flex items-center gap-4">
                    <h3 className="text-xl font-bold">Elevation</h3>
                    <div className="h-px bg-border flex-1" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Low */}
                    <div className="space-y-4">
                        <div className="bg-card rounded-xl p-6 shadow-sm border h-48 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 duration-300">
                            <span className="font-semibold text-lg">Low Elevation</span>
                            <p className="text-sm text-muted-foreground mt-2">Used for Cards, List items</p>
                        </div>
                        <p className="text-center text-xs font-mono text-muted-foreground">shadow-sm</p>
                    </div>

                    {/* Medium */}
                    <div className="space-y-4">
                        <div className="bg-card rounded-xl p-6 shadow-md border-none h-48 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 duration-300">
                            <span className="font-semibold text-lg">Medium Elevation</span>
                            <p className="text-sm text-muted-foreground mt-2">Dropdowns, Popovers</p>
                        </div>
                        <p className="text-center text-xs font-mono text-muted-foreground">shadow-md</p>
                    </div>

                    {/* High */}
                    <div className="space-y-4">
                        <div className="bg-card rounded-xl p-6 shadow-xl border-none h-48 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 duration-300">
                            <span className="font-semibold text-lg">High Elevation</span>
                            <p className="text-sm text-muted-foreground mt-2">Modals, Floating Actions</p>
                        </div>
                        <p className="text-center text-xs font-mono text-muted-foreground">shadow-xl</p>
                    </div>
                </div>
            </section>

            {/* Radius Section */}
            <section className="space-y-8">
                <div className="flex items-center gap-4">
                    <h3 className="text-xl font-bold">Corner Radius</h3>
                    <div className="h-px bg-border flex-1" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4 flex flex-col items-center">
                        <Button className="w-full rounded-sm h-12">Small Radius</Button>
                        <span className="text-xs text-muted-foreground">rounded-sm (2px)</span>
                    </div>

                    <div className="space-y-4 flex flex-col items-center">
                        <Button className="w-full rounded-md h-12" variant="secondary">Default Radius</Button>
                        <span className="text-xs text-muted-foreground">rounded-md (6px)</span>
                    </div>

                    <div className="space-y-4 flex flex-col items-center">
                        <Button className="w-full rounded-xl h-12" variant="outline">Large Radius</Button>
                        <span className="text-xs text-muted-foreground">rounded-xl (12px)</span>
                    </div>

                    <div className="space-y-4 flex flex-col items-center">
                        <Button className="w-full rounded-full h-12">Full Radius</Button>
                        <span className="text-xs text-muted-foreground">rounded-full</span>
                    </div>
                </div>

                <div className="mt-8 p-8 bg-muted/50 rounded-2xl flex items-center justify-center">
                    <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 max-w-sm w-full shadow-lg">
                        <div className="flex gap-4 items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-primary/20" />
                            <div>
                                <div className="h-2 w-24 bg-muted rounded mb-1.5" />
                                <div className="h-2 w-16 bg-muted rounded" />
                            </div>
                        </div>
                        <div className="h-20 bg-muted/30 rounded-md mb-4" />
                        <div className="flex gap-2">
                            <div className="flex-1 h-8 bg-primary rounded-md" />
                            <div className="h-8 w-8 bg-muted rounded-md" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
