import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import * as ReduxForm from "redux-form";
import { user } from "./User";

export const rootReducer = combineReducers({
    user,
    form: ReduxForm.reducer,
    routing: routerReducer
});
