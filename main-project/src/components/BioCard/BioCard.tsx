import React from 'react';
import { Box, Typography } from '@mui/material';

interface BioCardProps {
  label: string;
  text: string;
}

const BioCard: React.FC<BioCardProps> = ({ label, text }) => (
  <Box
    sx={{
      background: '#393E46',
      borderRadius: '12px',
      padding: '24px 28px',
      color: '#fff',
      maxWidth: '100%',
      boxShadow: 'none',
      border: '4px solid transparent',
      minHeight: '180px',
      fontFamily: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    }}
  >
    <Typography
      variant='h5'
      sx={{
        fontWeight: 500,
        color: '#fff',
        marginBottom: '4px',
        display: 'inline-block',
        borderBottom: '3px solid #e74c3c',
        paddingBottom: '2px',
        textAlign: 'left',
      }}
    >
      {label}
    </Typography>
    <Typography
      variant='body1'
      sx={{
        color: '#BDC3C7',
        fontSize: '1.25rem',
        fontWeight: 400,
        marginTop: '20px',
        lineHeight: 1.4,
        whiteSpace: 'pre-line',
        textAlign: 'left',
      }}
    >
      {text}
    </Typography>
  </Box>
);

export default BioCard;
