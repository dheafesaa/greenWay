import React, {useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { asyncPreloadProcess } from './states/isPreload/action';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Footer from './components/atoms/Footer';
import Navbar from './components/organisms/Navbar';
import ArticlePage from './pages/ArticlePage';
import AboutUsPage from './pages/AboutUsPage';
import DestinationPage from './pages/DestinationPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import CampaignPage from './pages/CampaignPage';
import CampaignDetailPage from './pages/CampaignDetailPage';
import HomePage from './pages/HomePage';
import DiscussionPage from './pages/DiscussionPage';
import AddDiscussionPage from './pages/AddDiscussionPage';
import DetailDiscussionPage from './pages/DetailDiscussionPage';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  const isLoginOrRegisterPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="app">
       <header>
        {!isLoginOrRegisterPage && <Navbar authUser={authUser} signOut={onSignOut} />}
      </header>
      <main>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<HomePage />} />
          <Route path="/list-article" element={<ArticlePage />} />
          <Route path="/list-destination" element={<DestinationPage />} />
          <Route path="/detail-destination/:id" element={<DestinationDetailPage />} />
          <Route path="/list-campaign" element={<CampaignPage />} />
          <Route path="/detail-campaign/:id" element={<CampaignDetailPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/thread/list" element={<DiscussionPage />} />
          <Route path="/thread/add" element={<AddDiscussionPage />} />
          <Route path="/thread/detail/:id" element={<DetailDiscussionPage />} />
        </Routes>
      </main>
      <footer>
        {!isLoginOrRegisterPage && <Footer />}
      </footer>
    </div>
  );
}

export default App;
