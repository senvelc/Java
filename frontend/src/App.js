import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingButtons from './components/FloatingButtons';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import AboutHim from './pages/AboutHim';
import NewsEvents from './pages/NewsEvents';
import StockImages from './pages/StockImages';
import Manifesto from './pages/Manifesto';
import PressRoom from './pages/PressRoom';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-him" element={<AboutHim />} />
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/stock-images" element={<StockImages />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/press-room" element={<PressRoom />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
        <CookieBanner />
      </BrowserRouter>
    </div>
  );
}

export default App;
