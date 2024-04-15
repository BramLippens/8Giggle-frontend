import { Route, Routes } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import PostDetailPage from "./Pages/PostDetailPage";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
