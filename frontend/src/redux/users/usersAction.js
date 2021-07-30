import axiosInstance from "../../axios";
import { FETCH_USER, LOGIN_USER, REGISTER_USER } from "./usersType";

export const loginUser = (user) => {
  return (dispatch) => {
    console.log(user);
    axiosInstance
      .post("/users/login", user)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: LOGIN_USER,
          payload: response.data,
        });
        dispatch({
          type: FETCH_USER,
          payload: response.data.user,
        });
        typeof window !== "undefined" &&
          localStorage.setItem("token", response.data.token);
        typeof window !== "undefined" &&
          localStorage.setItem("uid", response.data.uid);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const registerUser = (user) => {
  return (dispatch) => {
    axiosInstance
      .post("/users/register", user)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: REGISTER_USER,
          payload: response.data,
        });
        dispatch({
          type: FETCH_USER,
          payload: response.data.user,
        });
        typeof window !== "undefined" &&
          localStorage.setItem("uid", response.data.uid);
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const fetchUser = (uid, token) => {
  return (dispatch) => {
    axiosInstance
      .get(`/users/?user_id=${uid}`)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "FETCH_USER",
          payload: {
            ...response.data.user,
            token: token,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
