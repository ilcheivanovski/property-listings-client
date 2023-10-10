import { createSlice } from "@reduxjs/toolkit";
import { addFavorite, getProperties } from "./propertyApi";

export const propertySlice = createSlice({
  name: "property",
  initialState: {
    list: {
      isLoading: false,
      status: "",
      values: [],
    },
    save: {
      isSaving: false,
    },
  },
  reducers: {
    clearSuccessMessage: (state, payload) => {
      // TODO: Update state to clear success message
    },
  },
  extraReducers: {
    [getProperties.pending.type]: (state, action) => {
      state.list.status = "pending";
      state.list.isLoading = true;
    },
    [getProperties.fulfilled.type]: (state, { payload }) => {
      state.list.status = "success";
      state.list.values = payload;
      state.list.isLoading = false;
    },
    [getProperties.rejected.type]: (state, action) => {
      state.list.status = "failed";
      state.list.isLoading = false;
    },
    [addFavorite.pending.type]: (state, action) => {
      state.save.isSaving = true;
    },
    [addFavorite.fulfilled.type]: (state, action) => {
      state.save.isSaving = false;
    },
    [addFavorite.rejected.type]: (state, action) => {
      state.save.isSaving = false;
    },
  },
});

export default propertySlice.reducer;
