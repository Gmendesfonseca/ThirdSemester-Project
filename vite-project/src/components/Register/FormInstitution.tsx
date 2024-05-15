import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { addToast } from '../../components/Toast/toast';
import { registerInstitution, RegisterResponse } from '../../services/register';
import Anchor from '../Anchor/Anchor';

export default function FormInstitution() {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [domainError, setDomainError] = useState(false);
  const [cnpjError, setCnpjError] = useState(false);
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
  const handleDomainChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const domainRegex = /^[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!domainRegex.test(event.target.value) && event.target.value != '') {
      setDomainError(true);
    } else {
      setDomainError(false);
      setFormData((prevState) => ({
        ...prevState,
        password: event.target.value,
      }));
    }
  };

  const handleCnpjChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    if (!cnpjRegex.test(event.target.value) || event.target.value == '') {
      setCnpjError(true);
    } else {
      setCnpjError(false);
      setFormData((prevState) => ({ ...prevState, cnpj: event.target.value }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('institution') as string;
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    const domain = data.get('domain') as string;
    const cnpj = data.get('cnpj') as string;

    if (
      !emailError &&
      !passwordError &&
      !domainError &&
      !cnpjError &&
      email !== '' &&
      password !== '' &&
      domain !== '' &&
      cnpj !== '' &&
      name !== ''
    ) {
      handleRegister(name, email, password, domain, cnpj);
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

  const handleRegister = async (
    name: string,
    email: string,
    password: string,
    domain: string,
    cnpj: string,
  ) => {
    try {
      const data: RegisterResponse = await registerInstitution({
        name,
        email,
        password,
        domain,
        cnpj,
      });

      if (data.success) {
        addToast('Cadastro realizado com sucesso', { appearance: 'success' });
        navigate('/login');
      } else {
        addToast('Email ou senha incorretos', { appearance: 'error' });
      }
    } catch (error) {
      console.error('Register failed:', error);
    }
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{
        mt: { sm: 0, md: 0, xl: 6 },
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <TextField
            autoComplete="given-name"
            name="institution"
            required
            fullWidth
            id="institution-name"
            label="Nome da Instituição"
            autoFocus
            sx={(theme) => ({
              [theme.breakpoints.down('xl')]: {
                '& .MuiInputBase-root': { height: 40 },
              },
            })}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            error={cnpjError}
            helperText={cnpjError ? 'CNPJ inválido' : ''}
            required
            fullWidth
            id="institution-cnpj"
            label="CNPJ"
            name="cnpj"
            autoComplete="cnpj"
            onChange={handleCnpjChange}
            sx={(theme) => ({
              [theme.breakpoints.down('xl')]: {
                '& .MuiInputBase-root': { height: 40 },
              },
            })}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            error={domainError}
            helperText={domainError ? 'Domínio inválido' : ''}
            required
            fullWidth
            id="institution-domain"
            label="Domínio"
            name="domain"
            autoComplete="domain"
            onChange={handleDomainChange}
            sx={(theme) => ({
              [theme.breakpoints.down('xl')]: {
                '& .MuiInputBase-root': { height: 40 },
              },
            })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={emailError}
            helperText={emailError ? 'Email inválido' : ''}
            required
            fullWidth
            id="institution-email"
            label="Endereço de Email"
            name="email"
            autoComplete="email"
            onChange={handleEmailChange}
            sx={(theme) => ({
              [theme.breakpoints.down('xl')]: {
                '& .MuiInputBase-root': { height: 40 },
              },
            })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={passwordError}
            helperText={passwordError ? 'Senha muito curta' : ''}
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="institution-password"
            autoComplete="new-password"
            onChange={handlePasswordChange}
            sx={(theme) => ({
              [theme.breakpoints.down('xl')]: {
                '& .MuiInputBase-root': { height: 40 },
              },
            })}
          />
        </Grid>
        {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
      </Grid>
      <Button
        id="register-submit"
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={!isFormFilled()}
      >
        Sign Up
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Anchor to="/login">Já tem uma conta? Sign in</Anchor>
        </Grid>
      </Grid>
    </Box>
  );
}
