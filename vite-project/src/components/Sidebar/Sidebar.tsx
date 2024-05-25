import { Box, List } from '@mui/material';

export const Sidebar = ({ children }) => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed" pt={5} sx={{display:"flex" }}>
        <nav aria-label="main mailbox folders">
          <List>{children}</List>
        </nav>
      </Box>
    </Box>
  );
};
