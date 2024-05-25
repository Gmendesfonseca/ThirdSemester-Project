import * as React from 'react';
import {
  PaletteMode,
  Stack,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material';
import Box from '@mui/material/Box';
import { Navbar } from '../../HomeComponents/NavBar/Navbar';
import { SidebarMenu } from '../../HomeComponents/Sidebar/SidebarHome';
import { HeadCell, InTable } from '../../Table/Table';
import { ProfessorListType } from '../../../services/login';
import faker from 'faker';

const headCells: readonly HeadCell<ProfessorListType>[] = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
  { id: 'type', numeric: false, disablePadding: false, label: 'Type' },
  {
    id: 'registration',
    numeric: false,
    disablePadding: false,
    label: 'Registration',
  },
];

const rows: ProfessorListType[] = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: faker.name.findName(),
  email: faker.internet.email(),
  type: faker.random.arrayElement(['Type1', 'Type2', 'Type3']),
  registration: faker.datatype.uuid(),
}));

export default function ListProfessor() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');

  const [mode, setMode] = React.useState<PaletteMode>(
    prefersDarkMode ? 'dark' : 'light',
  );

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    // <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SidebarMenu mode={mode} setMode={setMode} />
          <InTable<ProfessorListType>
            title="Professores"
            name="Novo Professor"
            rowsItems={rows}
            headCells={headCells}
          />
        </Stack>
      </Box>
    // </ThemeProvider>
  );
}