import React from 'react';
import { TextareaContent } from '../../data/formInstructionsInterface';
import { updateValue } from '../../state/actions';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Textarea } from '../sharedComponents';

interface TextareaContentProps extends SharedContentProps {
  textareaContent: TextareaContent;
}

export const TextareaContentComponent = ({ textareaContent, dispatch, contentItemState, sectionId }: TextareaContentProps) => {
  if (!textareaContent) return null;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(updateValue(sectionId, contentItemState.id, event.target.value));
  };
  
  return (
    <>
      <Label htmlFor={textareaContent.id}>{textareaContent.question_text}</Label>
      <Textarea
        id={textareaContent.id}
        name={textareaContent.id}
        placeholder={textareaContent.metadata?.placeholder}
        onChange={handleChange}
        value={contentItemState.value as string}
      />
    </>
  );
};
