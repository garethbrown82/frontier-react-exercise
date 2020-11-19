import { updateValue, ActionType, UpdateValue } from './actions';
import { State } from './stateInterface';
import { userInputReducer } from './userInputReducer';
import { createContent } from './utilities';

describe('actions', () => {
  it('creates an action to update a value', () => {
    // These values are implicitly typed
    const sectionId = 'test-section-id';
    const contentId = 'test-content-id';
    const value = 'test-value';

    const expectedAction: UpdateValue = {
      type: ActionType.UpdateValue,
      payload: {
        sectionId,
        contentId,
        value,
      },
    };

    expect(updateValue(sectionId, contentId, value)).toEqual(expectedAction);
  });
});

describe('userInputReducer', () => {
  const initialState: State = {
    userDetails: {
      sections: [],
    },
  };

  it('sets the initial state', () => {
    expect(userInputReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('correctly update user input', () => {
    const sectionId = 'section-id1';
    const contentId1 = 'contentId1';
    const contentId2 = 'contentId2';
    const contentId3 = 'contentId3';
    
    const initialState: State = {
      userDetails: {
        sections: [
          {
            id: sectionId,
            content: [
              createContent(contentId1, 'value1'),
              createContent(contentId2, 'value2'),
              createContent(contentId3, 'value3'),
            ],
          },
        ],
      },
    };

    const expectedState: State = {
      userDetails: {
        sections: [
          {
            id: sectionId,
            content: [
              createContent(contentId1, 'value1'),
              createContent(contentId2, 'new-value'),
              createContent(contentId3, 'value3'),
            ],
          },
        ],
      },
    };

    const action: UpdateValue = {
      type: ActionType.UpdateValue,
      payload: {
        sectionId: sectionId,
        contentId: contentId2,
        value: 'new-value',
      },
    };

    expect(userInputReducer(initialState, action)).toEqual(expectedState);
  });
});
