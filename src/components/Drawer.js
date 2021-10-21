import {
  Box,
  Divider,
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";

import { styles } from "../theme";

const sx = (drawerWidth) => ({
  mobileSx: {
    display: { xs: "block", md: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
    },
  },
  permanentSx: {
    display: { xs: "none", md: "block" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
    },
  },
});

const ListEntry = ({
  label,
  icon,
  right = null,
  to = null,
  onClick = null,
}) => (
  <ListItem>
    <ListItemButton component={RouterLink} to={to} onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={label} />
      {right}
    </ListItemButton>
  </ListItem>
);

const DrawerContent = ({ children, mobileClose }) => (
  <List dense>
    <ListSubheader id="site-functions">Site functions</ListSubheader>

    <ListEntry
      label="Bookmarks"
      icon={<BookmarkIcon />}
      to="/bookmarks"
      onClick={mobileClose}
    />
    <ListEntry
      label="Timetable"
      icon={<CalendarTodayIcon />}
      to="/timetable"
      onClick={mobileClose}
    />
    <ListEntry
      label="Settings"
      icon={<SettingsIcon />}
      to="/settings"
      onClick={mobileClose}
    />

    <ListSubheader id="search">Search</ListSubheader>

    <ListItem>{children}</ListItem>
  </List>
);

const Drawer = ({ children, navControl, mobile }) => {
  const [expandNav, setExpandNav] = navControl;

  const classes = styles();
  const drawerWidth = classes.drawerWidth;
  const { mobileSx, permanentSx } = sx(drawerWidth);

  const handleDrawerToggle = () => {
    setExpandNav(!expandNav);
  };

  return (
    <Box sx={classes.drawer} aria-label="search">
      <MuiDrawer
        variant={mobile ? "temporary" : "permanent"}
        open={mobile ? expandNav : true}
        onClose={mobile ? handleDrawerToggle : null}
        ModalProps={{
          keepMounted: true,
        }}
        sx={mobile ? mobileSx : permanentSx}
      >
        <Toolbar />
        <Divider />
        <DrawerContent
          children={children}
          mobileClose={mobile ? handleDrawerToggle : null}
        />
      </MuiDrawer>
    </Box>
  );
};

export { Drawer };
