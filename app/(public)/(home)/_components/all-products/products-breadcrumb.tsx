import { Icons } from '@/components/shared/icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
 
import Link from 'next/link';

const ProductsBreadCrumb = () => {
  return (
    <section className='bg-[#F2F4F5] border-t-gray-400'>
      <div className='container mx-auto py-7'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className='flex items-center gap-2 hover:text-[#2DA5F3]'  asChild>
                <Link href="/">
                <Icons.home/>
                Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            
            <BreadcrumbItem>
              <BreadcrumbLink asChild className='hover:text-[#2DA5F3]'>
                <Link href="/">Shop</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild className='hover:text-[#2DA5F3]'>
                <Link href="/">Shop Grid</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className='text-[#2DA5F3] font-medium'>Electronics Devices</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
};

export default ProductsBreadCrumb;
