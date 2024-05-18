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
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../Sidebar/Sidebar';

interface SidebarProps {
  mode: PaletteMode;
  setMode: Dispatch<SetStateAction<PaletteMode>>;
}

export const SidebarRegister: React.FC<SidebarProps> = ({ mode, setMode }) => {
  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };
  const navigate = useNavigate();

  return (
    <Sidebar>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate('/home')}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate('/branch/list')}>
          <ListItemIcon>
            <AddHomeOutlined />
          </ListItemIcon>
          <ListItemText primary="Unidades" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate('/professors/list')}>
          <ListItemIcon>
            <PersonOutlineOutlined />
          </ListItemIcon>
          <ListItemText primary="Professor" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate('/student/list')}>
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
