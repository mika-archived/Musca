import { ITypedContent } from "../shared/ITypedContent";
import { IContent } from "./IContent";
import { ICredit } from "./ICredit";
import { IGuid } from "./IGuid";
import { ISource } from "./ISource";

export interface IItem {
  title: string;
  description: string;
  link: string;
  pubDate: Date;
  source: ISource;
  guid: IGuid;
  content: IContent;
  text: ITypedContent;
  credit: ICredit;
}
