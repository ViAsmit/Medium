import { combineReducers } from "redux";
import postReducer from "./posts/postReducers";

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;
