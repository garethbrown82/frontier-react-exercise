import React from 'react';
import { TextContent } from '../../data/formInstructionsInterface';
import { updateValue } from '../../state/actions';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Input } from '../sharedComponents';

interface TextContentProps extends SharedContentProps {
  textContent: TextContent;
}

export const TextContentComponent = ({ textContent, dispatch, contentItemState, sectionId }: TextContentProps) => {
  if (!textContent) return null;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateValue(sectionId, contentItemState.id, event.target.value));
  };

  return (
    <>
      <Label htmlFor={textContent.id}>{textContent.question_text}</Label>
      <Input
        type="text"
        id={textContent.id}
        name={textContent.id}
        onChange={handleChange}
        value={contentItemState.value as string}
      />
    </>
  );
};
