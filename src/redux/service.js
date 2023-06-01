import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchPosts = () => (dispatch: AppDispatch) => ;

export const fetchPosts = createAsyncThunk(
  "user/fetchALL",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response);
      return response.data;
    } catch (e) {
      return rejectWithValue("Не удалось загрузить");
    }
  }
);
