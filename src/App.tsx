import React, { useState } from 'react';
import { StorybookLayout } from './components/StorybookLayout';
import { NavigationComponents } from './components/NavigationComponents';
import { FormsComponents } from './components/FormsComponents';
import { ProductComponents } from './components/ProductComponents';
import { CheckoutComponents } from './components/CheckoutComponents';
import { ArticlesComponents } from './components/ArticlesComponents';
import { UtilitiesComponents } from './components/UtilitiesComponents';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [activeSection, setActiveSection] = useState('navigation');
  const [activeComponent, setActiveComponent] = useState('Global Header');

  const renderActiveComponent = () => {
    switch (activeSection) {
      case 'navigation':
        return <NavigationComponents activeComponent={activeComponent} />;
      case 'forms':
        return <FormsComponents activeComponent={activeComponent} />;
      case 'product':
        return <ProductComponents activeComponent={activeComponent} />;
      case 'checkout':
        return <CheckoutComponents activeComponent={activeComponent} />;
      case 'articles':
        return <ArticlesComponents activeComponent={activeComponent} />;
      case 'utilities':
        return <UtilitiesComponents activeComponent={activeComponent} />;
      default:
        return <NavigationComponents activeComponent={activeComponent} />;
    }
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    // Set default component for each section
    const defaultComponents: Record<string, string> = {
      navigation: 'Global Header',
      forms: 'Text Input',
      product: 'Product Tile',
      checkout: 'Cart List',
      articles: 'Article List',
      utilities: 'Modals'
    };
    setActiveComponent(defaultComponents[section] || '');
  };

  return (
    <div className="min-h-screen bg-background">
      <StorybookLayout
        activeSection={activeSection}
        activeComponent={activeComponent}
        onSectionChange={handleSectionChange}
        onComponentChange={setActiveComponent}
      >
        {renderActiveComponent()}
      </StorybookLayout>
      <Toaster />
    </div>
  );
}