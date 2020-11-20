import React from 'react';
import { TextareaContent } from '../../data/formInstructionsInterface';
import { WithDispatch } from '../contentInterfaces';
import { Label, Textarea } from '../sharedComponents';

interface TextareaContentProps extends WithDispatch {
  textareaContent: TextareaContent;
}

export const TextareaContentComponent = ({ textareaContent, dispatch }: TextareaContentProps) => {
  if (!textareaContent) return null;

  return (
    <>
      <Label htmlFor={textareaContent.id}>{textareaContent.question_text}</Label>
      <Textarea
        id={textareaContent.id}
        name={textareaContent.id}
        placeholder={textareaContent.metadata?.placeholder}
      />
    </>
  );
};
