import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    
    <div>
      <Header />
      <Routes>
        <Route path='/HeroSection' element= {<HeroSection/>} />
      </Routes>
      <Footer/>
    </div>
  
  );
}

export default App;
