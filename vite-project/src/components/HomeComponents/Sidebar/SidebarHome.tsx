import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  // PaletteMode,
  //Switch,
} from "@mui/material";
import {
  AddHomeOutlined,
  //AccountBox,
  //Article,
  //DarkMode,
  Groups,
  Home,
  //Home,
  Person,
  PersonOutlineOutlined,
  //PostAdd,
  SchoolOutlined,
  //Settings,
  Storefront,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../Sidebar/Sidebar";
import { blue } from "@mui/material/colors";

// interface SidebarProps {
//   mode: PaletteMode;
//   setMode: Dispatch<SetStateAction<PaletteMode>>;
// }

export const SidebarMenu = () =>
  // position,
  // { mode, setMode },
  {
    // const toggleMode = () => {
    //   setMode(mode === 'light' ? 'dark' : 'light');
    // };
    const navigate = useNavigate();

    return (
      <Sidebar>
        <ListItem disablePadding={location.pathname !== "/home"}>
          <ListItemButton
            onClick={() => navigate("/home")}
            style={{
              borderRadius: "10px",
              backgroundColor:
                location.pathname === "/home" ? "#403d39" : "default",
            }}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        {/* <ListItem disablePadding>
        <ListItemButton onClick={() => navigate('/branch/list')}
        style={{
        borderRadius:"10px",
          backgroundColor:
            location.pathname === '/branch/list' ? "#403d39" : 'default',
        }}>
          <ListItemIcon>
            <PostAdd />
          </ListItemIcon>
          <ListItemText primary="Cadastro" />
        </ListItemButton>
      </ListItem> */}
        <ListItem disablePadding={location.pathname !== "/branch/list"}>
          <ListItemButton
            onClick={() => navigate("/branch/list")}
            style={{
              borderRadius: "10px",
              backgroundColor:
                location.pathname === "/branch/list" ? "#403d39" : "default",
            }}
          >
            <ListItemIcon>
              <AddHomeOutlined />
            </ListItemIcon>
            <ListItemText primary="Unidades" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding={location.pathname !== "/professor/list"}>
          <ListItemButton
            onClick={() => navigate("/professor/list")}
            style={{
              borderRadius: "10px",
              backgroundColor:
                location.pathname === "/professor/list" ? "#403d39" : "default",
            }}
          >
            <ListItemIcon>
              <PersonOutlineOutlined />
            </ListItemIcon>
            <ListItemText primary="Professor" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding={location.pathname !== "/student/list"}>
          <ListItemButton
            onClick={() => navigate("/student/list")}
            style={{
              borderRadius: "10px",
              backgroundColor:
                location.pathname === "/student/list" ? "#403d39" : "default",
            }}
          >
            <ListItemIcon>
              <SchoolOutlined />
            </ListItemIcon>
            <ListItemText primary="Aluno" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding={location.pathname !== "/friends"}>
          <ListItemButton
            onClick={() => navigate("/friends")}
            style={{
              borderRadius: "10px",
              backgroundColor:
                location.pathname === "/friends" ? "#403d39" : "default",
            }}
          >
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding={location.pathname !== "/groups"}>
          <ListItemButton
            onClick={() => navigate("/groups")}
            style={{
              borderRadius: "10px",
              backgroundColor:
                location.pathname === "/groups" ? "#403d39" : "default",
            }}
          >
            <ListItemIcon>
              <Groups />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding={location.pathname !== "/marketplace"}>
          <ListItemButton
            onClick={() => navigate("/marketplace")}
            style={{
              borderRadius: "10px",
              backgroundColor:
                location.pathname === "/marketplace" ? "#403d39" : "default",
            }}
          >
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding={location.pathname !== "/profile"}>
          <ListItemButton
            onClick={() => navigate("/profile")}
            style={{
              borderRadius: "10px",
              backgroundColor:
                location.pathname === "/profile" ? "#403d39" : "default",
            }}
          >
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      </Sidebar>
    );
  };
