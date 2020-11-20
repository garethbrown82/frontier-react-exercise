import React from 'react';
import { BooleanContent } from '../../data/formInstructionsInterface';
import { updateIsValid, updateValue } from '../../state/actions';
import { validate } from '../../state/utilities';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Input, ValidationMessage } from '../sharedComponents';

interface BooleanContentProps extends SharedContentProps {
  booleanContent: BooleanContent;
}

export const BooleanContentComponent = ({ booleanContent, dispatch, contentItemState, sectionId }: BooleanContentProps) => {
  if (!booleanContent) return null;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    dispatch(updateValue(sectionId, contentItemState.id, event.target.checked));

    // Check validation
    const isValid = validate(event.target.value, booleanContent.metadata.required);
    dispatch(updateIsValid(sectionId, contentItemState.id, isValid));
  };

  return (
    <>
      <Label htmlFor={booleanContent.id}>{booleanContent.question_text}</Label>
      <Input
        type="checkbox"
        id={booleanContent.id}
        name={booleanContent.id}
        onChange={handleChange}
        checked={contentItemState.value as boolean}
      />
      <ValidationMessage
        isValid={contentItemState.isValid}
        message="Please make selection"
      />
    </>
  );
};
