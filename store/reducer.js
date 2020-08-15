import { combineReducers } from "redux";
import initialReducer from "./reducer/initial";

const reducer = combineReducers({
  initial: initialReducer,
});
export default reducer;
