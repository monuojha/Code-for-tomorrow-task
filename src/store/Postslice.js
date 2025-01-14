import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(
    " https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response.data);
  return response.data;
});
const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    currentPage: 1,
    Loading: true,
  },
  reducers: {
    removeCard: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state,) => {
      state.Loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.Loading = false;
    });

  },
});

export const { removeCard, setPage } = postSlice.actions;
export default postSlice.reducer;
