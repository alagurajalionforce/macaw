import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Products from './Pages/Products';
import Home from './Pages/Home';
import Colors from './Pages/Colors';
import Footer from './Components/Footer';
import Header  from './Components/Header';
import Blogs from './Pages/Blogs';
import Inspiration from './Pages/Inspiration';
import AboutUs from './Pages/About';
import ContactUs from './Pages/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route element={<Header />}>
     <Route exact path="/" element={<Home />} />
     <Route exact path="/Products" element={<Products />} />
      <Route exact path="/Colors" element={<Colors />} />
      <Route exact path="/Blogs" element={<Blogs />} />
      <Route exact path="/Inspiration" element={<Inspiration />} />
      <Route exact path="/About" element={<AboutUs  />} />
      <Route exact path="/Contact" element={<ContactUs />} />
     </Route>
     </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
