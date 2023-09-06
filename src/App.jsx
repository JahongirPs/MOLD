import {Routes, Route,useLocation,} from "react-router-dom";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Partner from "./routes/partner/Partner";
import Home from "./routes/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import SubNav from "./components/subnav/SubNav";
import ProductDetails from "./routes/productdetails/ProductDetails";
import React from "react";
import {useEffect,useState} from "react";
import ProductCatalog from './components/product-catalog/ProductCatalog';


function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  const location = useLocation();

  useEffect(() => {
    console.log("Pathname is", location.pathname);
    const pathsToHideSidebar = ['/partner', '/about', '/contact', '/productdetails','/product-catalog'];

    if (pathsToHideSidebar.some(path => location.pathname.toLowerCase().includes(path.toLowerCase()))) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [location.pathname]);


  return (
    <>
      <SubNav/>
      <Navbar showSidebar={showSidebar} />
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/about" element={<About/>} /> 
        <Route path="/contact" element={<Contact/>} />
        <Route path="/partner" element={<Partner/>} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/maincategory/:categoryId" element={ProductCatalog} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;