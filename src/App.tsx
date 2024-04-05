import { Route, Routes } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed";
import PostPage from "./Pages/PostPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
