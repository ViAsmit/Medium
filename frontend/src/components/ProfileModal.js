import {
  Avatar,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import person from "../images/person.jpeg";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "250px",
  },
  name: {
    fontWeight: "900",
    paddingLeft: theme.spacing(2),
  },
  card: {
    padding: 0,
    margin: 0,
  },
  buttons: {
    borderRadius: "25px",
    color: "white",
  },
}));

function ProfileModal({ author }) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <CardContent className={classes.card}>
        <ListItem button style={{ padding: "0", paddingBottom: "5px" }}>
          <ListItemAvatar style={{ minWidth: "30px" }}>
            <Avatar alt="Asmit Vimal" src={person} className={classes.avatar} />
          </ListItemAvatar>
          <ListItemText primary={author.name} className={classes.name} />
        </ListItem>
        <Typography className={classes.title} varaint="body2" gutterBottom>
          {"MERN DEVELOPER | Codechef | Codeforces"}
        </Typography>
        <Divider />
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{ padding: "10px", paddingBottom: 0 }}
        >
          <Typography variant="caption" color="textSecondary">
            {author.followers.length} Followers
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            className={classes.buttons}
          >
            Follow
          </Button>
        </Grid>
      </CardContent>
    </div>
  );
}

export default ProfileModal;
