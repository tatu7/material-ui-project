import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Added from "./component/Add/Add";
import Feed from "./component/Feed/Feed";
import LeftBar from "./component/LeftBar/LeftBar";
import Navbar from "./component/Navbar/Navbar";
import RightBar from "./component/RightBar/RightBar";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightBar />{" "}
        </Grid>
      </Grid>
      <Added />
    </div>
  );
}

export default App;
