import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { Copy } from 'lucide-react';

const colorGroups = [
    {
        name: 'Base Colors',
        description: 'Core background and foreground colors.',
        colors: [
            { name: 'Background', variable: '--background', hex: 'bg-background' },
            { name: 'Foreground', variable: '--foreground', hex: 'bg-foreground' },
            { name: 'Card', variable: '--card', hex: 'bg-card' },
            { name: 'Card Foreground', variable: '--card-foreground', hex: 'bg-card-foreground' },
            { name: 'Popover', variable: '--popover', hex: 'bg-popover' },
            { name: 'Popover Foreground', variable: '--popover-foreground', hex: 'bg-popover-foreground' },
        ]
    },
    {
        name: 'Brand Colors',
        description: 'Primary, secondary, and accent colors.',
        colors: [
            { name: 'Primary', variable: '--primary', hex: 'bg-primary' },
            { name: 'Primary Foreground', variable: '--primary-foreground', hex: 'bg-primary-foreground' },
            { name: 'Secondary', variable: '--secondary', hex: 'bg-secondary' },
            { name: 'Secondary Foreground', variable: '--secondary-foreground', hex: 'bg-secondary-foreground' },
            { name: 'Accent', variable: '--accent', hex: 'bg-accent' },
            { name: 'Accent Foreground', variable: '--accent-foreground', hex: 'bg-accent-foreground' },
        ]
    },
    {
        name: 'Feedback',
        description: 'Colors for success, error, warning, and info states.',
        colors: [
            { name: 'Destructive', variable: '--destructive', hex: 'bg-destructive' },
            { name: 'Destructive Foreground', variable: '--destructive-foreground', hex: 'bg-destructive-foreground' },
            { name: 'Muted', variable: '--muted', hex: 'bg-muted' },
            { name: 'Muted Foreground', variable: '--muted-foreground', hex: 'bg-muted-foreground' },
        ]
    },
    {
        name: 'UI Elements',
        description: 'Borders, inputs, and rings.',
        colors: [
            { name: 'Border', variable: '--border', hex: 'bg-border' },
            { name: 'Input', variable: '--input', hex: 'bg-input' },
            { name: 'Ring', variable: '--ring', hex: 'bg-ring' },
        ]
    },
    {
        name: 'Sidebar',
        description: 'Navigation and sidebar specific colors.',
        colors: [
            { name: 'Sidebar', variable: '--sidebar', hex: 'bg-sidebar' },
            { name: 'Sidebar Foreground', variable: '--sidebar-foreground', hex: 'bg-sidebar-foreground' },
            { name: 'Sidebar Primary', variable: '--sidebar-primary', hex: 'bg-sidebar-primary' },
            { name: 'Sidebar Primary FG', variable: '--sidebar-primary-foreground', hex: 'bg-sidebar-primary-foreground' },
            { name: 'Sidebar Accent', variable: '--sidebar-accent', hex: 'bg-sidebar-accent' },
            { name: 'Sidebar Accent FG', variable: '--sidebar-accent-foreground', hex: 'bg-sidebar-accent-foreground' },
            { name: 'Sidebar Border', variable: '--sidebar-border', hex: 'bg-sidebar-border' },
        ]
    },
    {
        name: 'Chart Colors',
        description: 'Data visualization palette.',
        colors: [
            { name: 'Chart 1', variable: '--chart-1', hex: 'bg-chart-1' },
            { name: 'Chart 2', variable: '--chart-2', hex: 'bg-chart-2' },
            { name: 'Chart 3', variable: '--chart-3', hex: 'bg-chart-3' },
            { name: 'Chart 4', variable: '--chart-4', hex: 'bg-chart-4' },
            { name: 'Chart 5', variable: '--chart-5', hex: 'bg-chart-5' },
        ]
    }
];

export function Colors() {

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast("Copied to clipboard", {
            description: `Copied ${text} to clipboard`,
        });
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Colors</h2>
                <p className="text-muted-foreground text-lg">
                    Our color palette is designed to be accessible and harmonious, supporting both light and dark modes.
                </p>
            </div>

            <div className="grid gap-8">
                {colorGroups.map((group) => (
                    <div key={group.name} className="space-y-4">
                        <div className="space-y-1">
                            <h3 className="text-xl font-semibold">{group.name}</h3>
                            <p className="text-sm text-muted-foreground">{group.description}</p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {group.colors.map((color) => (
                                <div key={color.name} className="group relative">
                                    <div className="space-y-3">
                                        <div
                                            className={`h-24 w-full rounded-lg border shadow-sm transition-all hover:scale-105 cursor-pointer flex items-center justify-center ${color.hex}`}
                                            onClick={() => copyToClipboard(`var(${color.variable})`)}
                                        >
                                            <Copy className="w-5 h-5 text-current opacity-0 group-hover:opacity-100 transition-opacity mix-blend-difference" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-medium text-sm leading-none">{color.name}</p>
                                            <div className="flex flex-col gap-0.5">
                                                <code
                                                    className="text-[10px] text-muted-foreground font-mono bg-muted/50 px-1 py-0.5 rounded w-fit cursor-pointer hover:bg-muted hover:text-foreground transition-colors"
                                                    onClick={() => copyToClipboard(color.variable)}
                                                >
                                                    {color.variable}
                                                </code>
                                                {/* 
                          Note: Tailwind classes are used for display, 
                          but typically in a design system you'd use the variable.
                         */}
                                                <code
                                                    className="text-[10px] text-muted-foreground font-mono bg-muted/50 px-1 py-0.5 rounded w-fit cursor-pointer hover:bg-muted hover:text-foreground transition-colors"
                                                    onClick={() => copyToClipboard(color.hex)}
                                                >
                                                    {color.hex}
                                                </code>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
