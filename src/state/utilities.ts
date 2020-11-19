import { ContentItemState, SectionState } from './stateInterface';
import { Section } from '../data/formInstructionsInterface';

export const createContent = (
  contentId: string,
  value: string | number | boolean = '',
  isValid: boolean = false,
): ContentItemState => ({
  id: contentId,
  value,
  isValid,
});

export const createSection = (section: Section): SectionState => ({
  id: section.id,
  content: section.content.map((contentItem) => createContent(contentItem.id)),
});

export const createStateFromSections = (sections: ReadonlyArray<Section>) => {
  const sectionsState: SectionState[] = sections.map((section) => {
    const contentState = section.content.map((item) => createContent(item.id));
    return {
      id: section.id,
      content: contentState,
    };
  });

  return sectionsState;
};
