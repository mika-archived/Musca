import { initialState as systemInitialState, ISystemState } from "./ISystemState";
import { initialState as userInitialState, IUserState } from "./IUserState";

export interface IRootState {
  system: ISystemState;
  user: IUserState;
}

export const initialState: IRootState = {
  system: systemInitialState,
  user: userInitialState,
};
