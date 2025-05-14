import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Service from './Components/Service';
import Search from './Components/Search';
import CategoryRecipes from './Components/CategoryRecipes';
import Footer from './Components/Footer';
import Meal from './Components/Meal';
import Menu from './Components/Menu';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/search/:searchId" element={<Search />} />
        <Route path="/category/:name" element={<CategoryRecipes />} />
        <Route path='/meal' element={<Meal/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
