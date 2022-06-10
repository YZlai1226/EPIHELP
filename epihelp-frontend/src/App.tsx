import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
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
import Legal from './pages/legal';
import SearchResults from './pages/searchresults';
import CGU from './pages/cgu';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased">
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/password-reset/:token" element={<PasswordReset />} />
            <Route path="/main" element={<Main />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/category/:idURL" element={<Category />} />
            <Route path="/post/:post" element={<Post />} />
            <Route path="/newpost/:categoryId" element={<NewPost />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/livechat" element={<LiveChat />} />
            <Route path="/searchresults" element={<SearchResults />} />
            <Route path="/cgu" element={<CGU />} />
            <Route path="*" element={<NotFoundPage />}
            />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
      <Footer />
    </div>
  );
}

export default App;
