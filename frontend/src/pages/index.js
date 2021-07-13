import { Divider } from "@material-ui/core";
import React from "react";
import Header from "../components/header";
import Introdutory from "../components/introductory";
import BlogSection from "../sections/blogSection";
import TrendingSection from "../sections/trendingSection";

function IndexPage() {
  return (
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
  );
}

export default IndexPage;
