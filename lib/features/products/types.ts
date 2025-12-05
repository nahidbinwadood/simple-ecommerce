// types.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  category: string;
  image: string;
}

export interface ProductFilters {
  category: string;
  searchQuery: string;
  priceRange: {
    min: number;
    max: number;
  };
}

export interface ProductState {
  allProducts: Product[];
  filteredProducts: Product[];
  filters: ProductFilters;
}