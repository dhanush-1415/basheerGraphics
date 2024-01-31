import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/About';
import Account from './pages/Account';
import Header from '../src/components/Header/Header';
import Footer from './components/Footer/Footer';
import SignIn from './components/Auth/SignIn';
import Login from './components/Auth/Login';
import { AuthProvider } from './components/Auth/AuthContet';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rt" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/account/register" element={<SignIn/>} />
          <Route path="/account/login" element={<Login/>} />
          <Route path="/my-account/:activepage" element={<Account />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
        {/* <Footer /> */}
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
