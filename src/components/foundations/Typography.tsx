import React from 'react';
import { Separator } from '../ui/separator';

const typeScale = [
    {
        category: 'Headings',
        items: [
            {
                name: 'Display 2XL',
                element: 'h1',
                size: 'text-4xl',
                weight: 'font-bold',
                sample: 'Make it Big',
                usage: 'Main Page Titles, Hero Sections'
            },
            {
                name: 'Display XL',
                element: 'h2',
                size: 'text-3xl',
                weight: 'font-bold',
                sample: 'Section Heading',
                usage: 'Major Page Sections'
            },
            {
                name: 'Display LG',
                element: 'h3',
                size: 'text-2xl',
                weight: 'font-semibold',
                sample: 'Card Title',
                usage: 'Card Headers, modal titles'
            }
        ]
    },
    {
        category: 'Body & content',
        items: [
            {
                name: 'Body Base',
                element: 'p',
                size: 'text-base',
                weight: 'font-normal',
                sample: 'The quick brown fox jumps over the lazy dog. It was the best of times, it was the worst of times.',
                usage: 'Default body text for all generic content.'
            },
            {
                name: 'Body Small',
                element: 'p',
                size: 'text-sm',
                weight: 'font-normal',
                sample: 'This text is slightly smaller, often used for secondary information or dense interfaces.',
                usage: 'Secondary text, descriptions, lists.'
            }
        ]
    },
    {
        category: 'Utility',
        items: [
            {
                name: 'Caption',
                element: 'span',
                size: 'text-xs',
                weight: 'font-medium',
                sample: 'METADATA • JAN 2025',
                usage: 'Labels, timestamps, tags.'
            }
        ]
    }
];

export function Typography() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto w-full">
            <div className="space-y-2 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Typography</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Use these styles to create clear hierarchies and organize content effectively.
                </p>
            </div>

            <div className="space-y-12">
                {typeScale.map((group) => (
                    <div key={group.category} className="space-y-6">
                        <h3 className="text-xl font-medium text-muted-foreground uppercase tracking-widest text-xs border-b pb-2">{group.category}</h3>

                        <div className="grid gap-8">
                            {group.items.map((type) => (
                                <div key={type.name} className="flex flex-col md:flex-row gap-6 md:items-baseline group">
                                    <div className="md:w-1/4 shrink-0 space-y-1">
                                        <p className="font-semibold text-sm text-foreground">{type.name}</p>
                                        <p className="text-xs text-muted-foreground">{type.usage}</p>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2 text-[10px] text-muted-foreground font-mono pt-1">
                                            <span className="bg-muted px-1 py-0.5 rounded">{type.size}</span>
                                            <span className="bg-muted px-1 py-0.5 rounded">{type.weight}</span>
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        {React.createElement(
                                            type.element,
                                            { className: `${type.size} ${type.weight} text-foreground/90` },
                                            type.sample
                                        )}
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
