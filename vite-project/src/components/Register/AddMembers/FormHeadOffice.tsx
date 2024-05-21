import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Check from "@mui/icons-material/Check";
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { useState } from 'react';
import { Stack, Stepper, Step, StepLabel, Button, Box } from '@mui/material';
import { Grid, TextField } from '@mui/material';
import { addToast } from '../../Toast/toast';
import {
  registerInstitution,
  RegisterResponse,
} from '../../../services/register';
import { useNavigate } from 'react-router-dom';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ['Cadastro', 'Dados', 'Verificação'];

export default function FormHeadOffice() {
  const [activeStep, setActiveStep] = useState(0);
  const [cnpjError, setCnpjError] = useState(false);
  const [domainError, setDomainError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();
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

  return (
    <Stack sx={{ width: '100%' }} spacing={5}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
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
    </Stack>
  );
}

//   <Button
//     id="register-submit"
//     type="submit"
//     fullWidth
//     variant="contained"
//     sx={{ mt: 3, mb: 2 }}
//     disabled={!isFormFilled()}
//   >
//     Sign Up
//   </Button>
//   <Grid container justifyContent="flex-end">
//     <Grid item>
//       <Anchor to="/login">Já tem uma conta? Sign in</Anchor>
//     </Grid>
//   </Grid>
// </Box>
