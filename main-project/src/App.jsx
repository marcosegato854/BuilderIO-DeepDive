import { Box, Typography, createTheme, ThemeProvider } from "@mui/material";
import {
  UserInfo,
  CustomButton,
  ImageBox,
  PreferencesList,
} from "./components";
import "./App.css";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily:
      '"Roboto", "Hexagon Akkurat", -apple-system, BlinkMacSystemFont, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#3B444F",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Profile Header */}
        <Typography
          sx={{
            position: "absolute",
            left: "687px",
            top: "123px",
            color: "#FFF",
            fontSize: "24px",
            fontWeight: 500,
            fontFamily: "Roboto",
          }}
        >
          Profilo
        </Typography>

        {/* Green Image Box */}
        <Box
          sx={{
            position: "absolute",
            left: "148px",
            top: "245px",
            width: "250px",
            height: "276px",
            backgroundColor: "#D9E9BE",
            borderRadius: "30px",
          }}
        />

        {/* User Info */}
        <Box
          sx={{
            position: "absolute",
            left: "148px",
            top: "540px",
            width: "335px",
          }}
        >
          <Typography
            sx={{
              color: "#BCBEC5",
              fontFamily: "Hexagon Akkurat",
              fontSize: "41px",
              fontWeight: 400,
              lineHeight: "47px",
              marginBottom: "19px",
            }}
          >
            Nome e Cognome
          </Typography>
          <Typography
            sx={{
              color: "#BCBEC5",
              fontFamily: "Hexagon Akkurat",
              fontSize: "26px",
              fontWeight: 400,
              lineHeight: "38px",
            }}
          >
            Data di nascita
          </Typography>
        </Box>

        {/* Logout Button */}
        <Box
          sx={{
            position: "absolute",
            left: "148px",
            top: "693px",
            width: "120px",
            height: "28px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #FFF",
            borderRadius: "8px",
            padding: "12px",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            Logout
          </Typography>
        </Box>

        {/* Bio Section */}
        <Box
          sx={{
            position: "absolute",
            left: "687px",
            top: "285px",
            width: "570px",
            height: "236px",
            backgroundColor: "#343A43",
            borderRadius: "6px",
            padding: "18px 22px",
          }}
        >
          {/* Bio Title with underline */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "4px",
              marginBottom: "52px",
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "Roboto",
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              Bio
            </Typography>
            <Box
              sx={{
                width: "30px",
                height: "2px",
                backgroundColor: "#E00C0C",
              }}
            />
          </Box>

          {/* Bio Content */}
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Roboto",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "normal",
              width: "526px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
            hendrerit nulla. Fusce vel leo sit amet massa cursus dignissim.
            Integer imperdiet libero ac dictum venenatis.
          </Typography>
        </Box>

        {/* Preferences Section */}
        <Box
          sx={{
            position: "absolute",
            left: "675px",
            top: "522px",
            width: "167px",
            height: "166px",
          }}
        >
          <Typography
            sx={{
              color: "#BCBEC5",
              fontFamily: "Roboto",
              fontSize: "26px",
              fontWeight: 500,
              marginBottom: "34px",
            }}
          >
            Preferenze
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "9px" }}>
            <Typography
              sx={{
                color: "#BCBEC5",
                fontFamily: "Roboto",
                fontSize: "24px",
                fontWeight: 300,
                position: "relative",
                paddingLeft: "20px",
                "&::before": {
                  content: '"•"',
                  position: "absolute",
                  left: "0",
                  color: "#BCBEC5",
                },
              }}
            >
              preferenza 1
            </Typography>
            <Typography
              sx={{
                color: "#BCBEC5",
                fontFamily: "Roboto",
                fontSize: "24px",
                fontWeight: 300,
                position: "relative",
                paddingLeft: "20px",
                "&::before": {
                  content: '"•"',
                  position: "absolute",
                  left: "0",
                  color: "#BCBEC5",
                },
              }}
            >
              preferenza 2
            </Typography>
            <Typography
              sx={{
                color: "#BCBEC5",
                fontFamily: "Roboto",
                fontSize: "24px",
                fontWeight: 300,
                position: "relative",
                paddingLeft: "20px",
                "&::before": {
                  content: '"•"',
                  position: "absolute",
                  left: "0",
                  color: "#BCBEC5",
                },
              }}
            >
              preferenza 3
            </Typography>
          </Box>
        </Box>

        {/* Modifica Button */}
        <Box
          sx={{
            position: "absolute",
            left: "1048px",
            top: "740px",
            width: "197px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #FFF",
            borderRadius: "8px",
            padding: "12px",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontFamily: "Roboto",
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            Modifica
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
