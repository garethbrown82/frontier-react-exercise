import React from 'react';
import { EmailContent } from '../../data/formInstructionsInterface';
import { updateIsValid, updateValue } from '../../state/actions';
import { validate } from '../../state/utilities';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Input, ValidationMessage } from '../sharedComponents';

interface EmailContentProps extends SharedContentProps {
  emailContent: EmailContent;
}

export const EmailContentComponent = ({ emailContent, dispatch, contentItemState, sectionId }: EmailContentProps) => {
  if (!emailContent) return null;

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
    const isValid = validate(value as string, emailContent.metadata.required, emailContent.metadata.pattern);
    dispatch(updateIsValid(sectionId, contentItemState.id, isValid));
  };

  return (
    <>
      <Label htmlFor={emailContent.id}>{emailContent.question_text}</Label>
      <Input
        type="email"
        id={emailContent.id}
        name={emailContent.id}
        placeholder={emailContent.metadata.placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={contentItemState.value as string}
      />
      <ValidationMessage
        isValid={contentItemState.isValid}
        message="Please enter valid email"
      />
    </>
  );
};
