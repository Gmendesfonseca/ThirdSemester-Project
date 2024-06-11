import * as React from 'react';
import {
  PaletteMode,
  Stack,
  ThemeProvider,
  createTheme,
  useMediaQuery,
  Box,
} from '@mui/material';

import { Navbar } from '../../components/HomeComponents/NavBar/Navbar';
import { SidebarMenu } from '../../components/HomeComponents/Sidebar/SidebarHome';
import { HeadCell, InTable } from '../../components/Table/Table';
import faker from 'faker';
import { More } from '../../components/More/More';
import { CourseListType } from '../../services/courses';

const headCells: readonly HeadCell<CourseListType>[] = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Nome' },
  {
    id: 'description',
    numeric: false,
    disablePadding: false,
    label: 'Descrção',
  },
  {
    id: 'workload',
    numeric: false,
    disablePadding: false,
    label: 'Carga Horária',
  },
  { id: 'period', numeric: false, disablePadding: false, label: 'Período' },
  { id: 'options', numeric: false, disablePadding: false, label: 'Opções' },
];

const rows: CourseListType[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: faker.company.companyName(),
  description: faker.lorem.sentence(),
  workload: faker.random.number(),
  period: faker.random.arrayElement(['Period1', 'Period2', 'Period3']),
  options: <More type="Unidade" id={index + 1} idMore={index + 1} />,
}));

export default function ListCourse() {
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
          <InTable<CourseListType>
            title="Cursos"
            name="Novo Curso"
            rowsItems={rows}
            headCells={headCells}
          />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
