import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PostDetailPage from "./Pages/PostDetailPage";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import CategoriesContext from "./hooks/CategoriesContext";
import api from "./api/api";

function App() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      const response = await api.get("/categories");
      console.log(response.data);
      setCategories(response.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <CategoriesContext.Provider value={{ categories, isLoading, error }}>
      <div className="flex flex-col h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
        </Routes>
      </div>
    </CategoriesContext.Provider>
  );
}

export default App;
