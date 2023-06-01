import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPosts } from "./service";

const initialState = {
  posts: [],
  isLoading: false,
  error: "",
};
console.log(initialState.posts);
export const PostsReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    // postsFetching(state) {
    //   state.isLoading = false;
    // },
    // postsFetchingSuccess(state, action) {
    //   state.isLoading = false;
    //   state.error = "";
    //   state.users = action.payload;
    // },
    // postsFetchingError(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
  extraReducers: {
    [fetchPosts.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.posts = action.payload;
    },
    [fetchPosts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPosts.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default PostsReducer.reducer;
