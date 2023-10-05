import { useEffect } from "react";
import { useAppDispatch } from "./Utils/ReduxStore/Hooks";
import { fetchAllComments } from "./Utils/ReduxStore/CommentSlice";
import Layout from "./Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllComments());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
