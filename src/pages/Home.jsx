import HeroSection from '../components/HeroSection'; 
import HowItWorks from '../components/HowItWorks';
import EnquiryForm from '../components/EnquiryForm';
import SearchBar from '../components/SearchBar';
import FeaturedProperties from '../components/FeaturedProperties';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SearchBar />
      <FeaturedProperties />  
      <HowItWorks />
      <EnquiryForm />
    </div>
  );
};

export default Home;
