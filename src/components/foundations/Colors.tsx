import React from 'react';
import { toast } from 'sonner';
import { Copy, Hash } from 'lucide-react';

const colorGroups = [
    {
        name: 'Brand Essentials',
        description: 'The core colors that define our brand identity.',
        colors: [
            { name: 'Primary Orange', variable: '--primary', hex: 'bg-primary' },
            { name: 'Primary Foreground', variable: '--primary-foreground', hex: 'bg-primary-foreground' },
            { name: 'Secondary', variable: '--secondary', hex: 'bg-secondary' },
        ]
    },
    {
        name: 'Surfaces',
        description: 'Backgrounds for pages, cards, and modal layers.',
        colors: [
            { name: 'Canvas', variable: '--background', hex: 'bg-background' },
            { name: 'Card Surface', variable: '--card', hex: 'bg-card' },
            { name: 'Popover Surface', variable: '--popover', hex: 'bg-popover' },
            { name: 'Muted Surface', variable: '--muted', hex: 'bg-muted' },
        ]
    },
    {
        name: 'Text & Icons',
        description: 'Colors for typography and iconography.',
        colors: [
            { name: 'Main Text', variable: '--foreground', hex: 'bg-foreground' },
            { name: 'Muted Text', variable: '--muted-foreground', hex: 'bg-muted-foreground' },
            { name: 'Accent Text', variable: '--accent-foreground', hex: 'bg-accent-foreground' },
        ]
    },
    {
        name: 'UI Elements',
        description: 'Structural colors for borders, inputs, and feedback.',
        colors: [
            { name: 'Border', variable: '--border', hex: 'bg-border' },
            { name: 'Input Border', variable: '--input', hex: 'bg-input' },
            { name: 'Destructive', variable: '--destructive', hex: 'bg-destructive' },
        ]
    },
    {
        name: 'Data Visualization',
        description: 'Distinct colors for charts and graphs.',
        colors: [
            { name: 'Series 1', variable: '--chart-1', hex: 'bg-chart-1' },
            { name: 'Series 2', variable: '--chart-2', hex: 'bg-chart-2' },
            { name: 'Series 3', variable: '--chart-3', hex: 'bg-chart-3' },
            { name: 'Series 4', variable: '--chart-4', hex: 'bg-chart-4' },
            { name: 'Series 5', variable: '--chart-5', hex: 'bg-chart-5' },
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
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto w-full">
            <div className="space-y-4 text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight">Color System</h2>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                    A semantic color palette designed for accessibility and harmony.
                </p>
            </div>

            <div className="grid gap-16">
                {colorGroups.map((group) => (
                    <div key={group.name} className="space-y-6">
                        <div className="flex items-center gap-4">
                            <h3 className="text-2xl font-bold">{group.name}</h3>
                            <div className="h-px bg-border flex-1" />
                            <span className="text-sm text-muted-foreground">{group.description}</span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                            {group.colors.map((color) => (
                                <div
                                    key={color.name}
                                    className="group relative flex flex-col gap-3 cursor-pointer"
                                    onClick={() => copyToClipboard(`var(${color.variable})`)}
                                >
                                    <div className={`aspect-square w-full rounded-2xl shadow-sm border ring-2 ring-transparent group-hover:ring-primary/20 transition-all duration-300 ${color.hex} flex items-center justify-center`}>
                                        <Copy className="w-8 h-8 text-white mix-blend-difference opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-200" />
                                    </div>

                                    <div className="space-y-0.5">
                                        <p className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">{color.name}</p>
                                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground opacity-60 group-hover:opacity-100 transition-opacity">
                                            <Hash className="w-3 h-3" />
                                            <span className="font-mono">{color.variable.replace('--', '')}</span>
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
