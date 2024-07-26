import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/create-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Account created:', data);
      } else {
        console.error('Error creating account:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Create Account</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">Create Account</Button>
      </form>
    </Container>
  );
};

export default CreateAccount;
