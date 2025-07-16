import React from 'react';
import { Typography, Box } from '@mui/material';

interface UserInfoProps {
  name: string;
  birthDate: string;
  // Optional: for further style customization
  sx?: object;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, birthDate, sx = {} }) => (
  <Box sx={{ textAlign: 'left', ...sx }}>
    <Typography variant='h3' sx={{ fontWeight: 400, mb: 1 }}>
      {name}
    </Typography>
    <Typography variant='h5' sx={{ fontWeight: 300 }}>
      {birthDate}
    </Typography>
  </Box>
);

export default UserInfo;
