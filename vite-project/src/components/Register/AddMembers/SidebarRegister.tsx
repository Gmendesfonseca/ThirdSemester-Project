import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  PaletteMode,
  Switch,
} from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import {
  AddHomeOutlined,
  DarkMode,
  Home,
  PersonOutlineOutlined,
  SchoolOutlined,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Sidebar } from '../../Sidebar/Sidebar';
import { blue } from '@mui/material/colors';

interface SidebarProps {
  mode: PaletteMode;
  setMode: Dispatch<SetStateAction<PaletteMode>>;
}

export const SidebarRegister: React.FC<SidebarProps> = ({ mode, setMode }) => {
  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sidebar>
      <ListItem disablePadding={location.pathname !== '/home'}>
        <ListItemButton onClick={() => navigate('/home')}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding={location.pathname !== '/branch/list'}>
        <ListItemButton
          onClick={() => navigate('/branch/list')}
          style={{
            backgroundColor:
              location.pathname === '/branch/list' ? blue[50] : 'default',
          }}
        >
          <ListItemIcon>
            <AddHomeOutlined />
          </ListItemIcon>
          <ListItemText primary="Unidades" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding={location.pathname !== '/professor/list'}>
        <ListItemButton
          onClick={() => navigate('/professor/list')}
          style={{
            backgroundColor:
              location.pathname === '/professor/list' ? blue[50] : 'default',
          }}
        >
          <ListItemIcon>
            <PersonOutlineOutlined />
          </ListItemIcon>
          <ListItemText primary="Professor" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding={location.pathname !== '/student/list'}>
        <ListItemButton
          onClick={() => navigate('/student/list')}
          style={{
            backgroundColor:
              location.pathname === '/student/list' ? blue[50] : 'default',
          }}
        >
          <ListItemIcon>
            <SchoolOutlined />
          </ListItemIcon>
          <ListItemText primary="Aluno" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <DarkMode />
          </ListItemIcon>
          <Switch onChange={toggleMode} />
        </ListItemButton>
      </ListItem>
    </Sidebar>
  );
};
