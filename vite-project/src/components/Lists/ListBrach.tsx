import {
  // PaletteMode,
  Stack,
  // ThemeProvider,
  // createTheme,
  // useMediaQuery,
  Box,
} from "@mui/material";

import { Navbar } from "../HomeComponents/NavBar/Navbar";
import { SidebarMenu } from "../HomeComponents/Sidebar/SidebarHome";
import { HeadCell, InTable } from "../Table/Table";
import { BranchListType } from "../../services/login";
import faker from "faker";
import { More } from "../More/More";

const headCells: readonly HeadCell<BranchListType>[] = [
  { id: "name", numeric: false, disablePadding: false, label: "Name" },
  { id: "email", numeric: false, disablePadding: false, label: "Email" },
  { id: "domain", numeric: false, disablePadding: false, label: "Domain" },
  { id: "cnpj", numeric: false, disablePadding: false, label: "CNPJ" },
  {
    id: "localidadeInstituicao",
    numeric: false,
    disablePadding: false,
    label: "Location",
  },
  { id: "options", numeric: false, disablePadding: false, label: "Opções" },
];

const rows: BranchListType[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: faker.company.companyName(),
  email: faker.internet.email(),
  domain: faker.internet.domainName(),
  cnpj: faker.datatype.uuid(),
  localidadeInstituicao: faker.address.city(),
  dataCriacao: faker.date.past(),
  options: <More type="Unidade" id={index + 1} idMore={index + 1} />,
}));

export default function ListBranch() {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');

  // const [mode, setMode] = React.useState<PaletteMode>(
  //   prefersDarkMode ? 'dark' : 'light',
  // );

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // });

  return (
    // <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SidebarMenu />
        <InTable<BranchListType>
          title="Unidades"
          name="Nova Unidade"
          rowsItems={rows}
          headCells={headCells}
        />
      </Stack>
    </Box>
    // </ThemeProvider>
  );
}
