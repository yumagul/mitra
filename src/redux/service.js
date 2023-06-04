import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchPosts = () => (dispatch: AppDispatch) => ;

export const fetchPosts = createAsyncThunk(
  "user/fetchALL",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          params: {
            _limit: 10,
            _page: page,
          },
        }
      );
      console.log(response);

      return response.data;
    } catch (e) {
      return rejectWithValue("Не удалось загрузить");
    }
  }
);
