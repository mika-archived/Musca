import { initialState as userInitialState, IUserState } from "./IUserState";

export interface IRootState {
  user: IUserState;
}

export const initialState: IRootState = {
  user: userInitialState
};
