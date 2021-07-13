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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
  },
  title: {
    fontWeight: "900",
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
}));

function TrendingCard() {
  const classes = useStyles();

  return (
    <Grid container>
      <Typography className={classes.number}>01</Typography>
      <Card className={classes.root} elevation={0}>
        <CardContent>
          <ListItem button style={{ padding: "0" }}>
            <ListItemAvatar style={{ minWidth: "30px" }}>
              <Avatar
                alt="Asmit Vimal"
                src={person}
                className={classes.avatar}
              />
            </ListItemAvatar>
            <ListItemText primary="Asmit Vimal" className={classes.name} />
          </ListItem>
          <Typography className={classes.title} gutterBottom>
            5 solved end-to-end Data Science Projects in Python
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            July 10 - 3 min read
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default TrendingCard;
