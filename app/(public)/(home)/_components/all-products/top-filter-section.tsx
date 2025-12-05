import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAppDispatch, useAppSelector } from '@/lib/features/hooks';
import { setSearchQuery, setSortBy } from '@/lib/features/products/products-slice';
import { Search } from 'lucide-react';

const TopFilterSection = () => {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.products);

  // State to track the input while typing
  const [localSearch, setLocalSearch] = useState(filters.searchQuery);

  // Debounce effect: wait 400ms after user stops typing
  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setSearchQuery(localSearch));
    }, 400);

    return () => clearTimeout(handler);
  }, [localSearch, dispatch]);

  

  const handleSortChange = (value: string) => {
    dispatch(setSortBy(value));
  };

  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search for anything..."
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          className="pl-10 h-10"
        />
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Sort by:</span>
        <Select value={filters.sortBy} onValueChange={handleSortChange}>
          <SelectTrigger className="w-[180px] h-10">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TopFilterSection;
