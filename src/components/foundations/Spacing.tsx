import React from 'react';

const spacingScale = [
    { name: 'px', value: '1px', pixels: '1px' },
    { name: '0', value: '0px', pixels: '0px' },
    { name: '0.5', value: '0.125rem', pixels: '2px' },
    { name: '1', value: '0.25rem', pixels: '4px' },
    { name: '1.5', value: '0.375rem', pixels: '6px' },
    { name: '2', value: '0.5rem', pixels: '8px' },
    { name: '2.5', value: '0.625rem', pixels: '10px' },
    { name: '3', value: '0.75rem', pixels: '12px' },
    { name: '4', value: '1rem', pixels: '16px' },
    { name: '5', value: '1.25rem', pixels: '20px' },
    { name: '6', value: '1.5rem', pixels: '24px' },
    { name: '8', value: '2rem', pixels: '32px' },
    { name: '10', value: '2.5rem', pixels: '40px' },
    { name: '12', value: '3rem', pixels: '48px' },
    { name: '16', value: '4rem', pixels: '64px' },
    { name: '20', value: '5rem', pixels: '80px' },
    { name: '24', value: '6rem', pixels: '96px' },
];

export function Spacing() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Spacing</h2>
                <p className="text-muted-foreground text-lg">
                    A consistent spacing scale helps create a visual rhythm and balance.
                </p>
            </div>

            <div className="border rounded-xl bg-card">
                <div className="grid grid-cols-1 divide-y">
                    {spacingScale.map((space) => (
                        <div key={space.name} className="flex items-center p-4 gap-8">
                            <div className="w-24 shrink-0 flex flex-col">
                                <span className="font-semibold">{space.name}</span>
                                <span className="text-xs text-muted-foreground font-mono">{space.value}</span>
                                <span className="text-xs text-muted-foreground font-mono">{space.pixels}</span>
                            </div>
                            <div className="flex-1">
                                <div
                                    className="bg-primary/50 h-6 rounded"
                                    style={{ width: space.value === '1px' ? '1px' : space.value }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
