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
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "#303030",
        display: "flex",
        gap: "135px",
        padding: { xs: "20px", md: "102px 102px 102px 102px" },
        boxSizing: "border-box",
        overflow: "hidden",
        "@media (max-width: 768px)": {
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
          height: "auto",
          overflowY: "auto",
        },
      }}
    >
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
        <ImageBox
          src=""
          alt="Profile image"
          maxWidth="250px"
          borderRadius="30px"
          sx={{
            width: "250px",
            height: "276px",
            background: "#D9E9BE",
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

        {/* Buttons */}
        <Box
          sx={{
            marginTop: "auto",
            alignSelf: "flex-start",
            display: "flex",
            gap: "12px",
          }}
        >
          <CustomButton
            label="Logout"
            variant="outlined"
            size="medium"
            color="warning"
            sx={{
              borderRadius: "8px",
              fontSize: "16px",
              fontFamily:
                "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 400,
              textTransform: "none",
            }}
          />
          <CustomButton
            label="Modifica"
            variant="outlined"
            size="medium"
            color="info"
            sx={{
              borderRadius: "8px",
              fontSize: "16px",
              fontFamily:
                "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 400,
              textTransform: "none",
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
    </Box>
  );
};

export default Profile;
