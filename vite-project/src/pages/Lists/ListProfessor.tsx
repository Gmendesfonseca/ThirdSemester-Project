import { Stack, ThemeProvider, createTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { NavBar } from "../../components/HomeComponents/NavBar/Navbar";
import { SidebarMenu } from "../../components/HomeComponents/Sidebar/SidebarHome";
import { HeadCell, InTable } from "../../components/Table/Table";
import faker from "faker";
import { More } from "../../components/More/More";
import { ProfessorListType } from "../../services/professor/types";

const headCells: readonly HeadCell<ProfessorListType>[] = [
  { id: "name", numeric: false, disablePadding: false, label: "Name" },
  { id: "email", numeric: false, disablePadding: false, label: "Email" },
  { id: "type", numeric: false, disablePadding: false, label: "Type" },
  {
    id: "registration",
    numeric: false,
    disablePadding: false,
    label: "Registration",
  },
  { id: "options", numeric: false, disablePadding: false, label: "Opções" },
];

const rows: ProfessorListType[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: faker.name.findName(),
  email: faker.internet.email(),
  type: faker.random.arrayElement(["Type1", "Type2", "Type3"]),
  registration: faker.datatype.uuid(),
  options: <More type="Professor" id={index + 1} idMore={index + 1} />,
}));

export default function ListProfessor() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SidebarMenu />
          <InTable<ProfessorListType>
            title="Professores"
            name="Novo Professor"
            rowsItems={rows}
            headCells={headCells}
          />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
