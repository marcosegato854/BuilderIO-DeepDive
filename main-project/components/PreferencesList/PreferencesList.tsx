import React from 'react';
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListProps,
  TypographyProps,
} from '@mui/material';

interface PreferencesListProps {
  label: string;
  preferences: [string, string, string];
  sx?: object;
  labelProps?: TypographyProps;
  listProps?: ListProps;
}

const PreferencesList: React.FC<PreferencesListProps> = ({
  label,
  preferences,
  sx = {},
  labelProps = {},
  listProps = {},
}) => {
  const displayed = Array.from({ length: 3 }, (_, i) => preferences[i] || '');

  return (
    <Box sx={{ ...sx }}>
      <Typography variant='h4' sx={{ fontWeight: 700, mb: 2 }} {...labelProps}>
        {label}
      </Typography>
      <List
        component='ul'
        disablePadding
        sx={{
          listStyleType: 'disc',
          pl: 4,
          ...listProps?.sx,
        }}
        {...listProps}
      >
        {displayed.map((pref, idx) => (
          <ListItem
            key={idx}
            component='li'
            sx={{
              display: 'list-item',
              pl: 0,
            }}
          >
            <ListItemText
              primary={
                <Typography variant='h5' sx={{ fontWeight: 300 }}>
                  {pref}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PreferencesList;
