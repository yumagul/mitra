import React from "react";
import PostContainer from "./components/PostContainer";
import "./App.css";
import { useState } from "react";
import Pagination from "./UI/Pagination";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/redux";
import { fetchPosts } from "./redux/service";
import Filter from "./UI/Filter";
import { usePosts } from "./UI/hooks/usePosts";

function App() {
  const [totalPages, setTotalPages] = useState(10);
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const { posts, isLoading, error } = useAppSelector(
    (state) => state.PostsReducer
  );
  useEffect(() => {
    dispatch(fetchPosts(page));
  }, [page]);
  const changePage = (page) => {
    setPage(page);
  };
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  return (
    <div className="App">
      <Filter filter={filter} setFilter={setFilter} />
      <PostContainer
        posts={sortedAndSearchPosts}
        isLoading={isLoading}
        error={error}
      />
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default App;
