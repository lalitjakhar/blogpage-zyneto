import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./component/homepage/HomePage";
import Navbar from "./component/Navbar";
import BlogPage from "./component/blogpage/BlogPage";
import AboutUs from "./component/aboutus/AboutUs";
import Footer from "./component/Footer";
import ContactUs from "./component/contactus/ContactUs";

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
             <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
