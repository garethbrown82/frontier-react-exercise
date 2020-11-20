import React from 'react';
import { UrlContent } from '../../data/formInstructionsInterface';
import { updateIsValid, updateValue } from '../../state/actions';
import { validate } from '../../state/utilities';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Input, ValidationMessage } from '../sharedComponents';

interface UrlContentProps extends SharedContentProps {
  urlContent: UrlContent;
}

export const UrlContentComponent = ({ urlContent, dispatch, contentItemState, sectionId }: UrlContentProps) => {
  if (!urlContent) return null;

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
    console.log('check url', value);
    const isValid = validate(value as string, urlContent.metadata.required);
    dispatch(updateIsValid(sectionId, contentItemState.id, isValid));
  };

  return (
    <>
      <Label htmlFor={urlContent.id}>{urlContent.question_text}</Label>
      <Input
        type="text"
        id={urlContent.id}
        name={urlContent.id}
        onChange={handleChange}
        onBlur={handleBlur}
        value={contentItemState.value as string}
      />
      <ValidationMessage
        isValid={contentItemState.isValid}
        message="Please enter valid url"
      />
    </>
  );
};
