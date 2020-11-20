import { ContentItemState, SectionState, State } from './stateInterface';
import { Action, ActionType } from './actions';

const initialState: State = {
  userDetails: {
    sections: [],
  },
};

export const userInputReducer = (state: State = initialState, action: Action = {} as any): State => {
  if (action.type === ActionType.UpdateValue) {
    const { sectionId, contentId, value } = action.payload;
    const { sections } = state.userDetails;

    const sectionIndex = sections.findIndex((section) => section.id === sectionId);
    const contentIndex = sections[sectionIndex].content.findIndex((item) => item.id === contentId);

    const contentItems = sections[sectionIndex].content;
    const updatedContentItem: ContentItemState = { ...contentItems[contentIndex], value };

    const updatedContent = [
      ...contentItems.slice(0, contentIndex),
      updatedContentItem,
      ...contentItems.slice(contentIndex + 1),
    ];

    const updatedSection: SectionState = { ...sections[sectionIndex], content: updatedContent };
    const updatedSections = [
      ...sections.slice(0, sectionIndex),
      updatedSection,
      ...sections.slice(sectionIndex + 1),
    ];
    
    return { ...state, userDetails: { ...state.userDetails, sections: updatedSections } };
  }

  // Most of the code below is duplcated from the conditional above, I would ideally write some helper functions
  // to make this far more DRY. Am leaving this as is for the sake of time.
  if (action.type === ActionType.UpdateIsValid) {
    const { sectionId, contentId, isValid } = action.payload;
    const { sections } = state.userDetails;

    const sectionIndex = sections.findIndex((section) => section.id === sectionId);
    const contentIndex = sections[sectionIndex].content.findIndex((item) => item.id === contentId);

    const contentItems = sections[sectionIndex].content;
    const updatedContentItem: ContentItemState = { ...contentItems[contentIndex], isValid };

    const updatedContent = [
      ...contentItems.slice(0, contentIndex),
      updatedContentItem,
      ...contentItems.slice(contentIndex + 1),
    ];

    const updatedSection: SectionState = { ...sections[sectionIndex], content: updatedContent };
    const updatedSections = [
      ...sections.slice(0, sectionIndex),
      updatedSection,
      ...sections.slice(sectionIndex + 1),
    ];
    
    return { ...state, userDetails: { ...state.userDetails, sections: updatedSections } };
  }

  return state;
};
