// src/App.jsx

import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';


const App = () => {
  return (
    <Router>
        <Navbar />
            <HeroSection />
    </Router>
  );
};

export default App;
