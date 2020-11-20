import React from 'react';
import { PhoneContent } from '../../data/formInstructionsInterface';
import { updateIsValid, updateValue } from '../../state/actions';
import { validate } from '../../state/utilities';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Input, ValidationMessage } from '../sharedComponents';

interface PhoneContentProps extends SharedContentProps {
  phoneContent: PhoneContent;
}

export const PhoneContentComponent = ({ phoneContent, dispatch, contentItemState, sectionId }: PhoneContentProps) => {
  if (!phoneContent) return null;

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
    const isValid = validate(value as string, phoneContent.metadata.required, phoneContent.metadata.pattern);
    dispatch(updateIsValid(sectionId, contentItemState.id, isValid));
  };

  return (
    <>
      <Label htmlFor={phoneContent.id}>{phoneContent.question_text}</Label>
      <Input
        type="phone"
        maxLength={phoneContent.metadata.maxlength}
        id={phoneContent.id}
        name={phoneContent.id}
        placeholder={phoneContent.metadata?.placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={contentItemState.value as string}
      />
      <ValidationMessage
        isValid={contentItemState.isValid}
        message="Please enter valid phone number"
      />
    </>
  );
};
