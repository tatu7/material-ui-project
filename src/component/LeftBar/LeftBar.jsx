import { Container, makeStyles, Typography } from "@material-ui/core";
import {
  Bookmark,
  ExitToApp,
  Home,
  ListAlt,
  Person,
  PhotoCamera,
  PlayCircleOutline,
  Settings,
  Storefront,
  TabletMac,
} from "@material-ui/icons";
import React from "react";
const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    top: "45px",
    paddingTop: theme.spacing(4),

    height: "100vh",
    color: "theme.palette.primary.main ",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#333",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  text: {
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
}));
function LeftBar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography variant="span" className={classes.text}>
          HomePage
        </Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography variant="span" className={classes.text}>
          Friends
        </Typography>
      </div>
      <div className={classes.item}>
        <ListAlt className={classes.icon} />
        <Typography variant="span" className={classes.text}>
          List
        </Typography>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.icon} />
        <Typography variant="span" className={classes.text}>
          Camera
        </Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Typography variant="span" className={classes.text}>
          Videos
        </Typography>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography variant="span" className={classes.text}>
          Apps
        </Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Typography variant="span" className={classes.text}>
          Collections
        </Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography variant="span" className={classes.text}>
          Collections
        </Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography variant="span" className={classes.text}>
          Market Place
        </Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography variant="span" className={classes.text}>
          Setting
        </Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography variant="span" className={classes.text}>
          LogOut
        </Typography>
      </div>
    </Container>
  );
}

export default LeftBar;
