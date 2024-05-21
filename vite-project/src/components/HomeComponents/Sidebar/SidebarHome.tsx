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
  //AccountBox,
  //Article,
  DarkMode,
  Groups,
  Home,
  //Home,
  Person,
  PersonOutlineOutlined,
  //PostAdd,
  SchoolOutlined,
  //Settings,
  Storefront,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../Sidebar/Sidebar';
import { blue } from '@mui/material/colors';

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
      <ListItem disablePadding={location.pathname !== '/home'}>
        <ListItemButton
          onClick={() => navigate('/home')}
          style={{
            backgroundColor:
              location.pathname === '/home' ? blue[50] : 'default',
          }}
        >
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>
      </ListItem>
      {/* <ListItem disablePadding>
        <ListItemButton onClick={() => navigate('/branch/list')}
        style={{
          backgroundColor:
            location.pathname === '/branch/list' ? blue[50] : 'default',
        }}>
          <ListItemIcon>
            <PostAdd />
          </ListItemIcon>
          <ListItemText primary="Cadastro" />
        </ListItemButton>
      </ListItem> */}
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
      <ListItem disablePadding={location.pathname !== '/friends'}>
        <ListItemButton
          onClick={() => navigate('/friends')}
          style={{
            backgroundColor:
              location.pathname === '/friends' ? blue[50] : 'default',
          }}
        >
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding={location.pathname !== '/groups'}>
        <ListItemButton
          onClick={() => navigate('/groups')}
          style={{
            backgroundColor:
              location.pathname === '/groups' ? blue[50] : 'default',
          }}
        >
          <ListItemIcon>
            <Groups />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding={location.pathname !== '/marketplace'}>
        <ListItemButton
          onClick={() => navigate('/marketplace')}
          style={{
            backgroundColor:
              location.pathname === '/marketplace' ? blue[50] : 'default',
          }}
        >
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText primary="Marketplace" />
        </ListItemButton>
      </ListItem>
      {/* <ListItem disablePadding>
        <ListItemButton
          onClick={() => navigate('/settings')}
          style={{
            backgroundColor:
              location.pathname === '/settings' ? blue[50] : 'default',
          }}
        >
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </ListItem> */}
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
