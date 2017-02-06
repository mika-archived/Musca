import * as LzString from "lz-string";

// tslint:disable:no-any
export function exportLocalStorage(): string {
  const ls = JSON.parse(localStorage.getItem("redux"));
  return LzString.compressToEncodedURIComponent(JSON.stringify(ls.user));
}

export function importLocalStorage(str: string): any {
  const ls = LzString.decompressFromEncodedURIComponent(str);
  return JSON.parse(ls);
}

