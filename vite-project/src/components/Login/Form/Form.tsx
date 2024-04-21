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
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(event.target.value) && event.target.value != '') {
      setEmailError(true);
    } else {
      setEmailError(false);
      setFormData((prevState) => ({ ...prevState, email: event.target.value }));
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 8 && event.target.value != '') {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      setFormData((prevState) => ({
        ...prevState,
        password: event.target.value,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    //const remember = data.get('remember') as boolean;

    if (!emailError && !passwordError && email !== '' && password !== '') {
      login(email, password);
    } else if (email === '' || password === '') {
      addToast('Preencha todos os campos', { appearance: 'error' });
    }
  };

  const isFormFilled = () => {
    for (const key in formData) {
      if (!formData[key]) return false;
    }
    return true;
  };

  const login = async (email, password) => {
    const response = await fetch('http://localhost:5052/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      if (data.success) {
        navigate('/home');
      } else {
        addToast('Email ou senha incorretos', { appearance: 'error' });
        console.log(data);
      }
    } else {
      throw new Error(data.message || 'Failed to login');
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
      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={!isFormFilled()}
      >
        Entrar
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="/forgot-password" variant="body2">
            Esqueceu a senha?
          </Link>
        </Grid>
        <Grid item>
          <Link href="/register" variant="body2">
            {'Precisa de ajuda?'}
          </Link>
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Box>
  );
}
