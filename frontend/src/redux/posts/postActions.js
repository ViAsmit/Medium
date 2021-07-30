import { FETCH_POSTS } from "./postTypes";
import axiosInstance from "../../axios";

export const fetchPosts = () => {
  return (dispatch) => {
    axiosInstance
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
