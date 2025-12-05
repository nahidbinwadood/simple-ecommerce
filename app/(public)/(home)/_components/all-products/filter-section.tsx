import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

const FilterSection = () => {
  const categories = [
    { id: 'electronics', label: 'Electronics Devices', checked: true },
    { id: 'computer-laptop', label: 'Computer & Laptop' },
    { id: 'accessories', label: 'Computer Accessories' },
    { id: 'smartphone', label: 'SmartPhone' },
    { id: 'headphone', label: 'Headphone' },
    { id: 'mobile-accessories', label: 'Mobile Accessories' },
    { id: 'gaming', label: 'Gaming Console' },
    { id: 'camera', label: 'Camera & Photo' },
    { id: 'tv', label: 'TV & Homes Appliances' },
    { id: 'watches', label: 'Watches & Accessories' },
    { id: 'gps', label: 'GPS & Navigation' },
    { id: 'wearable', label: 'Wearable Technology' },
  ];

  const tags: string[] = [
    'Game',
    'iPhone',
    'TV',
    'Asus Laptops',
    'Macbook',
    'SSD',
    'Graphics Card',
    'Power Bank',
    'Smart TV',
    'Speaker',
    'Tablet',
    'Microwave',
    'Samsung',
  ];

  const priceRanges = [
    { id: 'all', label: 'All Price' },
    { id: 'under-20', label: 'Under $20' },
    { id: '25-100', label: '$25 to $100' },
    { id: '100-300', label: '$100 to $300' },
    { id: '300-500', label: '$300 to $500' },
    { id: '500-1000', label: '$500 to $1,000' },
    { id: '1000-10000', label: '$1,000 to $10,000' },
  ];

  const brands = [
  { id: 'apple', label: 'Apple', checked: true, col: 1 },
  { id: 'google', label: 'Google', col: 2 },
  { id: 'microsoft', label: 'Microsoft', checked: true, col: 1 },
  { id: 'samsung', label: 'Samsung', col: 2 },
  { id: 'dell', label: 'Dell', col: 1 },
  { id: 'hp', label: 'HP', col: 2 },
  { id: 'symphony', label: 'Symphony', col: 1 },
  { id: 'xiaomi', label: 'Xiaomi', col: 2 },
  { id: 'sony', label: 'Sony', checked: true, col: 1 },
  { id: 'panasonic', label: 'Panasonic', col: 2 },
  { id: 'lg', label: 'LG', checked: true, col: 1 },
  { id: 'intel', label: 'Intel', col: 2 },
  { id: 'oneplus', label: 'One Plus', col: 1 },
];

  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedPriceRange, setSelectedPriceRange] = useState('300-500');

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
                defaultChecked={category.checked}
                className={
                  category.checked
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
            value={priceRange}
            onValueChange={setPriceRange}
            max={2000}
            step={10}
            className="mb-4"
          />
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Min price"
              value={`$${priceRange[0]}`}
              className="h-9 text-xs"
              readOnly
            />
            <Input
              type="text"
              placeholder="Max price"
              value={`$${priceRange[1]}`}
              className="h-9 text-xs"
              readOnly
            />
          </div>
        </div>
        <RadioGroup
          value={selectedPriceRange}
          onValueChange={setSelectedPriceRange}
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

      {/* Popular Brands Section */}
      <div className="mb-8">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-900">
          Popular Brands
        </h3>
        <div className="grid grid-cols-2 gap-y-3 gap-x-4">
          {brands.map((brand) => (
            <div key={brand.id} className="flex items-center space-x-2">
              <Checkbox
                id={brand.id}
                defaultChecked={brand.checked}
                className={
                  brand.checked
                    ? 'border-orange-500 bg-orange-500 data-[state=checked]:bg-orange-500 data-[state=checked]:text-white'
                    : ''
                }
              />
              <label
                htmlFor={brand.id}
                className="text-sm text-gray-700 cursor-pointer"
              >
                {brand.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags Section */}
      <div>
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-900">
          Popular Tag
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`px-3 py-1.5 text-xs font-medium rounded border transition-colors ${
                tag === 'Graphics Card'
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSection;
