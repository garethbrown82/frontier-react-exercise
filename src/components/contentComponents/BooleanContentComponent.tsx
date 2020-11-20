import React from 'react';
import { BooleanContent } from '../../data/formInstructionsInterface';
import { updateValue } from '../../state/actions';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Input } from '../sharedComponents';

interface BooleanContentProps extends SharedContentProps {
  booleanContent: BooleanContent;
}

export const BooleanContentComponent = ({ booleanContent, dispatch, contentItemState, sectionId }: BooleanContentProps) => {
  if (!booleanContent) return null;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(updateValue(sectionId, contentItemState.id, event.target.checked));
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
    </>
  );
};
