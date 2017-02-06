import { IAction } from "../IAction";
import { IRss } from "../IRss";

export interface ISyncAction extends IAction {
  contents: any; // tslint:disable-line:no-any
  syncing: boolean;
  website: IRss;
}
