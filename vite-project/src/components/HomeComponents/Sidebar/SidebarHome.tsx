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
  //AccountBox,
  //Article,
  DarkMode,
  Groups,
  //Home,
  Person,
  PostAdd,
  Settings,
  Storefront,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../Sidebar/Sidebar';

interface SidebarProps {
  mode: PaletteMode;
  setMode: Dispatch<SetStateAction<PaletteMode>>;
}

export const SidebarMenu: React.FC<SidebarProps> = ({ mode, setMode }) => {
  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };
  const navigate = useNavigate();

  return (
    <Sidebar>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate('/groups')}>
          <ListItemIcon>
            <Groups />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate('/marketplace')}>
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate('/register')}>
          <ListItemIcon>
            <PostAdd />
          </ListItemIcon>
          <ListItemText primary="Cadastro" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate('/friends')}>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate('/settings')}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
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
