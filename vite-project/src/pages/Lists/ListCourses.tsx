import { Stack, ThemeProvider, Box } from '@mui/material';

import { NavBar } from '../../components/HomeComponents/NavBar/Navbar';
import { SidebarMenu } from '../../components/HomeComponents/Sidebar/SidebarHome';
import { HeadCell, InTable } from '../../components/Table/Table';
import faker from 'faker';
import { More } from '../../components/More/More';
import { CourseListType } from '../../services/courses';
import { darkTheme } from '../../Themes';
import { useSession } from '../../context/SessionContext';

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

export default function ListCourse() {
  const { userBranch } = useSession();

  const rows: CourseListType[] = userBranch
    ? userBranch.courses.map((course) => ({
        ...course,
        options: <More type="Unidade" id={course.id} idMore={course.id} />,
      }))
    : Array.from(
        { length: 50 },
        (_, index) =>
          ({
            id: index + 1,
            name: faker.company.companyName(),
            description: faker.lorem.sentence(),
            workload: faker.datatype.number(),
            period: faker.random.arrayElement([
              'Period1',
              'Period2',
              'Period3',
            ]),
            options: <More type="Unidade" id={index + 1} idMore={index + 1} />,
          } as CourseListType),
      );

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SidebarMenu />
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
