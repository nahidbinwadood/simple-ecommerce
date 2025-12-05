'use client';

import FilterSection from './filter-section';
import ProductsSection from './products-section';

export default function ProductListing() {
  

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <FilterSection />

          {/* Main Content */}
          <ProductsSection />
        </div>
      </div>
    </div>
  );
}
