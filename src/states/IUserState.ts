import { IRss } from "../models/IRss";

export interface IUserState {
  websites: IRss[];
};

export const initialState: IUserState = {
  websites: []
};
