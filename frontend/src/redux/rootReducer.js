import { combineReducers } from "redux";
import postReducer from "./posts/postReducers";
import usersReducer from "./users/usersReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  user: usersReducer,
});

export default rootReducer;
