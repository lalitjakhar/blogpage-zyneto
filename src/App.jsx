import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./component/homepage/HomePage";
import Navbar from "./component/Navbar";
import BlogPage from "./component/blogpage/BlogPage";
import AboutUs from "./component/aboutus/AboutUs";

function App() {
  return (
    <>
     <Router>
      <Navbar />
        <main>
          <Routes>
             <Route path="/" element={<HomePage />} />
             <Route path="/blogpage" element={<BlogPage />} />
             <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
