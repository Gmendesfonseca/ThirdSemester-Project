import { ThemeProvider } from '@emotion/react';
import { Box, List } from '@mui/material';
import { darkTheme } from '../../Themes';

export const Sidebar = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        width="200px"
        position="relative"
        sx={{
          display: 'block',
          flex: { lg: 2, xl: 1 },
          maxWidth: '200px',
          backgroundColor: 'background.default',
        }}
      >
        <Box
          position="fixed"
          width="200px"
          flex={1}
          p={0}
          sx={{ gap: '5px' }}
          height="100%"
        >
          <nav aria-label="main mailbox folders">
            <List>{children}</List>
          </nav>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
