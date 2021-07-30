import { Divider, ThemeProvider } from "@material-ui/core";
import React, { useEffect } from "react";
import Header from "../components/header";
import Introdutory from "../components/introductory";
import { fetchUser } from "../redux/users/usersAction";
import BlogSection from "../sections/blogSection";
import TrendingSection from "../sections/trendingSection";
import theme from "../theme";
import { connect } from "react-redux";

function IndexPage({ user, updateUser }) {
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("uid") !== null) {
      const uid = localStorage.getItem("uid");
      const token = localStorage.getItem("token");
      console.log(uid, token);
      updateUser(uid, token);
    }
  }, [updateUser]);

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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: async (uid, token) => dispatch(fetchUser(uid, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
