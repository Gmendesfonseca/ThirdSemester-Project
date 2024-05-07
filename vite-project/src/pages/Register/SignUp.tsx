import React from 'react';
//import { useForm } from 'react-hook-form';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container, ThemeProvider } from '@mui/material';
import { darkTheme } from '../../Theme';
import { Copyright } from '../../components/Login/Copyright/Copyright';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormInstitution from '../../components/Register/FormInstitution';

export default function SignInSide() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh" }}
        overflow={"hidden"}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          lg={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          sm={8}
          md={7}
          lg={5}
          sx={{}}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: { sm: 6, md: 6, lg: 24 },
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" marginBottom={1}>
                  Sign up
                </Typography>
                <FormInstitution />
              </Box>
              <Copyright sx={{ mt: 5 }} />
            </Container>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
