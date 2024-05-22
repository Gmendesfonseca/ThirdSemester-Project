import * as React from 'react';
import {
  PaletteMode,
  Stack,
  ThemeProvider,
  createTheme,
  useMediaQuery,
  Box,
} from '@mui/material';

import { Navbar } from '../../HomeComponents/NavBar/Navbar';
import { SidebarMenu } from '../../HomeComponents/Sidebar/SidebarHome';
import { HeadCell, InTable } from '../../Table/Table';
import { InstitutionListType } from '../../../services/login';
import faker from 'faker';

const headCells: readonly HeadCell<InstitutionListType>[] = [
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
  {
    id: 'dataCriacao',
    numeric: false,
    disablePadding: false,
    label: 'Creation Date',
  },
];

const rows: InstitutionListType[] = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: faker.company.companyName(),
  email: faker.internet.email(),
  domain: faker.internet.domainName(),
  cnpj: faker.datatype.uuid(),
  localidadeInstituicao: faker.address.city(),
  dataCriacao: faker.date.past(),
}));

export default function ListBranch() {
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
          <InTable<InstitutionListType>
            title="Unidades"
            name="Novas Unidades"
            rowsItems={rows}
            headCells={headCells}
          />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
