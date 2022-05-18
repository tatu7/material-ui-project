import {
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import React from "react";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(8),
    position: "sticky",
    top: "10px",
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
}));
function RightBar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant="h6" className={classes.title} gutterBottom>
        Onlinne Friends
      </Typography>
      <AvatarGroup max={5} style={{ marginBottom: 20 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar alt="Cindy Baker" src="" />
        <Avatar
          alt="Agnes Walker"
          src="https://material-ui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>
      <Typography variant="h6" className={classes.title} gutterBottom>
        {" "}
        Galery
      </Typography>
      <ImageList
        className={classes.images}
        cols={3}
        rowHeight={85}
        style={{ marginBottom: 20, width: "80%" }}
      >
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/breakfast.jpg"
            alt="ss"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/burgers.jpg"
            alt="ss"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/camera.jpg"
            alt="ss"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/morning.jpg"
            alt="ss"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/hats.jpg"
            alt="ss"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://material-ui.com/static/images/image-list/vegetables.jpg"
            alt="ss"
          />
        </ImageListItem>
      </ImageList>
      <Typography variant="h6" className={classes.title} gutterBottom>
        Categories
      </Typography>
      <Link href="#" className={classes.link} variant="body2">
        Sport
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Food
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Movie
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Science
      </Link>
    </Container>
  );
}

export default RightBar;
