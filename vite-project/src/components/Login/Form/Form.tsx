import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { addToast } from '../../Toast/toast';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Copyright } from '../Copyright/Copyright';
import Grid from '@mui/material/Grid';

export function Form() {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(event.target.value) && event.target.value != null) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 8 && event.target.value != null) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    //const remember = data.get('remember') as boolean;

    if (
      !emailError &&
      !passwordError &&
      email !== '' &&
      password !== ''
      //&& password.length >= 8
    ) {
      navigate('/home');
    } else {
      // if (emailError) {
      //   addToast('Email incorreto', { appearance: 'error' });
      // }
      if (email === '' || password === '') {
        addToast('Preencha todos os campos', { appearance: 'error' });
      }
      //if (password.length < 8) {
      //  addToast('Senha muito curta', { appearance: 'error' });
      //}
    }
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{
        mt: 1,
      }}
    >
      <TextField
        error={emailError}
        helperText={emailError ? 'Email inválido' : ''}
        margin="normal"
        required
        fullWidth
        id="email"
        label="Endereço de Email"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={handleEmailChange}
      />
      <TextField
        error={passwordError}
        helperText={passwordError ? 'Senha inválida' : ''}
        margin="normal"
        required
        fullWidth
        name="password"
        label="Senha"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={handlePasswordChange}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Lembrar-me"
      />
      <Button type="submit" fullWidth variant="contained">
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="/forgot-password" variant="body2">
            Esqueceu a senha?
          </Link>
        </Grid>
        <Grid item>
          <Link href="/register" variant="body2">
            {"Don't have an account?"}
          </Link>
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Box>
  );
}
