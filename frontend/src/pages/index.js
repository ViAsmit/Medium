import { Divider, ThemeProvider } from "@material-ui/core";
import React from "react";
import Header from "../components/header";
import Introdutory from "../components/introductory";
import BlogSection from "../sections/blogSection";
import TrendingSection from "../sections/trendingSection";
import theme from "../theme";

function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Introdutory />
        <TrendingSection />
        <br />
        <Divider />
        <br />
        <br />
        <BlogSection />
      </div>
    </ThemeProvider>
  );
}

export default IndexPage;
