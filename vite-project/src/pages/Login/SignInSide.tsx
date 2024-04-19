import React from "react";
//import { useForm } from 'react-hook-form';
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";
import { Form } from "../../components/Login/Form/Form";
import logo from "../../../public/IL.png";

export default function SignInSide() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
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
          md={5}
          sx={{}}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                width: "100px",
                height: "100px",
                borderRadius: "0px",
                position: "relative",
                bottom: "2rem",
              }}
            >
              <img src={logo} alt="Logo" />
            </Avatar>
            <Typography component="h1" variant="h5" fontFamily={""}>
              Bem-vindo ao InnerLink!
            </Typography>
            <Form />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
