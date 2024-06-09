import { Box, List } from '@mui/material';

export const Sidebar = ({ children }) => {
  return (
    <Box
      width="200px"
      position="relative"
      sx={{
        display: 'block',
        flex: { lg: 2, xl: 1 },
        maxWidth: '200px',
        background: '#fff',
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
  );
};
