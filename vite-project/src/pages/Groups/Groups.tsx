import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { darkTheme } from "../../Themes";
import { Box, Stack, Button, ThemeProvider } from "@mui/material";
import { SidebarMenu } from "../../components/HomeComponents/Sidebar/SidebarHome";
import { NavBar } from "../../components/HomeComponents/NavBar/Navbar";

export function Groups() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SidebarMenu />
          <Box flex={6}>
            <Button
              onClick={() => navigate("/home")}
              style={{ color: blue[500] }}
              onMouseOver={(event) => {
                event.currentTarget.style.color = blue[900];
                event.currentTarget.style.textDecoration = "underline";
              }}
              onMouseOut={(event) => {
                event.currentTarget.style.color = blue[500];
                event.currentTarget.style.textDecoration = "none";
              }}
            >
              Página Inicial
            </Button>
          </Box>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
