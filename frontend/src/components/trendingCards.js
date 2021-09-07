import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import person from "../images/person.jpeg";
import {
  Avatar,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { convertDateToHuman } from "../utils/date";
import { Link } from "gatsby";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
  },
  title: {
    fontWeight: "910",
  },
  name: {
    fontSize: 14,
    fontWeight: "bolder",
  },
  avatar: {
    height: theme.spacing(3),
    width: theme.spacing(3),
  },
  number: {
    paddingTop: theme.spacing(1),
    fontSize: "30px",
    fontWeight: "800",
    color: "#D3D3D3",
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
}));

function TrendingCard({ post }) {
  const classes = useStyles();

  return (
    <Grid container item xs={4}>
      <Typography className={classes.number}>01</Typography>
      <Card className={classes.root} elevation={0}>
        <Link
          to={`posts/${post._id}`}
          state={{ post: post }}
          className={classes.link}
        >
          <CardContent>
            <ListItem button style={{ padding: "0" }}>
              <ListItemAvatar style={{ minWidth: "30px" }}>
                <Avatar
                  alt="Asmit Vimal"
                  src={person}
                  className={classes.avatar}
                />
              </ListItemAvatar>
              <ListItemText
                primary={post.author.name}
                className={classes.name}
              />
            </ListItem>
            <Typography className={classes.title} gutterBottom>
              {post.text}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {convertDateToHuman(post.date)} - 3 min read
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  );
}

export default TrendingCard;
