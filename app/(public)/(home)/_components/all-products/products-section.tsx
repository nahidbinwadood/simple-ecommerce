import { useAppDispatch, useAppSelector } from '@/lib/features/hooks';
import ProductCard from './product-card';
import TopFilterSection from './top-filter-section';
import { useEffect } from 'react';
import { Product, setProducts } from '@/lib/features/products/products-slice';
import FilterResultsSection from './filter-results-section';

const ProductsSection = () => {
  const dispatch = useAppDispatch();
  const { filteredProducts, } = useAppSelector((state) => state.products);

  useEffect(() => {
    // Load products from JSON
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => dispatch(setProducts(data)));
  }, [dispatch]);
  return (
    <section className="flex-1">
      {/* Search and Filter Bar */}
      <TopFilterSection />

      {/* Results and Active Filters */}
      <FilterResultsSection/>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-5">
        {filteredProducts.map((product:Product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-center gap-1 hidden">
        <button className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-gray-700 hover:border-gray-400">
          ←
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded bg-orange-500 text-white font-medium">
          1
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-gray-700 hover:border-gray-400">
          2
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-gray-700 hover:border-gray-400">
          3
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-gray-700 hover:border-gray-400">
          4
        </button>
        <span className="flex h-9 w-9 items-center justify-center text-gray-500">
          ...
        </span>
        <button className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-gray-700 hover:border-gray-400">
          →
        </button>
      </div>
    </section>
  );
};

export default ProductsSection;
