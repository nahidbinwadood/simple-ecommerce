'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  ChevronDown,
  Headphones,
  Heart,
  Info,
  MapPin,
  Menu,
  Phone,
  Repeat,
  Search,
  ShoppingCart,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Icons } from '../icons';
import HederTopSection from './header-top-section';
import HeaderBottomSection from './header-bottom-section';

export function Header() {
 

  return (
    <header className="w-full sticky top-0">
      {/* top section */}
     <HederTopSection/>

      {/* bottom section */}
      <HeaderBottomSection/>

      <div className="bg-white border-b hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-6">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-gray-700 hover:text-[#1B6392] transition-colors">
                  <Menu className="w-5 h-5" />
                  <span className="font-medium">All Category</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Electronics</DropdownMenuItem>
                  <DropdownMenuItem>Fashion</DropdownMenuItem>
                  <DropdownMenuItem>Home & Garden</DropdownMenuItem>
                  <DropdownMenuItem>Sports</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <button className="flex items-center gap-2 text-gray-600 hover:text-[#1B6392] transition-colors">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Track Order</span>
              </button>

              <button className="flex items-center gap-2 text-gray-600 hover:text-[#1B6392] transition-colors">
                <Repeat className="w-4 h-4" />
                <span className="text-sm">Compare</span>
              </button>

              <button className="flex items-center gap-2 text-gray-600 hover:text-[#1B6392] transition-colors">
                <Headphones className="w-4 h-4" />
                <span className="text-sm">Customer Support</span>
              </button>

              <button className="flex items-center gap-2 text-gray-600 hover:text-[#1B6392] transition-colors">
                <Info className="w-4 h-4" />
                <span className="text-sm">Need Help</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+1-202-555-0104</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
