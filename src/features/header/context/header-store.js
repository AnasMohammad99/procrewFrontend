import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories",
  async (_, thunkApi) => {
    try {
      const resp = await axios.get(`http://localhost:4000/categories`);
      return resp.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue("something went wrong");
    }
  }
);
export const headerSlice = createSlice({
  name: "header",
  initialState: {
    categories: [],
    sub_categories: [],
    isLoading: true,
  },
  reducers: {
    getSubCategories: (state, action) => {
      state.sub_categories = state.categories.find(
        (category) => category.name === action.payload
      );
    },
  },
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    [getCategories.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getSubCategories } = headerSlice.actions;
export default headerSlice.reducer;
