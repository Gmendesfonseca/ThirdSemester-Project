import { Feed } from "../../components/HomeComponents/Feed/Feed";
import { Rightbar } from "../../components/HomeComponents/Rightbar/Rightbar";
import { NavBar } from "../../components/HomeComponents/NavBar/Navbar";
import { darkTheme } from "../../Themes";

import { Box, Stack, ThemeProvider } from "@mui/material";

import { Add2 } from "../../components/HomeComponents/Add/Add2";
export function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        sx={{ padding: "0px", height: "100%" }}
      >
        <NavBar />
        <Stack direction="row" spacing={0} height="100%">
          <Rightbar />
          <Feed />
        </Stack>
        <Add2 />
      </Box>
    </ThemeProvider>
  );
}
