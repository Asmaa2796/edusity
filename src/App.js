import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PricingPage from "./components/PricingPage";
import ScrollTop from "./components/ScrollTop";
import ContactUsPage from "./components/ContactUsPage";
import ProgramPage from "./components/ProgramPage";
import AboutUsPage from "./components/AboutUsPage";
import CourseDetails from "./components/CourseDetails";
import AllCourses from "./components/AllCourses";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutUsPage />} />
          <Route path="/Pricing" element={<PricingPage />} />
          <Route path="/ContactUs" element={<ContactUsPage />} />
          <Route path="/Program" element={<ProgramPage />} />
          <Route path="/details/:id/:title" element={<CourseDetails />} />
          <Route path="/Courses" element={<AllCourses />} />
          <Route path="/AllCourses" element={<AllCourses />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>

        <ScrollTop />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
