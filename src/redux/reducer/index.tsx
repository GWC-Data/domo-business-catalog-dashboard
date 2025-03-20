import {combineReducers} from "redux";
import { userReducer } from "./Users";

 const reducers = combineReducers({
    user: userReducer
 });

 export default reducers;