import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';
import { Icons } from '../icons';

const HeaderBottomSection = () => {
  const [cartCount, setCartCount] = useState<number>(2);
  return (
    <div className="bg-[#1B6392] border-t border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 gap-8">
          <div className="flex items-center gap-2">
            <Icons.logo />
            <span className="text-white text-2xl font-bold">CLICON</span>
          </div>

          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for anything..."
                className="w-full h-11 pl-4 pr-12 rounded-sm border-0 focus-visible:ring-2 focus-visible:ring-white/20"
              />
              <button className="absolute right-0 top-0 h-11 px-6 bg-[#FF8A00] text-white hover:bg-[#FF8A00]/90 transition-colors rounded-r-sm">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-white hover:text-gray-200 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-primary text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="text-white hover:text-gray-200 transition-colors">
              <Icons.heart />
            </button>

            <button className="text-white hover:text-gray-200 transition-colors">
             <Icons.user/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottomSection;
