import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Box, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  linkButtonHover: {
    transition: "all .5s",
    "&:hover": {
      background: "#2DDE8D",
      color: "#fff",
    },
  },
  list: {
    padding: "0px",
  },
}));

export default function MobileNavigation() {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      component="div"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={clsx(classes.list)}>
        {route.map((item, index) => (
          <Link href={item.to} key={index}>
            <ListItem button className={clsx(classes.linkButtonHover)}>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="div">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            edge="end"
            className={clsx(classes.menuButton)}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}

const route = [
  { name: "Host your Home", to: "/" },
  { name: "Host your experience", to: "/" },
  { name: "Help", to: "/" },
  { name: "Login", to: "/" },
  { name: "Sign up", to: "/" },
];
