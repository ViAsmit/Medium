import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import person from "../images/person.jpeg";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: theme.spacing(2),
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "21px",
    fontWeight: "900",
  },
  cover: {
    width: 250,
    alignItems: "right",
  },
  sub: {
    fontSize: "15px",
  },
}));

function BlogCard({ post }) {
  const classes = useStyles();
  // console.log(post);

  return (
    <Card className={classes.root} elevation={0}>
      <Grid container direction="row">
        <Grid container item xs={8} direction="column">
          <CardContent className={classes.content}>
            <Typography variant="h6" className={classes.title}>
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {post.text}
            </Typography>
            <div style={{ width: "90%", display: "inline-block" }}>
              <Typography className={classes.sub} color="textSecondary">
                May 30 - 6 min read ★
              </Typography>
            </div>
            <BookmarkBorderIcon />
          </CardContent>
        </Grid>
        <Grid container justifyContent="flex-end" item xs={4}>
          <CardMedia
            className={classes.cover}
            image={person}
            title="Live from space album cover"
            alt="image"
          />
        </Grid>
      </Grid>
    </Card>
  );
}

export default BlogCard;
