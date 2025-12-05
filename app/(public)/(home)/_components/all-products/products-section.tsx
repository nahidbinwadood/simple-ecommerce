import { Badge } from '@/components/ui/badge';
import { useAppDispatch } from '@/lib/features/hooks';
import { X } from 'lucide-react';
import ProductCard from './product-card';
import TopFilterSection from './top-filter-section';

const ProductsSection = () => {
  const dispatch = useAppDispatch();

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
      image:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
  return (
    <section className="flex-1">
      {/* Search and Filter Bar */}
      <TopFilterSection />

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
