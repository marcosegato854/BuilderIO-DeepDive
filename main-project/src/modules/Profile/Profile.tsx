import React from "react";
import { Box } from "@mui/material";
import {
  UserInfo,
  CustomButton,
  ImageBox,
  PreferencesList,
  BioCard,
} from "../../components";

const Profile: React.FC = () => {
  return (
    
      {/* Left Sidebar */}
      <Box
        sx={{
          width: { xs: "100%", md: "439px" },
          height: { xs: "auto", md: "582px" },
          background: "#343A43",
          borderRadius: "8px",
          padding: "46px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "19px",
          flexShrink: 0,
        }}
      >
        {/* Profile Image */}
        <Box
          sx={{
            width: "250px",
            height: "276px",
            background: "#D9E9BE",
            borderRadius: "30px",
            flexShrink: 0,
            "@media (max-width: 768px)": {
              width: "200px",
              height: "220px",
            },
          }}
        />

        {/* User Information */}
        <Box sx={{ width: "100%", marginTop: "19px" }}>
          <UserInfo
            name="Nome e Cognome"
            birthDate="Data di nascita"
            sx={{
              textAlign: "left",
              "& .MuiTypography-h3": {
                color: "#BCBEC5",
                fontFamily:
                  "Hexagon Akkurat, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: { xs: "32px", md: "41px" },
                fontWeight: 400,
                lineHeight: "47px",
                letterSpacing: "0px",
                marginBottom: "19px",
              },
              "& .MuiTypography-h5": {
                color: "#BCBEC5",
                fontFamily:
                  "Hexagon Akkurat, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: { xs: "20px", md: "26px" },
                fontWeight: 400,
                lineHeight: "38px",
                letterSpacing: "0px",
              },
            }}
          />
        </Box>

        {/* Logout Button */}
        <Box sx={{ marginTop: "auto", alignSelf: "flex-start" }}>
          <CustomButton
            label="Logout"
            variant="outlined"
            size="small"
            sx={{
              color: "#FFF",
              borderColor: "#FFF",
              borderRadius: "8px",
              fontSize: "16px",
              fontFamily:
                "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 400,
              width: "120px",
              height: "52px",
              textTransform: "none",
              "&:hover": {
                borderColor: "#FFF",
                background: "rgba(255, 255, 255, 0.08)",
              },
            }}
          />
        </Box>
      </Box>

      {/* Right Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          position: "relative",
        }}
      >
        {/* Profile Header */}
        <Box
          sx={{
            color: "#BCBEC5",
            fontFamily: "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
            fontSize: { xs: "24px", md: "32px" },
            fontWeight: 500,
            lineHeight: "normal",
            marginBottom: "39px",
          }}
        >
          Profilo
        </Box>

        {/* Bio Card */}
        <BioCard
          label="Bio"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et hendrerit nulla. Fusce vel leo sit amet massa cursus dignissim. Integer imperdiet libero ac dictum venenatis."
          sx={{
            width: { xs: "100%", md: "570px" },
            height: { xs: "auto", md: "236px" },
            background: "#343A43",
            borderRadius: "8px",
            padding: "18px 22px",
            "& .MuiTypography-h5": {
              color: "#FFF",
              fontFamily:
                "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: "24px",
              fontWeight: 500,
              lineHeight: "normal",
              borderBottom: "2px solid #E00C0C",
              marginBottom: "54px",
              paddingBottom: "4px",
              display: "inline-block",
              width: "auto",
            },
            "& .MuiTypography-body1": {
              color: "#BCBEC5",
              fontFamily:
                "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "normal",
              marginTop: "0",
            },
          }}
        />

        {/* Preferences Section */}
        <PreferencesList
          label="Preferenze"
          preferences={["preferenza 1", "preferenza 2", "preferenza 3"]}
          sx={{
            width: { xs: "100%", md: "167px" },
            height: "166px",
          }}
          labelProps={{
            sx: {
              color: "#BCBEC5",
              fontFamily:
                "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: { xs: "20px", md: "26px" },
              fontWeight: 500,
              lineHeight: "normal",
              marginBottom: "34px",
            },
          }}
          listProps={{
            sx: {
              listStyleType: "disc",
              paddingLeft: "20px",
              "& .MuiListItem-root": {
                display: "list-item",
                paddingLeft: 0,
                paddingTop: 0,
                paddingBottom: "9px",
              },
              "& .MuiTypography-h5": {
                color: "#BCBEC5",
                fontFamily:
                  "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: { xs: "18px", md: "24px" },
                fontWeight: 300,
                lineHeight: "normal",
              },
            },
          }}
        />

        {/* Modifica Button */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "20px", md: "-20px" },
            right: { xs: "0", md: "121px" },
            "@media (max-width: 768px)": {
              position: "relative",
              alignSelf: "flex-end",
              bottom: "auto",
              right: "auto",
            },
          }}
        >
          <CustomButton
            label="Modifica"
            variant="outlined"
            size="big"
            sx={{
              color: "#FFF",
              borderColor: "#FFF",
              borderRadius: "8px",
              fontSize: "16px",
              fontFamily:
                "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 400,
              width: "197px",
              height: "64px",
              textTransform: "none",
              "&:hover": {
                borderColor: "#FFF",
                background: "rgba(255, 255, 255, 0.08)",
              },
            }}
          />
        </Box>
      </Box>
   // </Box>
  );
};

export default Profile;
