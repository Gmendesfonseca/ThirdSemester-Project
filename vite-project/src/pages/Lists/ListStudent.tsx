import * as React from 'react';
import {
  PaletteMode,
  Stack,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material';
import Box from '@mui/material/Box';
import { Navbar } from '../../components/HomeComponents/NavBar/Navbar';
import { SidebarMenu } from '../../components/HomeComponents/Sidebar/SidebarHome';
import { HeadCell, InTable } from '../../components/Table/Table';
import faker from 'faker';
import { More } from '../../components/More/More';
import { StudentListType } from '../../services/student/types';

const headCells: readonly HeadCell<StudentListType>[] = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Nome' },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
  { id: 'cpf', numeric: false, disablePadding: false, label: 'CPF' },
  { id: 'curso', numeric: false, disablePadding: false, label: 'Curso' },
  {
    id: 'matricula',
    numeric: false,
    disablePadding: false,
    label: 'Matricula',
  },
  { id: 'options', numeric: false, disablePadding: false, label: 'Opções' },
];

const rows: StudentListType[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: faker.name.findName(),
  email: faker.internet.email(),
  cpf: faker.finance.creditCardNumber(),
  curso: faker.random.arrayElement(['Course1', 'Course2', 'Course3']),
  matricula: faker.datatype.uuid(),
  options: <More type="Estudante" id={index + 1} idMore={index + 1} />,
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
      <Box
        bgcolor={'background.default'}
        color={'text.primary'}
        sx={{ padding: '0px', height: '100%' }}
      >
        <Navbar />
        <Stack direction="row" spacing={0}>
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
