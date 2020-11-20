import { Section, Type, Format } from '../data/formInstructionsInterface';
import { updateValue, ActionType, UpdateValue } from './actions';
import { State, SectionState } from './stateInterface';
import { userInputReducer } from './userInputReducer';
import { createContent, createStateFromSections, MetaData, validate } from './utilities';

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

describe('createStateFromInstructions', () => {
  it('correctly creates state from form instructions', () => {
    const sectionId1 = 'section-one';
    const sectionId2 = 'section-two';
    const contentId1 = 'text1';
    const contentId2 = 'text2';
    const contentId3 = 'text3';
    const contentId4 = 'text4';

    const sections: ReadonlyArray<Section> = [
      {
        id: sectionId1,
        title: 'test-section',
        content: [
          {
            id: contentId1,
            type: Type.Text,
            metadata: {
              format: Format.Text,
              required: true,
            },
            question_text: 'test-text1',
          },
          {
            id: contentId2,
            type: Type.Text,
            metadata: {
              format: Format.Text,
              required: true,
            },
            question_text: 'test-text2',
          },
        ],
      },
      {
        id: sectionId2,
        title: 'test-section2',
        content: [
          {
            id: contentId3,
            type: Type.Text,
            metadata: {
              format: Format.Text,
              required: true,
            },
            question_text: 'test-text3',
          },
          {
            id: contentId4,
            type: Type.Text,
            metadata: {
              format: Format.Text,
              required: true,
            },
            question_text: 'test-text4',
          },
        ],
      },
    ];

    const expectedResult: SectionState[] = [
      {
        id: sectionId1,
        content: [
          {
            id: contentId1,
            value: '',
            isValid: false,
          },
          {
            id: contentId2,
            value: '',
            isValid: false,
          },
        ],
      },
      {
        id: sectionId2,
        content: [
          {
            id: contentId3,
            value: '',
            isValid: false,
          },
          {
            id: contentId4,
            value: '',
            isValid: false,
          },
        ],
      },
    ];

    expect(createStateFromSections(sections)).toEqual(expectedResult);
  });
});

describe('validate', () => {
  it('correctly invalidates required string', () => {
    expect(validate('', true)).toBe(false);
  });
  
  it('correctly invalidates required number', () => {
    expect(validate(0, true)).toBe(false);
  });
  
  it('correctly validates required string', () => {
    expect(validate('test-text', true)).toBe(true);
  });
  
  it('correctly validates required number', () => {
    expect(validate(4, true)).toBe(true);
  });

  it('correctly validates regex', () => {
    const pattern = "[0-9]{3}-?[0-9]{3}-?[0-9]{4}";

    expect(validate('004-000-0055', true, pattern)).toBe(true);
  });

  it('correctly invalidates regex', () => {
    const pattern = "[0-9]{3}-?[0-9]{3}-?[0-9]{4}";

    expect(validate('0hh-000-0055', true, pattern)).toBe(false);
  });
});
