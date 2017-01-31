// Yahoo Query Language
import "whatwg-fetch";

import { IYQL } from "./yql/IYQL";

export class YQL {
  public static async query(url: string): Promise<IYQL> {
    let query = "";
    if (url.endsWith(".atom")) {
      query = `SELECT * FROM atom WHERE url='${url}'`;
    } else {
      query = `SELECT * FROM rss WHERE url='${url}'`;
    }
    const response = await fetch(`https://query.yahooapis.com/v1/public/yql?q=${query}&format=json`);
    return await response.json();
  }
}
