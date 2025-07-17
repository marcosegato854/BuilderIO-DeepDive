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
    background: {
      default: "#3B444F",
    },
  },
  typography: {
    fontFamily:
      '"Roboto", "Hexagon Akkurat", -apple-system, BlinkMacSystemFont, sans-serif',
    h3: {
      fontSize: "41px",
      fontWeight: 400,
      lineHeight: "47px",
      color: "#BCBEC5",
    },
    h4: {
      fontSize: "26px",
      fontWeight: 500,
      color: "#BCBEC5",
    },
    h5: {
      fontSize: "26px",
      fontWeight: 400,
      lineHeight: "38px",
      color: "#BCBEC5",
    },
    body1: {
      fontSize: "20px",
      fontWeight: 500,
      color: "#FFF",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#3B444F",
          padding: "60px",
          fontFamily: 'Roboto, "Hexagon Akkurat", -apple-system, sans-serif',
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "339px",
            alignItems: "flex-start",
            maxWidth: "1257px",
            margin: "0 auto",
          }}
        >
          {/* Left Section - User Profile */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "19px",
              width: "335px",
            }}
          >
            {/* Image Box */}
            <ImageBox
              src=""
              alt="Profile picture"
              sx={{
                width: "250px",
                height: "276px",
                backgroundColor: "#D9E9BE",
                borderRadius: "30px",
                aspectRatio: "auto",
                marginBottom: "39px",
              }}
            />

            {/* User Info */}
            <UserInfo
              name="Nome e Cognome"
              birthDate="Data di nascita"
              sx={{
                alignSelf: "stretch",
                "& .MuiTypography-h3": {
                  fontSize: "41px",
                  fontWeight: 400,
                  lineHeight: "47px",
                  color: "#BCBEC5",
                  marginBottom: "19px",
                },
                "& .MuiTypography-h5": {
                  fontSize: "26px",
                  fontWeight: 400,
                  lineHeight: "38px",
                  color: "#BCBEC5",
                },
              }}
            />

            {/* Logout Button */}
            <CustomButton
              label="Logout"
              size="small"
              variant="outlined"
              sx={{
                width: "120px",
                height: "28px",
                borderRadius: "8px",
                border: "1px solid #FFF",
                color: "#FFF",
                borderColor: "#FFF",
                fontSize: "16px",
                fontWeight: 400,
                marginTop: "50px",
                "&:hover": {
                  borderColor: "#FFF",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            />
          </Box>

          {/* Right Section - Bio and Preferences */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "21px",
              width: "570px",
            }}
          >
            {/* Bio Section */}
            <Box
              sx={{
                width: "570px",
                height: "236px",
                padding: "18px 22px",
                backgroundColor: "#343A43",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                gap: "1px",
              }}
            >
              {/* Bio Header */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  width: "30px",
                  height: "27px",
                  marginBottom: "52px",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "normal",
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
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "normal",
                  width: "526px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                et hendrerit nulla. Fusce vel leo sit amet massa cursus
                dignissim. Integer imperdiet libero ac dictum venenatis.
              </Typography>
            </Box>

            {/* Preferences and Edit Button Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "570px",
              }}
            >
              {/* Preferences */}
              <PreferencesList
                label="Preferenze"
                preferences={["preferenza 1", "preferenza 2", "preferenza 3"]}
                sx={{
                  width: "167px",
                }}
                labelProps={{
                  sx: {
                    fontSize: "26px",
                    fontWeight: 500,
                    color: "#BCBEC5",
                    marginBottom: "34px",
                  },
                }}
                listProps={{
                  sx: {
                    listStyleType: "disc",
                    paddingLeft: 0,
                    "& .MuiListItem-root": {
                      display: "list-item",
                      paddingLeft: 0,
                      paddingTop: 0,
                      paddingBottom: "9px",
                      "&::marker": {
                        color: "#BCBEC5",
                      },
                    },
                    "& .MuiTypography-h5": {
                      fontSize: "24px",
                      fontWeight: 300,
                      color: "#BCBEC5",
                      lineHeight: "normal",
                    },
                  },
                }}
              />

              {/* Edit Button */}
              <CustomButton
                label="Modifica"
                size="big"
                variant="outlined"
                sx={{
                  width: "197px",
                  height: "40px",
                  borderRadius: "8px",
                  border: "1px solid #FFF",
                  color: "#FFF",
                  borderColor: "#FFF",
                  fontSize: "16px",
                  fontWeight: 400,
                  alignSelf: "flex-end",
                  marginTop: "52px",
                  "&:hover": {
                    borderColor: "#FFF",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
