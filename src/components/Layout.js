import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useHistory, useLocation } from "react-router-dom";
import React from "react";

export default function Layout({ children }) {
  const menuItems = [
    {
      text: "My Books",
      icon: <SubjectOutlined color="secondary" />,
      path: "/books",
    },
    {
      text: "Add Book",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];
  const drawerWidth = 240;
  const classes = {
    page: {
      background: "#f9f9f9",
      width: "100%",
    },
    drawer: {
      width: drawerWidth,
      "& .MuiDrawer-paper": {
        width: drawerWidth,
      },
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
  };
  const history = useHistory();
  const location = useLocation();

  return (
    <Box sx={classes.root}>
      <Drawer sx={classes.drawer} variant="permanent" anchor="left">
        <div>
          <Typography variant="h5">Book List</Typography>
        </div>

        {/* List / Links */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              sx={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div style={classes.page}>{children}</div>
    </Box>
  );
}
