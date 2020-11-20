import React from 'react';
import { TextareaContent } from '../../data/formInstructionsInterface';
import { updateIsValid, updateValue } from '../../state/actions';
import { validate } from '../../state/utilities';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Textarea, ValidationMessage } from '../sharedComponents';

interface TextareaContentProps extends SharedContentProps {
  textareaContent: TextareaContent;
}

export const TextareaContentComponent = ({ textareaContent, dispatch, contentItemState, sectionId }: TextareaContentProps) => {
  if (!textareaContent) return null;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(updateValue(sectionId, contentItemState.id, event.target.value));
    checkValidation(event.target.value);
  };

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => { 
    checkValidation(event.target.value);
  };

  const checkValidation = (value: string) => {
    const isValid = validate(value as string, textareaContent.metadata.required);
    dispatch(updateIsValid(sectionId, contentItemState.id, isValid));
  };
  
  return (
    <>
      <Label htmlFor={textareaContent.id}>{textareaContent.question_text}</Label>
      <Textarea
        id={textareaContent.id}
        name={textareaContent.id}
        placeholder={textareaContent.metadata?.placeholder}
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
