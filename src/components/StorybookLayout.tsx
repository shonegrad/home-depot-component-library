import React, { useState } from 'react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { useTheme } from './theme-provider';
import {
  Home,
  Menu,
  TextFields,
  Inventory2,
  ShoppingCart,
  Article,
  Layers,
  ExpandMore,
  ChevronRight,
  LightMode,
  DarkMode,
  Laptop,
  PhoneAndroid,
  Tablet,
  Code
} from '@mui/icons-material';
import { cn } from '../lib/utils';
import { DevicePortalProvider } from '../lib/device-portal-context';

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
    icon: TextFields,
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
    icon: Inventory2,
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
    icon: Article,
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
  },
  {
    id: 'context',
    title: 'Context Examples',
    icon: Layers,
    components: [
      'Product Listing Page',
      'Checkout Page'
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
  const { theme, setTheme } = useTheme();
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showCode, setShowCode] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  React.useEffect(() => {
    setContainer(containerRef.current);
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getDeviceStyle = () => {
    switch (device) {
      case 'mobile': return { width: '375px' };
      case 'tablet': return { width: '768px' };
      default: return { width: '100%' };
    }
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <div
        className="border-r border-border bg-card flex flex-col shrink-0 overflow-hidden"
        style={{ width: 280, minWidth: 280, maxWidth: 280 }}
      >
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
              <Home className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-base leading-tight">HD Component</h1>
              <p className="text-xs text-muted-foreground">Library v2.0</p>
            </div>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-3 space-y-1">
            {sections.map((section) => {
              const Icon = section.icon;
              const isExpanded = expandedSections.includes(section.id);
              const isActiveSection = activeSection === section.id;

              return (
                <div key={section.id}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`w-full justify-between h-9 mb-1 ${isActiveSection ? 'bg-secondary font-medium' : 'text-muted-foreground'}`}
                    onClick={() => {
                      toggleSection(section.id);
                      onSectionChange(section.id);
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <Icon className="w-4 h-4" />
                      <span>{section.title}</span>
                    </div>
                    {isExpanded ? (
                      <ExpandMore className="w-3.5 h-3.5 opacity-50" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                    )}
                  </Button>

                  {isExpanded && (
                    <div className="ml-4 pl-3 border-l border-border/50 space-y-0.5 mb-2">
                      {section.components.map((component) => (
                        <Button
                          key={component}
                          variant="ghost"
                          size="sm"
                          className={`w-full justify-start h-8 text-sm ${activeComponent === component ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
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

        <div className="p-4 border-t border-border mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">© 2025 Home Depot</span>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <LightMode className="w-4 h-4" /> : <DarkMode className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-muted/20 overflow-hidden">
        {/* Toolbar */}
        <div className="h-14 border-b border-border bg-background flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-medium text-muted-foreground">
              {activeSection} <span className="mx-2 text-border">/</span> <span className="text-foreground font-semibold">{activeComponent}</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-secondary/50 rounded-lg p-1 mr-4 border border-border">
              <Button
                variant="ghost"
                size="sm"
                className={`h-7 px-2 ${device === 'desktop' ? 'bg-background shadow-sm' : 'text-muted-foreground hover:bg-transparent'}`}
                onClick={() => setDevice('desktop')}
              >
                <Laptop className="w-4 h-4 mr-1.5" />
                <span className="text-xs">Desktop</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`h-7 px-2 ${device === 'tablet' ? 'bg-background shadow-sm' : 'text-muted-foreground hover:bg-transparent'}`}
                onClick={() => setDevice('tablet')}
              >
                <Tablet className="w-4 h-4 mr-1.5" />
                <span className="text-xs">Tablet</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`h-7 px-2 ${device === 'mobile' ? 'bg-background shadow-sm' : 'text-muted-foreground hover:bg-transparent'}`}
                onClick={() => setDevice('mobile')}
              >
                <PhoneAndroid className="w-4 h-4 mr-1.5" />
                <span className="text-xs">Mobile</span>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 mr-2"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              title="Toggle theme"
            >
              {theme === 'dark' ? <LightMode className="w-4 h-4" /> : <DarkMode className="w-4 h-4" />}
            </Button>

            <Button
              variant="outline"
              size="sm"
              className={`gap-2 ${showCode ? 'bg-secondary' : ''}`}
              onClick={() => setShowCode(!showCode)}
            >
              <Code className="w-4 h-4" />
              Code
            </Button>
          </div>
        </div>

        {/* Content Canvas */}
        <div className="flex-1 overflow-hidden p-8 flex flex-col items-center">
          <div
            className="transition-all duration-500 ease-in-out shrink-0 flex flex-col bg-background border border-border rounded-xl shadow-sm overflow-hidden flex-1 min-h-0"
            style={{
              ...getDeviceStyle(),
            }}
          >
            {/* Mock Browser/Device Header for context */}
            <div className="h-8 bg-muted border-b border-border flex items-center px-4 gap-2 shrink-0">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/20 border border-red-500/30"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/20 border border-amber-500/30"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/20 border border-green-500/30"></div>
              </div>
              <div className="flex-1 text-center overflow-hidden px-2">
                <div className="inline-block px-3 py-0.5 bg-background rounded text-[10px] text-muted-foreground font-medium border border-border shadow-sm whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                  http://homedepot.ca/{activeSection}/{activeComponent.toLowerCase().replace(/\s+/g, '-')}
                </div>
              </div>
            </div>

            <div className="flex-1 relative min-h-0" ref={containerRef}>
              <DevicePortalProvider value={{ container }}>
                {showCode ? (
                  <ScrollArea className="h-full">
                    <div className="p-6 bg-slate-950 text-slate-50 font-mono text-sm">
                      <pre>
                        {`// Example usage of ${activeComponent}

import { ${activeComponent.replace(/\s+/g, '')} } from '@homedepot/components';

export default function Example() {
  return (
    <${activeComponent.replace(/\s+/g, '')} 
       variant="primary"
       size="lg"
       className="w-full"
    />
  );
}`}
                      </pre>
                    </div>
                  </ScrollArea>
                ) : (
                  <ScrollArea className="h-full">
                    <div className="p-8">
                      {children}
                    </div>
                  </ScrollArea>
                )}
              </DevicePortalProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}