// productSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductFilters, ProductState } from './types';

const initialState: ProductState = {
  allProducts: [],
  filteredProducts: [],
  filters: {
    category: 'All',
    searchQuery: '',
    priceRange: {
      min: 0,
      max: 1000,
    },
  },
};

const applyFilters = (
  products: Product[],
  filters: ProductFilters
): Product[] => {
  return products.filter((product) => {
    // Category filter
    const categoryMatch =
      filters.category === 'All' || product.category === filters.category;

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
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.allProducts = action.payload;
      state.filteredProducts = applyFilters(action.payload, state.filters);
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.filters.category = action.payload;
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
    resetFilters: (state) => {
      state.filters = initialState.filters;
      state.filteredProducts = state.allProducts;
    },
  },
});

export const {
  setProducts,
  setCategory,
  setSearchQuery,
  setPriceRange,
  resetFilters,
} = productSlice.actions;

export default productSlice.reducer;
