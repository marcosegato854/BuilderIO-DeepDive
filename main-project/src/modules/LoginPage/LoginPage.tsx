import React, { useState } from 'react';
// Adjust import path to your users.json location:
import users from '../../data/users.json';
import { useAuthStore } from '../../store/authStore';
import { TextField, Button, Box } from '@mui/material';

const LoginPage: React.FC = () => {
  const login = useAuthStore((state) => state.login);
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const foundAny = users.find((u) => u.username === username);
    if (foundAny) {
      // Ensure we have exactly 3 preferences, filling with empty strings if missing
      const { preferenze, ...rest } = foundAny;
      const tuplePrefs: [string, string, string] = [
        preferenze[0] || '',
        preferenze[1] || '',
        preferenze[2] || '',
      ];
      login({ ...rest, preferenze: tuplePrefs });
    } else {
      setError('Utente non trovato');
    }
  };

  return (
    <Box
      sx={{
        width: 300,
        margin: '80px auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <TextField
        label='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoFocus
      />
      {error && <Box sx={{ color: 'red' }}>{error}</Box>}
      <Button variant='contained' onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;
