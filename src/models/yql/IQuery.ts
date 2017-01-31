import { IResult } from "./IResult";

export interface IQuery {
  count: number;
  created: Date;
  lang: string;
  results: IResult;
}
