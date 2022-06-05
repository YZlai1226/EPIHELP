import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Categories from './pages/categories';
import Category from './pages/category';
import Post from './pages/post';
import Profile from './pages/profile';
import LiveChat from './pages/livechat';
import Admin from './pages/admin';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import ForgotPassword from './pages/forgot-password';
import PasswordReset from './pages/password-reset';
import NotFoundPage from './pages/404';
import NewPost from './pages/newpost';

function App() {
  return (
    <div className="antialiased">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:token" element={<PasswordReset />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/post/:post" element={<Post />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/livechat" element={<LiveChat />} />
        <Route path="*" element={<NotFoundPage />}
        
        />
      </Routes>
    </div>
  );
}

export default App;
