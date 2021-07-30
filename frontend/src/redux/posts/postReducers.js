import { FETCH_POSTS } from "./postTypes";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
