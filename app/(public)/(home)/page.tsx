 
import AllProductsSectionMainWrapper from './_components/all-products/all-products-section-main-wrapper';
import CategorySection from './_components/category-section';

const page = () => {
  return (
    <section className="">
      <CategorySection />

      {/* All Products section */}
      <AllProductsSectionMainWrapper/>
      
    </section>
  );
};

export default page;
