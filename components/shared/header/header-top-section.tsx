import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

import { Icons } from '../icons';
import { ChevronDown } from 'lucide-react';

const HederTopSection = () => {
  return (
    <div className="bg-primary text-white">
      <div className="container mx-auto py-3">
        <div className="flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-200">
              Welcome to Clicon online eCommerce store.
            </span>
          </div>

          <div className="flex items-center gap-6">
            {/* social links */}
            <div className="flex items-center gap-3">
              <span className="text-gray-200 text-sm">Follow us:</span>
              <div className="flex items-center gap-3">
                <Link
                  href="/"
                  target="_blank"
                  className="hover:text-gray-300 transition-colors"
                >
                  <Icons.twitter />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="hover:text-gray-300 transition-colors"
                >
                  <Icons.facebook />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="hover:text-gray-300 transition-colors"
                >
                  <Icons.pinterest />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="hover:text-gray-300 transition-colors"
                >
                  <Icons.reddit />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="hover:text-gray-300 transition-colors"
                >
                  <Icons.youtube />
                </Link>
                <Link
                  href="/"
                  target="_blank"
                  className="hover:text-gray-300 transition-colors"
                >
                  <Icons.instagram />
                </Link>
              </div>
            </div>

            {/* separator */}
            <div className="h-7 border-l border-white/15" />

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-300 transition-colors cursor-pointer">
                Eng <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Spanish</DropdownMenuItem>
                <DropdownMenuItem>French</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-300 transition-colors">
                USD <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>USD</DropdownMenuItem>
                <DropdownMenuItem>EUR</DropdownMenuItem>
                <DropdownMenuItem>GBP</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HederTopSection;
