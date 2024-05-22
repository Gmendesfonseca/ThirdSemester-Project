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
import { StudentListType } from '../../../services/login';
import faker from 'faker';

const headCells: readonly HeadCell<StudentListType>[] = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
  { id: 'cpf', numeric: false, disablePadding: false, label: 'CPF' },
  { id: 'curso', numeric: false, disablePadding: false, label: 'Course' },
  { id: 'periodo', numeric: false, disablePadding: false, label: 'Period' },
  {
    id: 'matricula',
    numeric: false,
    disablePadding: false,
    label: 'Registration',
  },
  {
    id: 'institution',
    numeric: false,
    disablePadding: false,
    label: 'Institution',
  },
];

const rows: StudentListType[] = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: faker.name.findName(),
  email: faker.internet.email(),
  cpf: faker.finance.creditCardNumber(),
  curso: faker.random.arrayElement(['Course1', 'Course2', 'Course3']),
  periodo: faker.date.month(),
  matricula: faker.datatype.uuid(),
  institution: faker.company.companyName(),
}));

export default function ListStudent() {
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
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SidebarMenu mode={mode} setMode={setMode} />
          <InTable<StudentListType>
            title="Alunos"
            name="Novo Aluno"
            rowsItems={rows}
            headCells={headCells}
          />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
