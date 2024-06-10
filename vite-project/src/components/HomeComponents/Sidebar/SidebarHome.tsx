import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  PaletteMode,
} from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import {
  AddHomeOutlined,
  PersonOutlineOutlined,
  SchoolOutlined,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../Sidebar/Sidebar';
import { blue } from '@mui/material/colors';
import { useSession } from '../../../context/SessionContext';

interface SidebarProps {
  mode: PaletteMode;
  setMode: Dispatch<SetStateAction<PaletteMode>>;
}

export const SidebarMenu: React.FC<SidebarProps> = () => {
  const navigate = useNavigate();
  const { accountType } = useSession();

  return (
    <Sidebar>
      {accountType === 'headoffice' && (
        <ListItem disablePadding={location.pathname.includes('/branch/list')}>
          <ListItemButton
            onClick={() => navigate('/branch/list')}
            style={{
              backgroundColor: location.pathname.includes('/branch/list')
                ? blue[50]
                : 'default',
            }}
          >
            <ListItemIcon>
              <AddHomeOutlined />
            </ListItemIcon>
            <ListItemText primary="Unidades" />
          </ListItemButton>
        </ListItem>
      )}
      {accountType === 'branch' && (
        <>
          <ListItem disablePadding={location.pathname !== '/professor/list'}>
            <ListItemButton
              onClick={() => navigate('/professor/list')}
              style={{
                backgroundColor:
                  location.pathname === '/professor/list'
                    ? blue[50]
                    : 'default',
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
        </>
      )}
      {/* {(accountType === 'student' || accountType === 'professor') && (
        <>
          <ListItem disablePadding={location.pathname.includes('home')}>
            <ListItemButton
              onClick={() => navigate(`/home/${accountType}`)}
              style={{
                backgroundColor: location.pathname.includes('home')
                  ? blue[50]
                  : 'default',
              }}
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
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
        </>
      )} 
       <ListItem disablePadding={location.pathname !== '/profile'}>
        <ListItemButton
          onClick={() => navigate('/profile')}
          style={{
            backgroundColor:
              location.pathname === '/profile' ? blue[50] : 'default',
          }}
        >
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </ListItem> */}
    </Sidebar>
  );
};
