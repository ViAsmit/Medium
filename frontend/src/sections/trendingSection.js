import React from "react";
import {
  Container,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import TrendingCards from "../components/trendingCards";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

const useStyle = makeStyles((theme) => ({
  trending: {
    display: "flex",
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

function TrendingSection() {
  const classes = useStyle();
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
        <TrendingCards />
        <TrendingCards />
        <TrendingCards />
      </Container>
      <Container className={classes.trending}>
        <TrendingCards />
        <TrendingCards />
        <TrendingCards />
      </Container>
    </div>
  );
}

export default TrendingSection;
