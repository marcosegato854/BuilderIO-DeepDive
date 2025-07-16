import React from 'react';
import { Box } from '@mui/material';

interface ImageBoxProps {
  src: string;
  alt?: string;
  maxWidth?: number | string; // Optional override
  borderRadius?: number | string; // Optional override
  sx?: object; // Custom styles if needed
}

const ImageBox: React.FC<ImageBoxProps> = ({
  src,
  alt = '',
  maxWidth = 320,
  borderRadius = 6, // 24px in theme units (assuming theme.spacing(1) = 4px)
  sx = {},
}) => (
  <Box
    sx={{
      width: '100%',
      maxWidth,
      aspectRatio: '5 / 6',
      background: '#D8D8D8',
      borderRadius,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...sx,
    }}
  >
    <Box
      component='img'
      src={src}
      alt={alt}
      sx={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: src ? 'block' : 'none',
      }}
    />
  </Box>
);

export default ImageBox;
