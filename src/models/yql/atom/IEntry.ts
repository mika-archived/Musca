import { ITypedContent } from "../shared/ITypedContent";
import { IAuthor } from "./IAuthor";
import { ILink } from "./ILink";
import { IThumbnail } from "./IThumbnail";

export interface IEntry {
  id: string;
  published: Date;
  updated: Date;
  author: string | IAuthor;
  link: ILink;
  url: string;
  title: ITypedContent | string;
  thumbnail: IThumbnail;
  content: ITypedContent;
}
