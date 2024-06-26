import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { addToast } from '../../Toast/toast';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { Copyright } from '../Copyright/Copyright';
import Grid from '@mui/material/Grid';
import {
  loginInstitution,
  loginProfessor,
  LoginResponse,
  loginStudent,
} from '../../../services/login/index';
import Anchor from '../../Anchor/Anchor';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export function Form() {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [type, setType] = React.useState(1);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleTypeChange = (event: SelectChangeEvent<number>) => {
    setType(Number(event.target.value));
  };

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
      handleLogin(type, email, password);
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

  const handleLogin = async (type: number, email: string, password: string) => {
    try {
      let data: LoginResponse;
      if (type === 1) {
        data = await loginInstitution({ email, password });
      } else if (type === 2) {
        data = await loginProfessor({ email, password });
      } else {
        data = await loginStudent({ email, password });
      }
      if (data.success) {
        navigate('/home');
      } else {
        addToast('Email ou senha incorretos', { appearance: 'error' });
      }
    } catch (error) {
      console.error('Login failed:', error);
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
      <FormControl fullWidth>
        <InputLabel id="type-login-label">Fazer login como</InputLabel>
        <Select
          labelId="type-login-label"
          id="type-login-selector"
          value={type}
          label="Fazer login como"
          onChange={handleTypeChange}
        >
          <MenuItem value={1}>Instituição</MenuItem>
          <MenuItem value={2}>Professor</MenuItem>
          <MenuItem value={3}>Aluno</MenuItem>
        </Select>
      </FormControl>
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
          <Anchor to="/home">Esqueceu a senha?</Anchor>
        </Grid>
        <Grid item>
          {type === 1 && (
            <Anchor to="/register">
              É uma nova instituição? Cadastre-se aqui
            </Anchor>
          )}
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Box>
  );
}
