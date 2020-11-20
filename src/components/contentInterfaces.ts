import { Action } from "../state/actions";

export interface WithDispatch {
  dispatch: React.Dispatch<Action>;
}