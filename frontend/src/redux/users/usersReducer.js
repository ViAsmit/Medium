import {
  FETCH_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "./usersType";

const initialState = {
  uid: "",
  token: "",
  name: "",
  email: "",
  profileImage: "",
  followers: [],
  following: [],
  isLoggedIn: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        uid: action.payload.uid,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        name: "",
        email: "",
        uid: "",
        token: "",
        isLoggedIn: false,
      };
    case REGISTER_USER:
      return {
        ...state,
        uid: action.payload.uid,
        token: action.payload.token,
        isLoggedIn: true,
      };

    case FETCH_USER:
      return action.payload.token
        ? {
            ...state,
            uid: action.payload._id,
            token: action.payload.token,
            name: action.payload.name,
            email: action.payload.email,
            profileImage: action.payload.profile_image,
            followers: action.payload.followers,
            following: action.payload.following ? action.payload.following : [],
            isLoggedIn: true,
          }
        : {
            ...state,
            uid: action.payload._id,
            name: action.payload.name,
            email: action.payload.email,
            profileImage: action.payload.profile_image,
            followers: action.payload.followers,
            following: action.payload.following ? action.payload.following : [],
            isLoggedIn: true,
          };
    default:
      return state;
  }
};

export default usersReducer;
