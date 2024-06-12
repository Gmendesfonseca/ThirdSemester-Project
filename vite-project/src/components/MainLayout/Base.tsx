import { Box, Stack } from '@mui/material';
import { Navbar } from '../HomeComponents/NavBar/Navbar';
import { FC, PropsWithChildren } from 'react';

type Props = {
  sideBar?: boolean;
};

export const MainLayout: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <Box
      bgcolor={'background.default'}
      color={'text.primary'}
      sx={{ padding: '0px', height: '100%', width: '100%' }}
    >
      <Navbar navAct="InnerLink" />
      <Stack direction="row" spacing={0} height="100%" width="100%">
        {children}
      </Stack>
    </Box>
  );
};
