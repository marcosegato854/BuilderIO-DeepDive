import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useAuthStore, rehydrateAuthStore } from './store/authStore';
import LoginPage from './modules/LoginPage/LoginPage';
import Profile from './modules/Profile/Profile';
import users from './data/users.json'; // <-- importa qui

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0066cc' },
    secondary: { main: '#6c757d' },
    background: { default: '#f8f9fa', paper: '#ffffff' },
    text: { primary: '#213547', secondary: '#495057' },
  },
});

const App: React.FC = () => {
  // Reidrata stato di login al mount!
  useEffect(() => {
    rehydrateAuthStore(users as any); // tipizza se vuoi
  }, []);

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {isLoggedIn ? <Profile /> : <LoginPage />}
    </ThemeProvider>
  );
};

export default App;
