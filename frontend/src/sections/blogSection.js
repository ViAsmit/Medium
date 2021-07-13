import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import BlogCard from "../components/blogCard";

const useStyle = makeStyles((theme) => ({
  root: {},
  blogs: {
    width: "60%",
  },
}));

function BlogSection() {
  const classes = useStyle();
  return (
    <Container>
      <Grid container direction="row" justifyContent="flex-start">
        <Grid className={classes.blogs}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Grid>
      </Grid>
    </Container>
  );
}
export default BlogSection;
