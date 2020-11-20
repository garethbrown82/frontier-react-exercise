import React from 'react';
import { LocationContent } from '../../data/formInstructionsInterface';
import { updateIsValid, updateValue } from '../../state/actions';
import { validate } from '../../state/utilities';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Input, ValidationMessage } from '../sharedComponents';

interface LocationContentProps extends SharedContentProps {
  locationContent: LocationContent;
}

export const LocationContentComponent = ({ locationContent, dispatch, contentItemState, sectionId }: LocationContentProps) => {
  if (!locationContent) return null;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(updateValue(sectionId, contentItemState.id, event.target.value));
    checkValidation(event.target.value);
  };

  const handleBlur = (event: any) => { 
    checkValidation(event.target.value);
  };

  const checkValidation = (value: string) => {
    const isValid = validate(value as string, locationContent.metadata.required);
    dispatch(updateIsValid(sectionId, contentItemState.id, isValid));
  };

  return (
    <>
      <Label htmlFor={locationContent.id}>{locationContent.question_text}</Label>
      <Input
        type="text"
        id={locationContent.id}
        name={locationContent.id}
        placeholder={locationContent.metadata?.placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={contentItemState.value as string}
      />
      {!contentItemState.isValid && <ValidationMessage>* Please enter valid text.</ValidationMessage>}
    </>
  );
};
