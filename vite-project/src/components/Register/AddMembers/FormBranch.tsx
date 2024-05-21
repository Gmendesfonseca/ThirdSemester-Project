import { blue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import * as React from 'react';
import { addToast } from '../../Toast/toast';
import {
  registerInstitution,
  RegisterResponse,
} from '../../../services/register';
import { InStepper } from '../../Stepper/Stepper';

const steps = ['Cadastro', 'Dados', 'Verificação'];

export function RegisterBranch() {
  const [activeStep, setActiveStep] = useState(0);
  const [cnpjError, setCnpjError] = useState(false);
  const [domainError, setDomainError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formData, setFormData] = useState({
    institution: '',
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  const handleCnpjChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    if (!cnpjRegex.test(event.target.value) || event.target.value == '') {
      setCnpjError(true);
    } else {
      setCnpjError(false);
      setFormData((prevState) => ({
        ...prevState,
        cnpj: event.target.value,
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
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(event.target.value) && event.target.value != '') {
      setEmailError(true);
    } else {
      setEmailError(false);
      setFormData((prevState) => ({
        ...prevState,
        email: event.target.value,
      }));
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

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
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
  const navigate = useNavigate();

  return (
    <Stack sx={{ width: '100%' }} spacing={5}>
      <InStepper steps={steps} />
      <form>
        {activeStep === 0 && (
          <Grid>
            <Grid item xs={12}></Grid>
            <TextField
              autoComplete="given-name"
              name="institution"
              required
              fullWidth
              id="institution-name"
              label="Nome da Instituição"
              autoFocus
              sx={(theme) => ({
                marginBottom: theme.spacing(1),
              })}
            />
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
                marginBottom: theme.spacing(1),
              })}
            />
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
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '10px',
                marginTop: '30px',
              }}
            >
              <Button onClick={handleBack} variant="contained" disabled>
                Voltar
              </Button>
              <Button onClick={handleNext} variant="contained">
                Próximo
              </Button>
            </Box>
          </Grid>
        )}
        {activeStep === 1 && (
          <Grid>
            <Grid item xs={12}>
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
                  marginBottom: theme.spacing(1),
                })}
              />
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
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '10px',
                  marginTop: '30px',
                }}
              >
                <Button onClick={handleBack} variant="contained">
                  Voltar
                </Button>
                <Button onClick={handleNext} variant="contained">
                  Próximo
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: '10px',
          }}
        >
          {activeStep === 2 && (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="verification-code"
                  label="Código de Verificação"
                  name="verification"
                  autoComplete="verification"
                  sx={(theme) => ({
                    marginBottom: theme.spacing(1),
                  })}
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '10px',
                    marginTop: '30px',
                  }}
                >
                  <Button onClick={handleBack} variant="contained">
                    Voltar
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    id="register-submit"
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={!isFormFilled()}
                  >
                    Finalizar
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
        </Box>
      </form>
      <Button
        onClick={() => navigate('/branch/list')}
        style={{ color: blue[500] }}
        onMouseOver={(event) => {
          event.currentTarget.style.color = blue[900];
          event.currentTarget.style.textDecoration = 'underline';
        }}
        onMouseOut={(event) => {
          event.currentTarget.style.color = blue[500];
          event.currentTarget.style.textDecoration = 'none';
        }}
      >
        Menu de Registro
      </Button>
    </Stack>
  );
}
