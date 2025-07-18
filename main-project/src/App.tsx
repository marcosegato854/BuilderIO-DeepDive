import React from 'react';
import { useAuthStore } from './store/authStore';
import LoginPage from './modules/LoginPage/LoginPage';
// Swap with your real main page once built:
import Profile from './modules/Profile/Profile';

const App: React.FC = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return isLoggedIn ? <Profile /> : <LoginPage />;
};

export default App;
