import React from 'react';
import {
    Home, Menu, TextFields, Inventory2, ShoppingCart, Article, Layers,
    ExpandMore, ChevronRight, LightMode, DarkMode, Laptop, PhoneAndroid,
    Tablet, Code, Add, Remove, Close, Check, Warning, Info, Error,
    Search, Person, Settings, Favorite, Share, Delete, Edit, Save
} from '@mui/icons-material';
import { Card } from '../ui/card';

const iconSets = [
    {
        category: 'Navigation',
        icons: [
            { name: 'Home', icon: Home },
            { name: 'Menu', icon: Menu },
            { name: 'ExpandMore', icon: ExpandMore },
            { name: 'ChevronRight', icon: ChevronRight },
            { name: 'Close', icon: Close },
        ]
    },
    {
        category: 'Actions',
        icons: [
            { name: 'Add', icon: Add },
            { name: 'Remove', icon: Remove },
            { name: 'Edit', icon: Edit },
            { name: 'Delete', icon: Delete },
            { name: 'Save', icon: Save },
            { name: 'Search', icon: Search },
            { name: 'Share', icon: Share },
            { name: 'Favorite', icon: Favorite },
        ]
    },
    {
        category: 'Status & Feedback',
        icons: [
            { name: 'Check', icon: Check },
            { name: 'Warning', icon: Warning },
            { name: 'Info', icon: Info },
            { name: 'Error', icon: Error },
        ]
    },
    {
        category: 'Devices & Mode',
        icons: [
            { name: 'LightMode', icon: LightMode },
            { name: 'DarkMode', icon: DarkMode },
            { name: 'Laptop', icon: Laptop },
            { name: 'Tablet', icon: Tablet },
            { name: 'PhoneAndroid', icon: PhoneAndroid },
        ]
    },
    {
        category: 'Content',
        icons: [
            { name: 'TextFields', icon: TextFields },
            { name: 'Inventory2', icon: Inventory2 },
            { name: 'ShoppingCart', icon: ShoppingCart },
            { name: 'Article', icon: Article },
            { name: 'Layers', icon: Layers },
            { name: 'Code', icon: Code },
            { name: 'Person', icon: Person },
            { name: 'Settings', icon: Settings },
        ]
    }
];

export function Iconography() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Iconography</h2>
                <p className="text-muted-foreground text-lg">
                    We use Material Icons to provide clear visual cues and actions.
                </p>
            </div>

            <div className="space-y-8">
                {iconSets.map((set) => (
                    <div key={set.category}>
                        <h3 className="text-xl font-semibold mb-4">{set.category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                            {set.icons.map((item) => (
                                <Card key={item.name} className="flex flex-col items-center justify-center p-4 gap-3 bg-card hover:bg-muted/50 transition-colors">
                                    <item.icon className="w-8 h-8 text-foreground" />
                                    <span className="text-xs text-muted-foreground font-medium text-center">{item.name}</span>
                                </Card>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
