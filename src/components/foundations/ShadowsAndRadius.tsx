import React from 'react';

const radii = [
    { name: 'none', value: '0px' },
    { name: 'sm', value: '0.125rem' },
    { name: 'DEFAULT', value: '0.25rem' },
    { name: 'md', value: '0.375rem' },
    { name: 'lg', value: '0.5rem' },
    { name: 'xl', value: '0.75rem' },
    { name: '2xl', value: '1rem' },
    { name: '3xl', value: '1.5rem' },
    { name: 'full', value: '9999px' },
];

const shadows = [
    { name: 'sm', class: 'shadow-sm' },
    { name: 'DEFAULT', class: 'shadow' },
    { name: 'md', class: 'shadow-md' },
    { name: 'lg', class: 'shadow-lg' },
    { name: 'xl', class: 'shadow-xl' },
    { name: '2xl', class: 'shadow-2xl' },
];

export function ShadowsAndRadius() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Shadows & Radius</h2>
                <p className="text-muted-foreground text-lg">
                    Depth and roundness tokens to manage elevation and shape.
                </p>
            </div>

            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Border Radius</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {radii.map((radius) => (
                        <div key={radius.name} className="flex flex-col items-center gap-3">
                            <div
                                className="w-24 h-24 bg-primary/20 border-2 border-primary/50 flex items-center justify-center"
                                style={{ borderRadius: radius.value }}
                            />
                            <div className="text-center">
                                <p className="font-medium text-sm">{radius.name}</p>
                                <p className="text-xs text-muted-foreground font-mono">{radius.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Shadows</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 p-4">
                    {shadows.map((shadow) => (
                        <div key={shadow.name} className="flex flex-col items-center gap-4">
                            <div
                                className={`w-24 h-24 bg-card rounded-lg flex items-center justify-center ${shadow.class}`}
                            />
                            <p className="font-medium text-sm">{shadow.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
