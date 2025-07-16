import React from 'react';
import { Button, ButtonProps } from '@mui/material';

type SizeType = 'small' | 'medium' | 'large';

interface CustomButtonProps
  extends Omit<ButtonProps, 'size' | 'variant' | 'color'> {
  label: string;
  size?: SizeType | 'big'; // 'big' mapped to 'large'
  variant?: 'contained' | 'outlined' | 'text';
  color?: ButtonProps['color'] | string; // string allows custom colors
}

const sizeMap: Record<string, SizeType> = {
  small: 'small',
  default: 'medium',
  medium: 'medium',
  big: 'large',
  large: 'large',
};

// You can adjust the styling as desired
const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  size = 'default',
  variant = 'outlined',
  color = 'primary',
  sx,
  ...rest
}) => (
  <Button
    variant={variant}
    size={sizeMap[size] || 'medium'}
    sx={{
      borderRadius: 3,
      fontSize: size === 'big' ? 24 : size === 'small' ? 14 : 18,
      borderWidth: 2,
      ...(typeof color === 'string' &&
      ![
        'primary',
        'secondary',
        'inherit',
        'error',
        'info',
        'success',
        'warning',
      ].includes(color)
        ? { borderColor: color, color }
        : {}),
      ...sx,
    }}
    color={
      typeof color === 'string' &&
      [
        'primary',
        'secondary',
        'inherit',
        'error',
        'info',
        'success',
        'warning',
      ].includes(color)
        ? (color as ButtonProps['color'])
        : undefined
    }
    {...rest}
  >
    {label}
  </Button>
);

export default CustomButton;
