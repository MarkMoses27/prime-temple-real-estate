import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar'; // navbar
import Footer from './components/Footer';
import Contact from './components/Contact';
import Blog from './components/Blog';
import BlogDetails from './components/BlogDetails';
import PropertyListings from './components/PropertyListings';
import Consulting from './components/Consulting';
import Investments from './components/Investments';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/properties" element={<PropertyListings />} />
        <Route path='/investments' element={<Investments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
