import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header.jsx";
import HackathonPopup from "./components/hackathonPopUp.jsx";
import { Home } from "./pages/Home.jsx";
import { Wie } from './pages/Wie.jsx';
import { Council } from "./pages/Council.jsx";
import PastEventsPage from "./pages/Events/Past.jsx";
import UpcomingEventsPage from "./pages/Events/Upcoming.jsx";
import { Developer } from "./pages/Developers.jsx";
import Contact from "./pages/Contact.jsx";
import { Register } from "./pages/Register.jsx";
import BlogPage from "./pages/Join.jsx";
import Footer from './components/Footer.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/societies/women-in-engineering' element={<Wie />} />
        <Route path='/council' element={<Council />} />
        <Route path='/events/past' element={<PastEventsPage />} />
        <Route path='/events/upcoming' element={<UpcomingEventsPage />} />
        <Route path='/developers' element={<Developer />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/blogs' element={<BlogPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
