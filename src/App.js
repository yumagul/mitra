import React from "react";
import PostContainer from "./components/PostContainer";
import "./App.css";
import { useState } from "react";
import Pagination from "./UI/Pagination";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/redux";
import { fetchPosts } from "./redux/service";

function App() {
  const [totalPages, setTotalPages] = useState(10);
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPosts(page));
  }, [page]);
  const changePage = (page) => {
    setPage(page);
  };
  return (
    <div className="App">
      <PostContainer />
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default App;
