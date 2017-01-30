import { ActionTypes } from "../actions/ActionTypes";
import { IRegisterAction } from "../models/actions";
import { IAction } from "../models/IAction";
import { initialState, IUserState } from "../states/IUserState";

export function user(state: IUserState = initialState, action: IAction): IUserState {
  switch (action.type) {
    case ActionTypes.REGISTER_NEW_SITE:
      return {
        websites: Object.assign(state.websites, (<IRegisterAction> action).rss)
      } as IUserState;

    default:
      return state;
  }
}
