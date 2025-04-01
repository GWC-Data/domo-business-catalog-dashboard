import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import reducers from "./reducer";

const initialState = {};
const middleware: any = [thunk];
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);
export default store;
