import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import * as ReduxForm from "redux-form";
import { system } from "./System";
import { user } from "./User";

export const rootReducer = combineReducers({
    system,
    user,
    form: ReduxForm.reducer,
    routing: routerReducer
});
