'use client';

 
import { Mail, MapPin, Phone, Apple, Download } from 'lucide-react';

export function Footer() {
  const topCategories = [
    'Computer & Laptops',
    'SmartPhone',
    'Headphone',
    'Accessories',
    'Camera & Photo',
    'TV & Homes',
  ];

  const quickLinks = [
    'Shop Product',
    'Shopping Cart',
    'Wishlist',
    'Compare',
    'Track Order',
    'Customer Help',
    'About Us',
  ];

  const popularTags = [
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

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#FF8A00] flex items-center justify-center">
                <div className="w-5 h-5 rounded-full border-3 border-gray-900"></div>
              </div>
              <span className="text-xl font-bold">CLICON</span>
            </div>

            <div className="text-sm text-gray-400 space-y-3">
              <div>
                <p className="text-gray-300 font-medium mb-1">Customer Support:</p>
                <a href="tel:+16295550129" className="hover:text-[#FF8A00] transition-colors">
                  (629) 555-0129
                </a>
              </div>

              <div>
                <p className="text-gray-200">4517 Washington Ave.<br />Manchester, Kentucky 39495</p>
              </div>

              <a href="mailto:info@kinbo.com" className="text-[#FF8A00] hover:text-[#FF8A00]/80 transition-colors block">
                info@kinbo.com
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-base mb-4">TOP CATEGORY</h4>
            <nav className="space-y-2 text-sm">
              {topCategories.map((category) => (
                <a
                  key={category}
                  href="#"
                  className="text-gray-400 hover:text-[#FF8A00] transition-colors block"
                >
                  {category}
                </a>
              ))}
              <a href="#" className="text-[#FF8A00] hover:text-[#FF8A00]/80 transition-colors font-medium flex items-center gap-2 mt-3">
                Browse All Product
                <span>→</span>
              </a>
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-base mb-4">QUICK LINKS</h4>
            <nav className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-[#FF8A00] transition-colors block"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-base mb-4">DOWNLOAD APP</h4>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2 rounded border border-gray-700">
                <Download className="w-4 h-4" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it now</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>

              <button className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors px-4 py-2 rounded border border-gray-700">
                <Apple className="w-4 h-4" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it now</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-base mb-4">POPULAR TAG</h4>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <a
                  key={tag}
                  href="#"
                  className="text-xs text-gray-400 hover:text-[#FF8A00] px-2 py-1 border border-gray-700 hover:border-[#FF8A00] rounded transition-colors"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <p className="text-center text-sm text-gray-500">
            Kinbo - eCommerce Template © 2021. Design by Templatecookie
          </p>
        </div>
      </div>
    </footer>
  );
}
