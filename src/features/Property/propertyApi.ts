import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api";
import { IProperty } from "../../models/property";

export const getProperties = createAsyncThunk("property/list", async () => {
  try {
    const response = await API.get("list");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const addFavorite = createAsyncThunk(
  "property/addFavorite",
  async (property: IProperty) => {
    try {
      const response = await API.post(`/${property.id}/favorite`, property);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
