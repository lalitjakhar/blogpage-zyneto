import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./component/homepage/HomePage";
import Navbar from "./component/Navbar";
import BlogPage from "./component/blogpage/BlogPage";

function App() {
  return (
    <>
     <Router>
      <Navbar />
        <main>
          <Routes>
             <Route path="/" element={<HomePage />} />
             <Route path="/blogpage" element={<BlogPage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
