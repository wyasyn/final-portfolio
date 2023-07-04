import React, {useState, useEffect} from "react";
import {Footer, Navbar} from "./components";
import {Routes, Route} from "react-router-dom";
import {Home, About, Services, Portfolio, Blog, Contact, NotFound} from "./pages";
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [loading, setLoading] =useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(()=> {
      setLoading(false);
    },2000)
  }, [])

  return (
 <>
  {
    loading ?
  
    <div className="loader">
      <div className="loader-content">
      <RingLoader
        color={"#f00946"}
        loading={loading}
        size={150}
        />
        <h1>Yasin Walum</h1>
      </div>
    </div>
    :
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/about" element={<About /> } />
      <Route path="/services" element={<Services /> } />
      <Route path="/portfolio" element={<Portfolio /> } />
      <Route path="/blog" element={<Blog /> } />
      <Route path="/contact" element={<Contact /> } />
      <Route path="*" element={<NotFound /> } />
    </Routes>
    <Footer />
  </div>

  }
 </>
  );
}

export default App;
