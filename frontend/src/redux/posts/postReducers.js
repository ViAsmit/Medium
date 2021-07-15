import { FETCH_POSTS } from "./postTypes";

const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.posts;
    default:
      return state;
  }
};

export default postReducer;
