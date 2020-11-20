import React from 'react';
import { NumberContent } from '../../data/formInstructionsInterface';
import { updateIsValid, updateValue } from '../../state/actions';
import { validate } from '../../state/utilities';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Input, ValidationMessage } from '../sharedComponents';

interface NumberContentProps extends SharedContentProps {
  numberContent: NumberContent;
}

export const NumberContentComponent = ({ numberContent, dispatch, contentItemState, sectionId }: NumberContentProps) => {
  if (!numberContent) return null;

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
    const isValid = validate(value as string, numberContent.metadata.required);
    dispatch(updateIsValid(sectionId, contentItemState.id, isValid));
  };

  return (
    <>
      <Label htmlFor={numberContent.id}>{numberContent.question_text}</Label>
      <Input
        type="number"
        id={numberContent.id}
        name={numberContent.id}
        onChange={handleChange}
        onBlur={handleBlur}
        value={contentItemState.value as number}
      />
      {!contentItemState.isValid && <ValidationMessage>* Please enter a number</ValidationMessage>}
    </>
  );
};
