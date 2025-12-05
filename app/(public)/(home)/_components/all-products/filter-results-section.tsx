// FilterResultsSection.tsx
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/lib/features/hooks';
import {
  resetFilters,
  setPriceRange,
  toggleCategory,
} from '@/lib/features/products/products-slice';
import { X } from 'lucide-react';

const FilterResultsSection = () => {
  const dispatch = useAppDispatch();
  const { filters, filteredProducts } = useAppSelector(
    (state) => state.products
  );

  // Helper function to get price range label
  const getPriceRangeLabel = () => {
    const { min, max } = filters.priceRange;
    if (min === 0 && max === 2000) return null; // Default range, don't show
    return `$${min} - $${max}`;
  };

  // Check if any filters are active
  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.searchQuery !== '' ||
    filters.priceRange.min !== 0 ||
    filters.priceRange.max !== 2000;

  const handleRemoveCategory = (category: string) => {
    dispatch(toggleCategory(category));
  };

  const handleRemovePriceRange = () => {
    dispatch(setPriceRange({ min: 0, max: 2000 }));
  };

  const handleResetAll = () => {
    dispatch(resetFilters());
  };

  const priceRangeLabel = getPriceRangeLabel();

  if (!hasActiveFilters) return

  // show the filters if select any filter==>
  return (
    <div className="mb-6 flex items-center justify-between bg-[#F2F4F5] px-6 py-3">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm text-gray-600">Active Filters:</span>

        {/* Category Badges */}
        {filters.categories.map((category) => (
          <Badge
            key={category}
            variant="secondary"
            className="bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            {category}
            <X
              className="ml-1 h-3 w-3 cursor-pointer"
              onClick={() => handleRemoveCategory(category)}
            />
          </Badge>
        ))}

        {/* Search Query Badge */}
        {filters.searchQuery && (
          <Badge
            variant="secondary"
            className="bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            Search: &quot;{filters.searchQuery}&quot;
            <X
              className="ml-1 h-3 w-3 cursor-pointer"
              onClick={() =>
                dispatch({ type: 'products/setSearchQuery', payload: '' })
              }
            />
          </Badge>
        )}

        {/* Price Range Badge */}
        {priceRangeLabel && (
          <Badge
            variant="secondary"
            className="bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            {priceRangeLabel}
            <X
              className="ml-1 h-3 w-3 cursor-pointer"
              onClick={handleRemovePriceRange}
            />
          </Badge>
        )}

        {/* Reset All Button */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleResetAll}
            className="h-7 px-2 text-xs text-orange-600 hover:text-orange-700 hover:bg-orange-50"
          >
            Reset All
          </Button>
        )}



      </div>

      {/* Results Count */}
      <span className="text-sm font-semibold text-gray-900">
        {filteredProducts.length.toLocaleString()} Results found
      </span>
    </div>
  );
};

export default FilterResultsSection;
