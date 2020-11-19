import React from 'react';
import { TextContent } from '../../data/formInstructionsInterface';
import { Label, Input } from '../sharedComponents';

interface TextContentProps {
  textContent: TextContent;
}

export const TextContentComponent = ({ textContent }: TextContentProps) => {
  if (!textContent) return null;

  return (
    <>
      <Label htmlFor={textContent.id}>{textContent.question_text}</Label>
      <Input type="text" id={textContent.id} name={textContent.id} />
    </>
  );
};
