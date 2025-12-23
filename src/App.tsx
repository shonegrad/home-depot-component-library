import React, { useState } from 'react';
import { StorybookLayout } from './components/StorybookLayout';
import { NavigationComponents } from './components/NavigationComponents';
import { FormsComponents } from './components/FormsComponents';
import { ProductComponents } from './components/ProductComponents';
import { CheckoutComponents } from './components/CheckoutComponents';
import { ArticlesComponents } from './components/ArticlesComponents';
import { UtilitiesComponents } from './components/UtilitiesComponents';
import { ProductListingPage } from './components/context/ProductListingPage';
import { CheckoutPage } from './components/context/CheckoutPage';
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
      case 'context':
        if (activeComponent === 'Product Listing Page') return <ProductListingPage />;
        if (activeComponent === 'Checkout Page') return <CheckoutPage />;
        return <div className="p-4">Select a context example</div>;
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
      utilities: 'Modals',
      context: 'Product Listing Page'
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