import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import reducers from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const middleware: any = [thunk];
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
