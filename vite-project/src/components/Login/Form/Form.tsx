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
  loginBranch,
  loginHeadOffice,
  loginProfessor,
  LoginResponse,
  loginStudent,
} from '../../../services/login/index';
import Anchor from '../../Anchor/Anchor';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useSession } from '../../../context/SessionContext';
import { AccountType } from '../../../services/login/enum';
import {
  UserBranchType,
  UserHeadOfficeType,
  UserType,
} from '../../../services/user/types';

export function Form() {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const {
    setUser,
    setUserBranch,
    setUserHeadOffice,
    accountType,
    setAccountType,
  } = useSession();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleTypeChange = (event: SelectChangeEvent<string>) => {
    setAccountType(event.target.value);
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
      handleLogin(email, password);
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

  const handleLogin = async (email: string, password: string) => {
    try {
      let data: LoginResponse;
      if (accountType === AccountType.HEADOFFICE) {
        data = await loginHeadOffice({ email, password });
        setUserHeadOffice(data.user as UserHeadOfficeType | null);
      } else if (accountType === AccountType.BRANCH) {
        data = await loginBranch({ email, password });
        setUserBranch(data.user as UserBranchType | null);
      } else if (accountType === AccountType.PROFESSOR) {
        data = await loginProfessor({ email, password });
        setUser(data.user as UserType | null);
      } else if (accountType === AccountType.STUDENT) {
        data = await loginStudent({ email, password });
        setUser(data.user as UserType | null);
      } else {
        console.error('Invalid account type');
        return;
      }

      if (data.success) {
        if (
          accountType === AccountType.STUDENT ||
          accountType === AccountType.PROFESSOR
        ) {
          navigate('/home');
        } else if (accountType === AccountType.BRANCH) {
          navigate('/professor/list');
        } else {
          navigate('/branch/list');
        }
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
        <InputLabel
          id="type-login-label"
          sx={{ color: 'text.primary' }}
          required
        >
          Fazer login como
        </InputLabel>
        <Select
          value={accountType || ''}
          required
          labelId="type-login-label"
          id="type-login-selector"
          label="Fazer login como"
          onChange={handleTypeChange}
        >
          <MenuItem id="headoofice" value={AccountType.HEADOFFICE}>
            Matriz da Instituição
          </MenuItem>
          <MenuItem id="branch" value={AccountType.BRANCH}>
            Filial da Instituição
          </MenuItem>
          <MenuItem id="professor" value={AccountType.PROFESSOR}>
            Professor
          </MenuItem>
          <MenuItem id="student" value={AccountType.STUDENT}>
            Aluno
          </MenuItem>
        </Select>
      </FormControl>
      <TextField
        sx={{ color: 'text.primary' }}
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
        InputProps={{
          style: { color: '#fff' }, // Adicione esta linha
        }}
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
        id="remember-me"
        control={<Checkbox value="remember" color="primary" />}
        label="Lembrar-me"
      />
      <Button
        id="login-submit"
        type="submit"
        fullWidth
        variant="contained"
        disabled={!isFormFilled()}
      >
        Entrar
      </Button>
      <Grid container>
        <Grid item xs>
          {accountType === AccountType.STUDENT ||
          accountType === AccountType.PROFESSOR ? (
            <Anchor id="forgot-password" to="/home">
              Esqueceu a senha?
            </Anchor>
          ) : accountType === AccountType.BRANCH ? (
            <Anchor id="forgot-password" to="/professor/list">
              Esqueceu a senha?{' '}
            </Anchor>
          ) : (
            <Anchor id="forgot-password" to="/branch/list">
              Esqueceu a senha?{' '}
            </Anchor>
          )}
        </Grid>
        <Grid item>
          {accountType === AccountType.HEADOFFICE && (
            <Anchor id="register-institution" to="/headoffice/register">
              É uma nova matriz? Cadastre-se aqui
            </Anchor>
          )}
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Box>
  );
}
