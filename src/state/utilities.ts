import { ContentItemState, SectionState } from './stateInterface';
import { Section } from '../data/formInstructionsInterface';

export const createContent = (
  contentId: string,
  value: string | number | boolean = '',
  isValid: boolean = true,
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

export interface MetaData {
  readonly required: boolean;
  readonly format?: string;
  readonly pattern?: string;
  readonly maxlength?: number;
  readonly placeholder?: string;
}

export const validate = (value: string | number | boolean | string[], required: boolean, pattern: string = '') => {
  let isValid = true;

  // Validate required
  if (required) {
    isValid = Boolean(value);
  }

  // Validate Regex
  if (pattern) {
    const regex = RegExp(pattern);
    isValid = regex.test(value as string);
  }

  return isValid;
};

