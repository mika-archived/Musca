import { ActionTypes } from "../actions/ActionTypes";
import { ISyncAction } from "../models/actions";
import { IAction } from "../models/IAction";
import { initialState, ISystemState } from "../states/ISystemState";

export function system(state: ISystemState = initialState, action: IAction): ISystemState {
  switch (action.type) {
    case ActionTypes.SYNCING_RSS:
      return Object.assign(state, {
        syncing: true
      } as ISystemState);

    case ActionTypes.SYNCED_RSS:
      const feeds = ((<ISyncAction> action));
      let contents = Object.assign(state.contents, {
        [feeds.website.id]: feeds.contents
      });
      return Object.assign(state, {
        contents,
        syncing: false
      } as ISystemState);

    default:
      return state;
  }
}
