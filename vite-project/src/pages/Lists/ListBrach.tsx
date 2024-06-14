import { Stack, ThemeProvider, createTheme, Box } from '@mui/material';
import { NavBar } from '../../components/HomeComponents/NavBar/Navbar';
import { HeadCell, InTable } from '../../components/Table/Table';
import faker from 'faker';
import { More } from '../../components/More/More';
import { BranchListType } from '../../services/branch/types';

const headCells: readonly HeadCell<BranchListType>[] = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
  { id: 'domain', numeric: false, disablePadding: false, label: 'Domain' },
  { id: 'cnpj', numeric: false, disablePadding: false, label: 'CNPJ' },
  {
    id: 'localidadeInstituicao',
    numeric: false,
    disablePadding: false,
    label: 'Location',
  },
  { id: 'options', numeric: false, disablePadding: false, label: 'Opções' },
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
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="center">
          {/* <SidebarMenu mode={mode} setMode={setMode} /> */}
          <InTable<BranchListType>
            title="Unidades"
            name="Nova Unidade"
            rowsItems={rows}
            headCells={headCells}
          />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
