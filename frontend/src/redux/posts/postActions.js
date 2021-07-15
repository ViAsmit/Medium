import { FETCH_POSTS } from "./postTypes";
import axios from "axios";

export const fetchPosts = () => {
  return (dispatch) => {
    axios
      .get("/posts")
      .then((response) => {
        dispatch({
          type: FETCH_POSTS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
