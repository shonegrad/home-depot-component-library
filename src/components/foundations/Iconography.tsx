import React from 'react';
import {
    Home, Menu, TextFields, Inventory2, ShoppingCart, Article, Layers,
    ExpandMore, ChevronRight, LightMode, DarkMode, Laptop, PhoneAndroid,
    Tablet, Code, Add, Remove, Close, Check, Warning, Info, Error,
    Search, Person, Settings, Favorite, Share, Delete, Edit, Save
} from '@mui/icons-material';
import { toast } from 'sonner';

const iconSets = [
    {
        category: 'Navigation',
        description: 'Wayfinding and movement controls.',
        icons: [
            { name: 'Home', icon: Home, import: 'Home' },
            { name: 'Menu', icon: Menu, import: 'Menu' },
            { name: 'Expand More', icon: ExpandMore, import: 'ExpandMore' },
            { name: 'Chevron Right', icon: ChevronRight, import: 'ChevronRight' },
            { name: 'Close', icon: Close, import: 'Close' },
        ]
    },
    {
        category: 'Actions',
        description: 'Primary interaction controls.',
        icons: [
            { name: 'Add', icon: Add, import: 'Add' },
            { name: 'Remove', icon: Remove, import: 'Remove' },
            { name: 'Edit', icon: Edit, import: 'Edit' },
            { name: 'Delete', icon: Delete, import: 'Delete' },
            { name: 'Save', icon: Save, import: 'Save' },
            { name: 'Search', icon: Search, import: 'Search' },
            { name: 'Share', icon: Share, import: 'Share' },
            { name: 'Favorite', icon: Favorite, import: 'Favorite' },
        ]
    },
    {
        category: 'Status & Feedback',
        description: 'Indicators for system state.',
        icons: [
            { name: 'Check', icon: Check, import: 'Check' },
            { name: 'Warning', icon: Warning, import: 'Warning' },
            { name: 'Info', icon: Info, import: 'Info' },
            { name: 'Error', icon: Error, import: 'Error' },
        ]
    },
    {
        category: 'Devices',
        description: 'Hardware and display modes.',
        icons: [
            { name: 'Light Mode', icon: LightMode, import: 'LightMode' },
            { name: 'Dark Mode', icon: DarkMode, import: 'DarkMode' },
            { name: 'Laptop', icon: Laptop, import: 'Laptop' },
            { name: 'Tablet', icon: Tablet, import: 'Tablet' },
            { name: 'Mobile', icon: PhoneAndroid, import: 'PhoneAndroid' },
        ]
    },
    {
        category: 'Content',
        description: 'Data types and object representations.',
        icons: [
            { name: 'Text Fields', icon: TextFields, import: 'TextFields' },
            { name: 'Inventory', icon: Inventory2, import: 'Inventory2' },
            { name: 'Cart', icon: ShoppingCart, import: 'ShoppingCart' },
            { name: 'Article', icon: Article, import: 'Article' },
            { name: 'Layers', icon: Layers, import: 'Layers' },
            { name: 'Code', icon: Code, import: 'Code' },
            { name: 'Person', icon: Person, import: 'Person' },
            { name: 'Settings', icon: Settings, import: 'Settings' },
        ]
    }
];

export function Iconography() {
    const copyImport = (name: string) => {
        const importString = `import { ${name} } from '@mui/icons-material';`;
        navigator.clipboard.writeText(importString);
        toast("Copied import", {
            description: importString,
        });
    };

    return (
        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto w-full pt-4">
            <div className="space-y-4 text-center mb-12">
                <h2 className="text-4xl font-bold tracking-tight">Iconography</h2>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                    Vector symbols used to communicate action and state.
                </p>
            </div>

            <div className="space-y-16">
                {iconSets.map((set) => (
                    <div key={set.category} className="space-y-6">
                        <div className="flex items-center gap-4">
                            <h3 className="text-2xl font-bold">{set.category}</h3>
                            <div className="h-px bg-border flex-1" />
                            <span className="text-sm text-muted-foreground hidden sm:block">{set.description}</span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                            {set.icons.map((item) => (
                                <div
                                    key={item.name}
                                    className="group relative flex flex-col gap-2"
                                    onClick={() => copyImport(item.import)}
                                >
                                    <div className="aspect-square w-full rounded-2xl bg-card border shadow-sm flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:shadow-md cursor-pointer relative overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <item.icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors group-hover:scale-110 duration-300" />

                                        <div className="absolute inset-x-0 bottom-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                            <div className="bg-primary/90 text-primary-foreground text-[10px] text-center py-1 rounded-full font-medium backdrop-blur-sm">
                                                Copy Import
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-center font-medium text-muted-foreground group-hover:text-foreground transition-colors truncate px-1">
                                        {item.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
