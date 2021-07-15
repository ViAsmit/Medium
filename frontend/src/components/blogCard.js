import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import person from "../images/person.jpeg";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

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
  },
  sub: {
    fontSize: "15px",
  },
}));

function BlogCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h6" className={classes.title}>
            This Long Awaited Technology May Finally Change The World
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Solid-state batteries are posied to emerge in the coming years.
          </Typography>
          <div style={{ width: "90%", display: "inline-block" }}>
            <Typography className={classes.sub} color="textSecondary">
              May 30 - 6 min read ★
            </Typography>
          </div>
          <BookmarkBorderIcon />
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={person}
        title="Live from space album cover"
        alt="image"
      />
    </Card>
  );
}

export default BlogCard;
