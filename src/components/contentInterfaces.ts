import { Action } from "../state/actions";
import { ContentItemState } from "../state/stateInterface";

export interface SharedContentProps {
  dispatch: React.Dispatch<Action>;
  contentItemState: ContentItemState;
  sectionId: string;
}