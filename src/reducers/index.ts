import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { user } from "./User";

export const rootReducer = combineReducers({
    user,
    routing: routerReducer
});
