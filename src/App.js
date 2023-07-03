import {Footer, Navbar} from "./components";
import {Routes, Route} from "react-router-dom";
import {Home, About, Services, Portfolio, Blog, Contact, NotFound} from "./pages";

function App() {
  return (
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
  );
}

export default App;
