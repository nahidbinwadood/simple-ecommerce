// productSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  category: string;
  image: string;
}

export interface ProductFilters {
  categories: string[];
  searchQuery: string;
  priceRange: {
    min: number;
    max: number;
  };
  sortBy: string;
}

export interface ProductState {
  allProducts: Product[];
  filteredProducts: Product[];
  filters: ProductFilters;
}

const initialState: ProductState = {
  allProducts: [],
  filteredProducts: [],
  filters: {
    categories: [],
    searchQuery: '',
    priceRange: {
      min: 0,
      max: 2000,
    },
    sortBy: 'popular',
  },
};

const applyFilters = (products: Product[], filters: ProductFilters): Product[] => {
  let filtered = products.filter((product) => {
    // Category filter - if no categories selected, show all
    const categoryMatch =
      filters.categories.length === 0 ||
      filters.categories.includes(product.category);

    // Search filter
    const searchMatch =
      filters.searchQuery === '' ||
      product.name.toLowerCase().includes(filters.searchQuery.toLowerCase());

    // Price range filter
    const priceMatch =
      product.price >= filters.priceRange.min &&
      product.price <= filters.priceRange.max;

    return categoryMatch && searchMatch && priceMatch;
  });

  // Apply sorting
  switch (filters.sortBy) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'popular':
    default:
      // Keep original order for "most popular"
      break;
  }

  return filtered;
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.allProducts = action.payload;
      state.filteredProducts = applyFilters(action.payload, state.filters);
    },
    toggleCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      const index = state.filters.categories.indexOf(category);
      
      if (index > -1) {
        // Remove category if already selected
        state.filters.categories.splice(index, 1);
      } else {
        // Add category if not selected
        state.filters.categories.push(category);
      }
      
      state.filteredProducts = applyFilters(state.allProducts, state.filters);
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.filters.categories = action.payload;
      state.filteredProducts = applyFilters(state.allProducts, state.filters);
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.filters.searchQuery = action.payload;
      state.filteredProducts = applyFilters(state.allProducts, state.filters);
    },
    setPriceRange: (
      state,
      action: PayloadAction<{ min: number; max: number }>
    ) => {
      state.filters.priceRange = action.payload;
      state.filteredProducts = applyFilters(state.allProducts, state.filters);
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.filters.sortBy = action.payload;
      state.filteredProducts = applyFilters(state.allProducts, state.filters);
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
      state.filteredProducts = state.allProducts;
    },
  },
});

export const {
  setProducts,
  toggleCategory,
  setCategories,
  setSearchQuery,
  setPriceRange,
  setSortBy,
  resetFilters,
} = productSlice.actions;

export default productSlice.reducer;