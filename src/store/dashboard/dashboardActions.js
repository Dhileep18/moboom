import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants/portConstants";


export const getAllProducts = createAsyncThunk(
  "dashboard/products",
  async (data, { dispatch }) => {
    console.log("ssssssss".data)
    const res = await axios
      .get(`${BASE_URL}/products?skip=${data.currentPage}&limit=${data.limit}`)
      .then((response) => {
        return response;
      });
    return res;
  }
);

export const getAllCategories = createAsyncThunk(
  "dashboard/categories",
  async (data, { dispatch }) => {
    const res = await axios
      .get(`${BASE_URL}/products/categories`)
      .then((response) => {
        return response;
      });
    return res;
  }
);

export const getByCategories = createAsyncThunk(
  "dashboard/getByCategories",
  async (category, { dispatch }) => {
    const res = await axios
      .get(`${BASE_URL}/products/category/${category}`)
      .then((response) => {
        return response;
      });
    return res;
  }
);

export const searchProducts = createAsyncThunk(
  "dashboard/searchProducts",
  async (category, { dispatch }) => {
    const res = await axios
      .get(`${BASE_URL}/products/search?q=${category}`)
      .then((response) => {
        return response;
      });
    return res;
  }
);
