import React from 'react';
import { Separator } from '../ui/separator';

const typeScale = [
    {
        name: 'Display 2XL',
        element: 'h1',
        size: 'text-4xl',
        weight: 'font-bold',
        description: 'Page titles, major headlines'
    },
    {
        name: 'Display XL',
        element: 'h2',
        size: 'text-3xl',
        weight: 'font-bold',
        description: 'Section headings'
    },
    {
        name: 'Display LG',
        element: 'h3',
        size: 'text-2xl',
        weight: 'font-semibold',
        description: 'Card titles, modal headers'
    },
    {
        name: 'Display MD',
        element: 'h4',
        size: 'text-xl',
        weight: 'font-semibold',
        description: 'Subsection titles'
    },
    {
        name: 'Display SM',
        element: 'h5',
        size: 'text-lg',
        weight: 'font-medium',
        description: 'Group headings'
    },
    {
        name: 'Body Base',
        element: 'p',
        size: 'text-base',
        weight: 'font-normal',
        description: 'Global default body text'
    },
    {
        name: 'Body Small',
        element: 'p',
        size: 'text-sm',
        weight: 'font-normal',
        description: 'Secondary text, captions'
    },
    {
        name: 'Caption',
        element: 'span',
        size: 'text-xs',
        weight: 'font-normal',
        description: 'Labels, metadata, fine print'
    }
];

export function Typography() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Typography</h2>
                <p className="text-muted-foreground text-lg">
                    Our typographic system promotes readability and clear hierarchy.
                </p>
            </div>

            <div className="grid gap-8">
                <div className="rounded-xl border bg-card text-card-foreground shadow">
                    <div className="p-6 space-y-8">
                        {typeScale.map((type, index) => (
                            <div key={type.name} className="group">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                                    <div className="md:col-span-3 space-y-1">
                                        <p className="font-medium text-sm text-muted-foreground">{type.name}</p>
                                        <div className="flex gap-2 text-xs text-muted-foreground font-mono">
                                            <span className="bg-muted px-1.5 py-0.5 rounded">{type.size}</span>
                                            <span className="bg-muted px-1.5 py-0.5 rounded">{type.weight}</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground/70">{type.description}</p>
                                    </div>
                                    <div className="md:col-span-9 overflow-hidden">
                                        {React.createElement(
                                            type.element,
                                            { className: `${type.size} ${type.weight} truncate` },
                                            "The quick brown fox jumps over the lazy dog"
                                        )}
                                    </div>
                                </div>
                                {index < typeScale.length - 1 && <Separator className="my-6" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
