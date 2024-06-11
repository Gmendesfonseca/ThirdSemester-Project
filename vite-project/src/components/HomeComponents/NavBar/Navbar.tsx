import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
  Badge,
  Avatar,
  MenuItem,
  Divider,
  ListItemIcon,
  Menu,
  IconButton,
  Tooltip,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react';
import {
  Logout,
  Notifications,
  // PersonAdd,
  Settings,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSession } from '../../../context/SessionContext';
// import { useChat } from '../../../context/ChatsContext';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
  padding: '0 10px',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
}));

export const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { setAccountType, setInstitution, setUser } = useSession();
  // const { setChatList } = useChat();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    //localStorage.removeItem('token');
    setAccountType(null);
    setInstitution(null);
    setUser(null);
    // setChatList([]);
    navigate('/login');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  const handleSettings = () => {
    navigate('/settings');
  };

  return (
    <AppBar position="sticky" sx={{ width: '100%' }}>
      <StyledToolbar>
        <Typography variant="h6" sx={{ xs: 'none', sm: 'block' }}>
          InnerLink
        </Typography>
        <Search>
          <InputBase placeholder="Search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar
                sx={{ width: 32, height: 32 }}
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </IconButton>
          </Tooltip>
        </Icons>
        <UserBox>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2, gap: 1 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar
                sx={{ width: 32, height: 32 }}
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <Typography variant="body1" color="white">
                John Doe
              </Typography>
            </IconButton>
          </Tooltip>
        </UserBox>
      </StyledToolbar>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem> */}
        <MenuItem onClick={handleProfile}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem> */}
        <MenuItem onClick={handleSettings}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
};
