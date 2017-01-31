import { IEntry } from "./atom/IEntry";
import { IItem } from "./rss/IItem";

export interface IResult {
  entry: IEntry[];
  item: IItem[];
}
