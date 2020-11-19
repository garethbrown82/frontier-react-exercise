import React from 'react';
import { ContentItem } from '../data/formInstructionsInterface';

interface ContentProps {
  contentItem: ContentItem;
}

export const ContentComponent = ({ contentItem }: ContentProps) => {
  if (!contentItem) return null;

  return (
    <>
      <p>{contentItem.question_text}</p>
    </>
  )
}