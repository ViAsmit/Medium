import {
  Button,
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import BlogCard from "../components/blogCard";

const useStyle = makeStyles((theme) => ({
  root: {},
  blogs: {
    width: "60%",
  },
  tags: {
    // display: "flex",
    width: "35%",
    "& p": {
      display: "inline-block",
      margin: theme.spacing(1),
      color: "grey",
    },
  },
  buttons: {
    margin: theme.spacing(0.5),
    textTransform: "none",
    color: "grey",
  },
  tagTitle: {
    fontSize: "15px",
    fontWeight: "900",
  },
}));

function BlogSection() {
  const classes = useStyle();
  return (
    <Container>
      <Grid container direction="row" justifyContent="space-around">
        <Grid className={classes.blogs}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Grid>
        <Grid className={classes.tags}>
          <Typography variant="body1" className={classes.tagTitle}>
            DISCOVER MORE OF WHAT MATTERS TO YOU
          </Typography>
          <br />
          <br />
          <Button variant="outlined" className={classes.buttons}>
            Self
          </Button>
          <Button variant="outlined" className={classes.buttons}>
            Relationships
          </Button>
          <Button variant="outlined" className={classes.buttons}>
            Data Science
          </Button>
          <Button variant="outlined" className={classes.buttons}>
            Programming
          </Button>
          <Button variant="outlined" className={classes.buttons}>
            Productivity
          </Button>
          <Button variant="outlined" className={classes.buttons}>
            Javascript
          </Button>
          <Button variant="outlined" className={classes.buttons}>
            Machine Learning
          </Button>
          <Button variant="outlined" className={classes.buttons}>
            Politics
          </Button>
          <br />
          <br />
          <Typography variant="body1" style={{ color: "green" }}>
            See all Topics
          </Typography>
          <br />
          <br />
          <Divider />
          <br />
          <br />
          <p>Help</p>
          <p>Status</p>
          <p>Status</p>
          <p>Writers</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Privacy</p>
          <p>Terms</p>
          <p>About</p>
        </Grid>
      </Grid>
    </Container>
  );
}
export default BlogSection;
