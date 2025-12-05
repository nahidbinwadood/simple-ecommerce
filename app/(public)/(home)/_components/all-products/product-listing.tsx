'use client';

import { useState } from 'react';
import { Search, X, Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';

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

const tags = [
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

const products = [
  {
    id: 1,
    name: 'TOZO T6 True Wireless Earbuds Bluetooth Headphon...',
    price: 70,
    originalPrice: null,
    rating: 4,
    reviews: 738,
    badge: 'HOT',
    badgeColor: 'bg-red-500',
    image: '/placeholder1.jpg',
  },
  {
    id: 2,
    name: 'Samsung Electronics Samsung Galaxy S21 5G',
    price: 2300,
    originalPrice: null,
    rating: 5,
    reviews: 536,
    badge: null,
    image: '/placeholder2.jpg',
  },
  {
    id: 3,
    name: 'Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...',
    price: 360,
    originalPrice: null,
    rating: 5,
    reviews: 423,
    badge: 'BEST DEALS',
    badgeColor: 'bg-blue-500',
    image: '/placeholder3.jpg',
  },
  {
    id: 4,
    name: 'Portable Wshing Machine, 11lbs capacity Model 18NMF...',
    price: 80,
    originalPrice: null,
    rating: 4,
    reviews: 816,
    badge: null,
    image: '/placeholder4.jpg',
  },
  {
    id: 5,
    name: 'Wired Over-Ear Gaming Headphones with USB',
    price: 1500,
    originalPrice: null,
    rating: 4,
    reviews: 536,
    badge: 'BEST DEALS',
    badgeColor: 'bg-blue-500',
    image: '/placeholder5.jpg',
  },
  {
    id: 6,
    name: 'Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...',
    price: 1200,
    originalPrice: null,
    rating: 5,
    reviews: 740,
    badge: '25% OFF',
    badgeColor: 'bg-yellow-500',
    image: '/placeholder6.jpg',
  },
  {
    id: 7,
    name: 'Dell Optiplex 7000x7480 All-in-One Computer Monitor',
    price: 1150,
    originalPrice: 1200,
    rating: 5,
    reviews: 492,
    badge: null,
    image: '/placeholder7.jpg',
  },
  {
    id: 8,
    name: '4K UHD LED Smart TV with Chromecast Built-in',
    price: 220,
    originalPrice: 250,
    rating: 5,
    reviews: 524,
    badge: 'SALE',
    badgeColor: 'bg-green-500',
    image: '/placeholder8.jpg',
  },
  {
    id: 9,
    name: 'Wired Over-Ear Gaming Headphones with USB',
    price: 1500,
    originalPrice: null,
    rating: 4,
    reviews: 740,
    badge: 'BEST DEALS',
    badgeColor: 'bg-blue-500',
    image: '/placeholder9.jpg',
  },
  {
    id: 10,
    name: 'Portable Wshing Machine, 11lbs capacity Model 18NMF...',
    price: 80,
    originalPrice: null,
    rating: 5,
    reviews: 816,
    badge: null,
    image: '/placeholder10.jpg',
  },
  {
    id: 11,
    name: 'TOZO T6 True Wireless Earbuds Bluetooth Headphon...',
    price: 70,
    originalPrice: null,
    rating: 5,
    reviews: 600,
    badge: 'HOT',
    badgeColor: 'bg-red-500',
    image: '/placeholder11.jpg',
  },
  {
    id: 12,
    name: 'Dell Optiplex 7000x7480 All-in-One Computer Monitor',
    price: 1150,
    originalPrice: null,
    rating: 5,
    reviews: 492,
    badge: null,
    image: '/placeholder12.jpg',
  },
  {
    id: 13,
    name: 'Sony DSCHX8 High Zoom Point & Shoot Camera',
    price: 1200,
    originalPrice: null,
    rating: 4,
    reviews: 834,
    badge: 'SALE',
    badgeColor: 'bg-green-500',
    image: '/placeholder13.jpg',
  },
  {
    id: 14,
    name: '4K UHD LED Smart TV with Chromecast Built-in',
    price: 220,
    originalPrice: null,
    rating: 4,
    reviews: 738,
    badge: null,
    image: '/placeholder14.jpg',
  },
  {
    id: 15,
    name: 'Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...',
    price: 1500,
    originalPrice: null,
    rating: 3,
    reviews: 536,
    badge: null,
    image: '/placeholder15.jpg',
  },
  {
    id: 16,
    name: 'Dell Optiplex 7000x7480 All-in-One Computer Monitor',
    price: 1150,
    originalPrice: null,
    rating: 5,
    reviews: 492,
    badge: '25% OFF',
    badgeColor: 'bg-yellow-500',
    image: '/placeholder16.jpg',
  },
];

export default function ProductListing() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedPriceRange, setSelectedPriceRange] = useState('300-500');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1400px] px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-[280px] flex-shrink-0">
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
              <RadioGroup value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
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

          {/* Main Content */}
          <main className="flex-1">
            {/* Search and Filter Bar */}
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for anything..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-[160px] h-10">
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

            {/* Results and Active Filters */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Active Filters:</span>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  Electronics Devices
                  <X className="ml-1 h-3 w-3 cursor-pointer" />
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  5 Star Rating
                  <X className="ml-1 h-3 w-3 cursor-pointer" />
                </Badge>
              </div>
              <span className="text-sm font-semibold text-gray-900">
                65,867 Results found
              </span>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-4 gap-5">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg"
                >
                  {product.badge && (
                    <div
                      className={`absolute left-3 top-3 z-10 rounded px-2 py-1 text-xs font-bold text-white ${product.badgeColor}`}
                    >
                      {product.badge}
                    </div>
                  )}

                  <div className="relative aspect-square overflow-hidden bg-gray-50 p-4">
                    <div className="flex h-full items-center justify-center">
                      <div className="h-32 w-32 bg-gray-200 rounded" />
                    </div>

                    {/* Hover Actions */}
                    <div className="absolute bottom-3 right-3 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                      <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md hover:bg-orange-500 hover:text-white transition-colors">
                        <Heart className="h-4 w-4" />
                      </button>
                      <button className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white shadow-md hover:bg-orange-600 transition-colors">
                        <ShoppingCart className="h-4 w-4" />
                      </button>
                      <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md hover:bg-orange-500 hover:text-white transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="mb-2 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < product.rating
                              ? 'fill-orange-400 text-orange-400'
                              : 'fill-gray-200 text-gray-200'
                          }`}
                        />
                      ))}
                      <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
                    </div>

                    <h3 className="mb-2 line-clamp-2 text-sm text-gray-900 hover:text-orange-500 cursor-pointer transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-blue-600">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-1">
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
              <span className="flex h-9 w-9 items-center justify-center text-gray-500">...</span>
              <button className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-gray-700 hover:border-gray-400">
                →
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
