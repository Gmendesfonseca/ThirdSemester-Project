import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { addToast } from '../Toast/toast';
import { RegisterResponse, registerInstitution } from '../../services/register';
import { FormProps } from '../../interfaces/Form';

export function FormHeadOffice({ disabled, data, onDataChange }: FormProps) {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [domainError, setDomainError] = useState(false);
  const [cnpjError, setCnpjError] = useState(false);

  const [name, setName] = useState(data?.name ?? '');
  const [email, setEmail] = useState(data?.email ?? '');
  const [password, setPassword] = useState(data?.password ?? '');
  const [domain, setDomain] = useState(data?.domain ?? '');
  const [cnpj, setCnpj] = useState(data?.cnpj ?? '');

  useEffect(() => {
    if (onDataChange) {
      onDataChange({ name, email, password, domain, cnpj });
    }
  }, [name, email, password, domain, cnpj]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(event.target.value) && event.target.value != '') {
      setEmailError(true);
    } else {
      setEmailError(false);
      setEmail(event.target.value);
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length < 8 && event.target.value != '') {
      setPasswordError(true);
    } else {
      setPasswordError(false);
      setPassword(event.target.value);
    }
  };
  const handleDomainChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const domainRegex = /^[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!domainRegex.test(event.target.value) && event.target.value != '') {
      setDomainError(true);
    } else {
      setDomainError(false);
      setDomain(event.target.value);
    }
  };

  const handleCnpjChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    if (!cnpjRegex.test(event.target.value) || event.target.value == '') {
      setCnpjError(true);
    } else {
      setCnpjError(false);
      setCnpj(event.target.value);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
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
        mt: { sm: 0, md: 0, lg: 6 },
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
            id="institution"
            label="Nome da Instituição"
            autoFocus
            onChange={handleNameChange}
            disabled={disabled}
            defaultValue={data?.name ?? ''}
            sx={(theme) => ({
              [theme.breakpoints.down('md')]: {
                '& .MuiInputBase-root': { height: 50 },
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
            id="cnpj"
            label="CNPJ"
            name="cnpj"
            autoComplete="cnpj"
            onChange={handleCnpjChange}
            disabled={disabled}
            defaultValue={data?.cnpj ?? ''}
            sx={(theme) => ({
              [theme.breakpoints.down('md')]: {
                '& .MuiInputBase-root': { height: 50 },
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
            id="domain"
            label="Domínio"
            name="domain"
            autoComplete="domain"
            disabled={disabled}
            onChange={handleDomainChange}
            defaultValue={data?.domain ?? ''}
            sx={(theme) => ({
              [theme.breakpoints.down('md')]: {
                '& .MuiInputBase-root': { height: 50 },
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
            id="email"
            label="Endereço de Email"
            name="email"
            autoComplete="email"
            disabled={disabled}
            onChange={handleEmailChange}
            defaultValue={data?.email ?? ''}
            sx={(theme) => ({
              [theme.breakpoints.down('md')]: {
                '& .MuiInputBase-root': { height: 50 },
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
            id="password"
            autoComplete="new-password"
            onChange={handlePasswordChange}
            disabled={disabled}
            defaultValue={data?.password ?? ''}
            sx={(theme) => ({
              [theme.breakpoints.down('md')]: {
                '& .MuiInputBase-root': { height: 50 },
              },
            })}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
