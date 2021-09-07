import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Popover,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import theme from "../../theme";
import Header from "../../components/header";
import person from "../../images/person.jpeg";
import ShareIcon from "@material-ui/icons/Share";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { convertDateToHuman } from "../../utils/date";
import ProfileModal from "../../components/ProfileModal";
import { connect } from "react-redux";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    width: "45%",
  },
  title: {
    fontWeight: "910",
  },
  name: {
    display: "flex",
    fontSize: 14,
    fontWeight: "bolder",
    paddingLeft: "10px",
  },
  number: {
    paddingTop: theme.spacing(1),
    fontSize: "30px",
    fontWeight: "800",
    color: "#D3D3D3",
  },
  pos: {
    paddingLeft: theme.spacing(2),
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    marginLeft: theme.spacing(1),
    padding: theme.spacing(1),
  },
}));

function PostPage(props) {
  const classes = useStyle();
  console.log(props.id);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const post = props.posts.find((post) => post._id === props.id);

  console.log(props.posts);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        {post !== null && (
          <Container className={classes.root}>
            <Typography variant="h3" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" gutterBottom style={{ color: "grey" }}>
              {post.text}
            </Typography>
            <Grid container direction="row" justifyContent="space-between">
              <Grid container direction="row" xs={6} alignItems="center">
                <Avatar
                  alt="Asmit Vimal"
                  src={person}
                  className={classes.avatar}
                />
                <Typography
                  color="secondary"
                  className={classes.name}
                  aria-owns={open ? "mouse-over-popover" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                >
                  {post.author.name}
                </Typography>
                <Popover
                  id="mouse-over-popover"
                  className={classes.popover}
                  classes={{
                    paper: classes.paper,
                  }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                >
                  <ProfileModal author={post.author} />
                </Popover>
                <Typography
                  className={classes.pos}
                  color="textSecondary"
                  variant="body2"
                >
                  {convertDateToHuman(post.date)} - 3 min read
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                xs={6}
                alignItems="center"
                justifyContent="flex-end"
              >
                <ShareIcon style={{ fontSize: "25px" }} />
                <BookmarkBorderIcon
                  style={{ fontSize: "25px", paddingLeft: "15px" }}
                />
              </Grid>
            </Grid>
            <br />
            <Card elevation={0}>
              <CardActionArea>
                <CardMedia component="img" ale="image" image={person} />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.description}
                </Typography>
              </CardContent>
            </Card>
          </Container>
        )}
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps, null)(PostPage);
