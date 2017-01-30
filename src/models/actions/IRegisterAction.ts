import { IAction } from "../IAction";
import { IRss } from "../IRss";

export interface IRegisterAction extends IAction {
  rss: IRss;
}
