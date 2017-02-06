export interface ISystemState {
  contents: Object;
  syncing: boolean;
}

export const initialState: ISystemState = {
  contents: {},
  syncing: false
};
