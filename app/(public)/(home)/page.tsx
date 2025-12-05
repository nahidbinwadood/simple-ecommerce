 
import ProductListing from './_components/all-products/product-listing';
import CategorySection from './_components/category-section';

const page = () => {
  return (
    <section className="container mx-auto">
      <CategorySection />
      <ProductListing/>
    </section>
  );
};

export default page;
