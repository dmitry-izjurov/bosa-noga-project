import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import globalDataObjs from '../utils/globalDataObjs';
import HomePage from './homePage';
import Page404 from './page404';
import Header from './header';
import HeaderLogo from '../img/header-logo.png';
import Banner from '../img/banner.jpg';
import Catalog from './catalog';
import Contacts from './contacts';
import About from './about';
import Cart from './cart';
import Footer from './footer';
import ItemProductCard from './itemProductCard';

function MainPage() {
    return (
        <div className="page">
            <Router>
                <Header headerLogo={HeaderLogo} banner={Banner} />
                <Routes>
                    <Route path="/" element={<HomePage globalDataObjs={globalDataObjs} />} />
                    <Route path="/catalog" element={<Catalog globalDataObjs={globalDataObjs} />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path='*' element={<Page404 />}/>
                    <Route path="/products/:id" element={<ItemProductCard globalDataObjs={globalDataObjs} />} />
                </Routes>
                <Footer />
            </Router>
        </div>
  );
}

export default MainPage;