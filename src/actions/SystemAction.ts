import { ISyncAction } from "../models/actions";
import { IAction } from "../models/IAction";
import { IRss } from "../models/IRss";
import { YQL } from "../models/YQL";
import { IYQL } from "../models/yql/IYQL";
import { IRootState } from "../states/IRootState";
import { ActionTypes } from "./ActionTypes";

// tslint:disable:no-any

function syncingRss(website: IRss): ISyncAction {
  return {
    contents: null,
    syncing: true,
    website,
    type: ActionTypes.SYNCING_RSS
  } as ISyncAction;
}

function syncedRss(obj: IYQL, website: IRss): ISyncAction {
  return {
    contents: obj.query.results,
    syncing: false,
    website,
    type: ActionTypes.SYNCED_RSS
  } as ISyncAction;
}

function syncRss(website: IRss): any {
  return (dispatch) => {
    dispatch(syncingRss(website));
    return YQL.query(website.url)
      .then((w) => dispatch(syncedRss(w, website)));
  };
}

function shouldSyncRss(state: IRootState, website: IRss): boolean {
  if (state.system.contents[website.id] === undefined) {
    return true;
  }
  return false;
}

// tslint:disable
export interface syncFunc { (website: IRss): IAction; }
export function sync(website: IRss): any {
  return (dispatch, getState) => {
    if (shouldSyncRss(getState(), website)) {
      return dispatch(syncRss(website));
    } else {
      return Promise.resolve();
    }
  };
}
