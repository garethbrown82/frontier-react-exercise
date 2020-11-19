import { ContentItem, SectionState } from './stateInterface';
import { Section } from '../data/formInstructionsInterface';

export const createContent = (
  contentId: string,
  value: string | number | boolean = null,
  isValid: boolean = false,
): ContentItem => ({
  id: contentId,
  value,
  isValid,
});

export const createSection = (section: Section): SectionState => ({
  id: section.id,
  content: section.content.map((contentItem) => createContent(contentItem.id)),
});
