import React, { useState } from 'react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { 
  Home, 
  Menu, 
  FormInput, 
  Package, 
  ShoppingCart, 
  FileText, 
  Layers,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const sections = [
  {
    id: 'navigation',
    title: 'Navigation',
    icon: Home,
    components: [
      'Global Header',
      'Mobile Bottom Nav',
      'Hamburger Menu',
      'Breadcrumb',
      'Filter Bar'
    ]
  },
  {
    id: 'forms',
    title: 'Forms',
    icon: FormInput,
    components: [
      'Text Input',
      'Search Bar',
      'Dropdown Menu',
      'Checkboxes & Radio',
      'Quantity Stepper',
      'Address Form',
      'Payment Form'
    ]
  },
  {
    id: 'product',
    title: 'Product',
    icon: Package,
    components: [
      'Product Tile',
      'Product Carousel',
      'Product Detail',
      'Recommendations',
      'Promotional Banner'
    ]
  },
  {
    id: 'checkout',
    title: 'Checkout',
    icon: ShoppingCart,
    components: [
      'Cart List',
      'Delivery Options',
      'Address Selector',
      'Payment Methods',
      'Order Summary',
      'Progress Indicator',
      'Order Confirmation'
    ]
  },
  {
    id: 'articles',
    title: 'Articles / Content',
    icon: FileText,
    components: [
      'Article List',
      'Article Detail',
      'Project Recommendation'
    ]
  },
  {
    id: 'utilities',
    title: 'Utilities & Overlays',
    icon: Layers,
    components: [
      'Modals',
      'Tooltips',
      'Toast Notifications',
      'Floating Action Button',
      'Loading States'
    ]
  }
];

interface StorybookLayoutProps {
  activeSection: string;
  activeComponent: string;
  onSectionChange: (section: string) => void;
  onComponentChange: (component: string) => void;
  children: React.ReactNode;
}

export function StorybookLayout({ 
  activeSection, 
  activeComponent, 
  onSectionChange, 
  onComponentChange, 
  children 
}: StorybookLayoutProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([activeSection]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-80 border-r border-border bg-card">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Home className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-semibold text-lg">Home Depot Canada 2.0</h1>
              <p className="text-sm text-muted-foreground">Component Library</p>
            </div>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-4">
            {sections.map((section) => {
              const Icon = section.icon;
              const isExpanded = expandedSections.includes(section.id);
              const isActive = activeSection === section.id;

              return (
                <div key={section.id} className="mb-2">
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className="w-full justify-between p-3 h-auto"
                    onClick={() => {
                      toggleSection(section.id);
                      onSectionChange(section.id);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{section.title}</span>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </Button>

                  {isExpanded && (
                    <div className="ml-4 mt-2 space-y-1">
                      {section.components.map((component) => (
                        <Button
                          key={component}
                          variant={activeComponent === component ? "secondary" : "ghost"}
                          className="w-full justify-start p-2 h-auto text-sm font-normal"
                          onClick={() => onComponentChange(component)}
                        >
                          {component}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="border-b border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold capitalize">{activeSection}</h2>
            <Separator orientation="vertical" className="h-6" />
            <span className="text-muted-foreground">{activeComponent}</span>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-8">
            {children}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}