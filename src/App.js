import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import Home from "./component/home";
import Academy from "./component/academy";
import BootCamp from "./component/bootcamp";
import BugBountyHunter from "./component/bug_bounty_hunter";
import PentestingProfessional from "./component/pentesting_professional";
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
import PentestServ from './component/PentestServ';
import LoginPage from './pages/Login';
import UploadBlogs from './pages/UploadBlog';
import BlogsPage from './pages/Blogs';
import InstagramBlogs from './pages/InstaBlog';
import BlogDescription from './pages/BlogDescription';

function App() {
  // State to keep track of authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Helmet>
        <title>Nalaemton Infotech</title>
        <meta name="description" content="Cybersecurity - 360" />
        <meta name="keywords" content="Cybersecurity, InfoSec, Cyber Defense" />
        <meta name="author" content="Nalaemton Infotech" />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insta" element={<InstagramBlogs />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/bootcamp" element={<BootCamp />} />
          <Route path="/bug_bounty_hunter" element={<BugBountyHunter />} />
          <Route path="/pentesting_professional" element={<PentestingProfessional />} />
          {/* Protected route, only accessible if isLoggedIn is true */}
          <Route
            path="/uploadBlogs"
            element={isLoggedIn ? <UploadBlogs /> : <Navigate to="/login" />}
          />
          <Route path='/login' element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/blog/:title" element={<BlogDescription />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/pentestServ" element={<PentestServ />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
