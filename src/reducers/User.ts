import { ActionTypes } from "../actions/ActionTypes";
import { IImportAction, IRegisterAction } from "../models/actions";
import { IAction } from "../models/IAction";
import { initialState, IUserState } from "../states/IUserState";

export function user(state: IUserState = initialState, action: IAction): IUserState {
  let websites;
  switch (action.type) {
    case ActionTypes.REGISTER_NEW_SITE:
      websites = state.websites;
      websites.push((<IRegisterAction> action).rss);
      return {
        websites
      } as IUserState;

    case ActionTypes.IMPORT_CONFIGURATION:
      websites = ((<IImportAction> action).json).websites;
      return {
        websites
      } as IUserState;
    default:
      return state;
  }
}
