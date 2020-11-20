import React from 'react';
import { TextContent } from '../../data/formInstructionsInterface';
import { updateIsValid, updateValue } from '../../state/actions';
import { validate } from '../../state/utilities';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Input, ValidationMessage } from '../sharedComponents';

export interface TextContentProps extends SharedContentProps {
  textContent: TextContent;
}

export const TextContentComponent = ({ textContent, dispatch, contentItemState, sectionId }: TextContentProps) => {
  if (!textContent) return null;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(updateValue(sectionId, contentItemState.id, event.target.value));
    checkValidation(event.target.value);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => { 
    checkValidation(event.target.value);
  };

  const checkValidation = (value: string) => {
    const isValid = validate(value as string, textContent.metadata.required);
    dispatch(updateIsValid(sectionId, contentItemState.id, isValid));
  };

  return (
    <>
      <Label htmlFor={textContent.id}>{textContent.question_text}</Label>
      <Input
        type="text"
        id={textContent.id}
        name={textContent.id}
        onChange={handleChange}
        onBlur={handleBlur}
        value={contentItemState.value as string}
      />
      <ValidationMessage
        isValid={contentItemState.isValid}
        message="Please enter valid text"
      />
    </>
  );
};
