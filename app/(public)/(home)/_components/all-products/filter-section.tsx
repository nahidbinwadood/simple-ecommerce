import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { useAppDispatch, useAppSelector } from '@/lib/features/hooks';
import { setPriceRange, toggleCategory } from '@/lib/features/products/products-slice';

const FilterSection = () => {
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.products);

  const categories = [
    { id: 'Electronics', label: 'Electronics' },
    { id: 'Fashion', label: 'Fashion' },
    { id: 'Sports', label: 'Sports' },
    { id: 'Food', label: 'Food' },
    { id: 'Home', label: 'Home' },
  ];

  const priceRanges = [
    { id: 'all', label: 'All Price', min: 0, max: 2000 },
    { id: 'under-20', label: 'Under $20', min: 0, max: 20 },
    { id: '25-100', label: '$25 to $100', min: 25, max: 100 },
    { id: '100-300', label: '$100 to $300', min: 100, max: 300 },
  ];

  const handleCategoryChange = (categoryId: string) => {
     dispatch(toggleCategory(categoryId));
  };

  const handlePriceRangeChange = (values: number[]) => {
    dispatch(setPriceRange({ min: values[0], max: values[1] }));
  };

  const handlePredefinedPriceRange = (min: number, max: number) => {
    dispatch(setPriceRange({ min, max }));
  };

  const getCurrentPriceRangeId = () => {
    const { min, max } = filters.priceRange;
    const range = priceRanges.find(r => r.min === min && r.max === max);
    return range ? range.id : 'custom';
  };

  return (
    <aside className="w-[280px] shrink-0">
      {/* Category Section */}
      <div className="mb-8">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-900">
          Category
        </h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.id}
                checked={filters.categories.includes(category.id)}
                onCheckedChange={() => handleCategoryChange(category.id)}
                className={
                  filters.categories.includes(category.id)
                    ? 'border-orange-500 bg-orange-500 data-[state=checked]:bg-orange-500 data-[state=checked]:text-white'
                    : ''
                }
              />
              <label
                htmlFor={category.id}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {category.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Section */}
      <div className="mb-8">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-900">
          Price Range
        </h3>
        <div className="mb-4">
          <Slider
            value={[filters.priceRange.min, filters.priceRange.max]}
            onValueChange={handlePriceRangeChange}
            max={2000}
            step={10}
            className="mb-4"
          />
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Min price"
              value={`$${filters.priceRange.min}`}
              className="h-9 text-xs"
              readOnly
            />
            <Input
              type="text"
              placeholder="Max price"
              value={`$${filters.priceRange.max}`}
              className="h-9 text-xs"
              readOnly
            />
          </div>
        </div>
        <RadioGroup
          value={getCurrentPriceRangeId()}
          onValueChange={(value) => {
            const range = priceRanges.find(r => r.id === value);
            if (range) {
              handlePredefinedPriceRange(range.min, range.max);
            }
          }}
        >
          <div className="space-y-3">
            {priceRanges.map((range) => (
              <div key={range.id} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={range.id}
                  id={range.id}
                  className="border-gray-300"
                />
                <Label
                  htmlFor={range.id}
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  {range.label}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>
    </aside>
  );
};

export default FilterSection;