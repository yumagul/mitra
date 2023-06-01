import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/redux";
import { fetchPosts } from "./redux/service";

function App() {
  const dispatch = useAppDispatch();
  const { posts, isLoading, error } = useAppSelector(
    (state) => state.PostsReducer
  );
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      {isLoading && <h1> Идет загрузка </h1>}
      {error && <h1>{error} </h1>}
      {JSON.stringify(posts, null, 2)}{" "}
    </div>
  );
}

export default App;
