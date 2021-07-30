import React, { useEffect } from "react";
import {
  Container,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import TrendingCards from "../components/trendingCards";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/posts/postActions";

const useStyle = makeStyles((theme) => ({
  trending: {
    display: "flex",
    flexWrap: "wrap",
  },
  heading: {
    fontWeight: "800 !important",
    fontSize: "10px",
  },
  number: {
    fontWeight: "800",
    fontSize: "15px",
  },
}));

function TrendingSection({ posts, updatePosts }) {
  const classes = useStyle();

  useEffect(() => {
    updatePosts();
  }, [updatePosts]);
  return (
    <div>
      <Container style={{ marginTop: "20px" }}>
        <ListItem>
          <ListItemIcon style={{ minWidth: "30px" }}>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText className={classes.number} disableTypography>
            TRENDING ON MEDIUM
          </ListItemText>
        </ListItem>
      </Container>
      <Container className={classes.trending}>
        {posts.map((post, idx) => (
          <TrendingCards key={idx} post={post} />
        ))}
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePosts: async () => await dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrendingSection);
