import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Code, Mail, Notifications, Search } from "@material-ui/icons";
import React, { useState } from "react";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1.2),
  },
  icons: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    gap: "10px",
  },
  searchIcon: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
function Navbar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="fixed" style={{ top: 0 }}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.logoLg} variant="h5">
          Jo`raqo`zi
        </Typography>
        <Typography className={classes.logoSm} variant="h5">
          <Code />
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase className={classes.input} placeholder="Search..." />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>

        <div className={classes.icons}>
          <Search
            className={classes.searchIcon}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={2} color="secondary">
            <Mail />
          </Badge>
          <Badge badgeContent={5} color="secondary">
            <Notifications />
          </Badge>
          <Avatar src="https://reqres.in/img/faces/8-image.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
