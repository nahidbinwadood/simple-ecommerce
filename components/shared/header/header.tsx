'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
 
import {
  ChevronDown,
  Headphones,
 
  Info,
  MapPin,
  Menu,
  Phone,
  Repeat,
 
} from 'lucide-react';
 
import HederTopSection from './header-top-section';
import HeaderBottomSection from './header-bottom-section';

export function Header() {
 

  return (
    <header className="w-full sticky top-0 z-50">
      {/* top section */}
     <HederTopSection/>

      {/* bottom section */}
      <HeaderBottomSection/>

    </header>
  );
}
