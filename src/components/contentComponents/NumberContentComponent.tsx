import React from 'react';
import { NumberContent } from '../../data/formInstructionsInterface';
import { updateValue } from '../../state/actions';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Input } from '../sharedComponents';

interface NumberContentProps extends SharedContentProps {
  numberContent: NumberContent;
}

export const NumberContentComponent = ({ numberContent, dispatch, contentItemState, sectionId }: NumberContentProps) => {
  if (!numberContent) return null;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(updateValue(sectionId, contentItemState.id, event.target.value));
  };

  return (
    <>
      <Label htmlFor={numberContent.id}>{numberContent.question_text}</Label>
      <Input
        type="number"
        id={numberContent.id}
        name={numberContent.id}
        onChange={handleChange}
        value={contentItemState.value as number}
      />
    </>
  );
};
