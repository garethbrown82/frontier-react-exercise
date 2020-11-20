export enum ActionType {
  UpdateValue = 'UPDATE_VALUE',
  UpdateIsValid = 'UPDATE_ISVALID',
}

export const updateValue = (
  sectionId: string,
  contentId: string,
  value: string | number | boolean | Array<string>,
): UpdateValue => ({
  type: ActionType.UpdateValue,
  payload: {
    sectionId,
    contentId,
    value,
  },
});

export interface UpdateValue {
  type: ActionType.UpdateValue,
  payload: {
    sectionId: string;
    contentId: string;
    value: string | number | boolean | Array<string>;
  }
}

export const updateIsValid = (
  sectionId: string,
  contentId: string,
  isValid: boolean,
): UpdateIsValid => ({
  type: ActionType.UpdateIsValid,
  payload: {
    sectionId,
    contentId,
    isValid,
  },
});

export interface UpdateIsValid {
  type: ActionType.UpdateIsValid,
  payload: {
    sectionId: string;
    contentId: string;
    isValid: boolean;
  }
}

// Only one action at this point but this is a good way to define actions using TypeScript
// so correct typing can be determined by the conditionals in the reducer.
// As each action will have a different type.
export type Action = UpdateValue | UpdateIsValid;
