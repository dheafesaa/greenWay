import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncUnsetAuthUser } from './states/authUser/action';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/organisms/Navbar';

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
        </Routes>
      </main>
    </div>
  );
}

export default App;
