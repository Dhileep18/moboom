import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getAllCategories, getByCategories, searchProducts } from "./dashboardActions";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    loading: false,
    products: [],
    categories: [],
    pagination: {
      limit: 12,
      skip: 0,
      total: 100,
    },
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data
        state.pagination = {
          total: action.payload.data.total,
          skip: action.payload.data.skip,
          limit: action.payload.data.limit,
        }
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getAllCategories.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.data
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(getByCategories.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getByCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data
        state.pagination = {
          total: action.payload.data.total,
          skip: action.payload.data.skip,
          limit: action.payload.data.limit,
        }
      })
      .addCase(getByCategories.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(searchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data
        state.pagination = {
          total: action.payload.data.total,
          skip: action.payload.data.skip,
          limit: action.payload.data.limit,
        }
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
      })
  },
});


export default dashboardSlice.reducer;
