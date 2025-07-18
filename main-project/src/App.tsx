import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useAuthStore } from "./store/authStore";
import LoginPage from "./modules/LoginPage/LoginPage";
// Swap with your real main page once built:
import Profile from "./modules/Profile/Profile";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0066cc",
    },
    secondary: {
      main: "#6c757d",
    },
    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#213547",
      secondary: "#495057",
    },
  },
});

const App: React.FC = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {isLoggedIn ? <Profile /> : <LoginPage />}
    </ThemeProvider>
  );
};

export default App;
