import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  card: {
    marginBottom: theme.spacing(5),
  },
}));
function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://firebasestorage.googleapis.com/v0/b/images-9642c.appspot.com/o/granat-e1548077344570-300x209.jpg?alt=media&token=af5bd4f0-3c1e-4f92-a36c-647e51305a4d"
          title="My Post"
        />

        <CardContent>
          <Typography gutterBottom variant="h5">
            My First Post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            aliquid perferendis, mollitia, delectus repudiandae corporis rem
            adipisci aspernatur aut doloremque nihil, porro quisquam dolore esse
            similique a. Dolorum quis officia, tenetur nemo voluptates vel velit
            sequi odio, nostrum ut odit! aliquid perferendis, mollitia, delectus
            repudiandae corporis rem adipisci aspernatur aut doloremque nihil,
            porro quisquam dolore esse similique a. Dolorum quis officia,
            tenetur nemo voluptates vel velit sequi odio, nostrum ut odit!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
