import * as uuidV4 from "uuid/v4";

import { IImportAction, IRegisterAction } from "../models/actions";
import { IAction } from "../models/IAction";
import { IRss } from "../models/IRss";
import { ActionTypes } from "./ActionTypes";

export interface registerFunc { (name: string, url: string): IAction; } // tslint:disable-line:interface-name class-name
export function register(name: string, url: string): IAction {
  return {
    rss: {
      id: uuidV4(),
      name,
      url
    } as IRss,
    type: ActionTypes.REGISTER_NEW_SITE,
  } as IRegisterAction;
}

export interface _importFunc { (json: any): IAction; } // tslint:disable-line
export function _import(json: any): IAction { // tslint:disable-line:no-any
  return {
    json,
    type: ActionTypes.IMPORT_CONFIGURATION
  } as IImportAction;
}
