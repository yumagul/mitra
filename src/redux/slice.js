import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPosts } from "./service";
console.log(fetchPosts);
const initialState = {
  posts: [],
  isLoading: false,
  error: "",
};
console.log(initialState.posts);
export const PostsReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.posts = action.payload;
    },
    [fetchPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default PostsReducer.reducer;
