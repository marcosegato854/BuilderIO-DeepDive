import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import {
  UserInfo,
  CustomButton,
  ImageBox,
  PreferencesList,
  BioCard,
} from "../../components";
import { useAuthStore } from "../../store/authStore";
const Profile: React.FC = () => {
  const { user, logout, setBioAndPreferenze } = useAuthStore();
  const [editing, setEditing] = useState(false);

  const [bio, setBio] = useState(user?.bio || "");
  const [prefs, setPrefs] = useState<[string, string, string]>(
    user?.preferenze || ["", "", ""],
  );
  // Start editing: snapshot current user values
  const startEdit = () => {
    setBio(user?.bio || "");
    setPrefs(user?.preferenze || ["", "", ""]);
    setEditing(true);
  };
  // Save: apply to store
  const save = () => {
    setBioAndPreferenze(bio, prefs);
    setEditing(false);
  };
  // Cancel: leave values
  const cancel = () => setEditing(false);
  if (!user) return null;

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "#f8f9fa",
        display: "flex",
        gap: "135px",
        padding: { xs: "20px", md: "102px" },
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
          background: "#ffffff",
          borderRadius: "8px",
          padding: "46px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "19px",
          flexShrink: 0,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e0e0e0",
        }}
      >
        {/* Profile Image */}
        <ImageBox
          src={user.photo}
          alt={`${user.nome} ${user.cognome}`}
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
            name={`${user.nome} ${user.cognome}`}
            birthDate={user.dataNascita}
            sx={{
              textAlign: "left",
              "& .MuiTypography-h3": {
                color: "#495057",
                fontFamily:
                  "Hexagon Akkurat, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: { xs: "32px", md: "41px" },
                fontWeight: 400,
                lineHeight: "47px",
                letterSpacing: "0px",
                marginBottom: "19px",
              },
              "& .MuiTypography-h5": {
                color: "#495057",
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
            onClick={logout}
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
            label={editing ? "Salva" : "Modifica"}
            variant="outlined"
            size="medium"
            color="info"
            onClick={editing ? save : startEdit}
            sx={{
              borderRadius: "8px",
              fontSize: "16px",
              fontFamily:
                "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 400,
              textTransform: "none",
            }}
          />
          {editing && (
            <CustomButton
              label="Annulla"
              size="medium"
              onClick={cancel}
              color="inherit"
              sx={{
                borderRadius: "8px",
                fontSize: "16px",
                fontFamily:
                  "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
                fontWeight: 400,
                textTransform: "none",
              }}
            />
          )}
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
            color: "#495057",
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
        {editing ? (
          <Box>
            <TextField
              label="Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              multiline
              fullWidth
              minRows={3}
              sx={{ mb: 2, bgcolor: "#ffffff", color: "#213547" }}
            />
          </Box>
        ) : (
          <BioCard
            label="Bio"
            text={user.bio}
            sx={{
              width: { xs: "100%", md: "570px" },
              height: { xs: "auto", md: "236px" },
              background: "#ffffff",
              borderRadius: "8px",
              padding: "18px 22px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              border: "1px solid #e0e0e0",
              "& .MuiTypography-h5": {
                color: "#213547",
                fontFamily:
                  "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "normal",
                borderBottom: "2px solid #0066cc",
                marginBottom: "54px",
                paddingBottom: "4px",
                display: "inline-block",
                width: "auto",
              },
              "& .MuiTypography-body1": {
                color: "#495057",
                fontFamily:
                  "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "normal",
                marginTop: "0",
              },
            }}
          />
        )}

        {/* Preferences Section */}
        {editing ? (
          <Box>
            {[0, 1, 2].map((i) => (
              <TextField
                key={i}
                label={`Preferenza ${i + 1}`}
                value={prefs[i] || ""}
                onChange={(e) => {
                  const cp = [...prefs] as [string, string, string];
                  cp[i] = e.target.value;
                  setPrefs(cp);
                }}
                sx={{ mb: 1, bgcolor: "#ffffff", color: "#213547", width: 240 }}
              />
            ))}
          </Box>
        ) : (
          <PreferencesList
            label="Preferenze"
            preferences={user.preferenze}
            sx={{
              width: { xs: "100%", md: "167px" },
              height: "166px",
            }}
            labelProps={{
              sx: {
                color: "#495057",
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
                  color: "#495057",
                  fontFamily:
                    "Roboto, -apple-system, Roboto, Helvetica, sans-serif",
                  fontSize: { xs: "18px", md: "24px" },
                  fontWeight: 300,
                  lineHeight: "normal",
                },
              },
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default Profile;
