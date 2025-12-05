import { Icons } from '@/components/shared/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  ChevronDown,
} from 'lucide-react';
import Link from 'next/link';

const CategorySection = () => {
  return (
    <div className="bg-white ">
      <div className="flex items-center justify-between py-4 container mx-auto">
        {/* left side items */}
        <div className="flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 transition-colors bg-[#F2F4F5] px-6 py-3.5 rounded cursor-pointer">
              <span className="font-medium">All Category</span>
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-full'>
              <DropdownMenuItem>Electronics</DropdownMenuItem>
              <DropdownMenuItem>Fashion</DropdownMenuItem>
              <DropdownMenuItem>Home & Garden</DropdownMenuItem>
              <DropdownMenuItem>Sports</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button className="flex items-center gap-1.5 text-[#5F6C72] hover:text-[#1B6392] transition-colors cursor-pointer">
            <Icons.gps />
            <span className="text-sm">Track Order</span>
          </button>

          <button className="flex items-center gap-2 text-[#5F6C72] hover:text-[#1B6392] transition-colors cursor-pointer">
            <Icons.reset />
            <span className="text-sm">Compare</span>
          </button>

          <button className="flex items-center gap-2 text-[#5F6C72] hover:text-[#1B6392] transition-colors cursor-pointer">
            <Icons.headphone />
            <span className="text-sm">Customer Support</span>
          </button>

          <button className="flex items-center gap-2 text-[#5F6C72] hover:text-[#1B6392] transition-colors cursor-pointer">
            <Icons.info />
            <span className="text-sm">Need Help</span>
          </button>
        </div>

        {/* right side items */}
        <Link
          href={'tel:+1-202-555-0104'}
          className="flex items-center gap-2 text-gray-700"
        >
          <Icons.phone />
          <span className="font-medium">+1-202-555-0104</span>
        </Link>
      </div>
    </div>
  );
};

export default CategorySection;
