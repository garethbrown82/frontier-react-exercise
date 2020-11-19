import React from 'react';
import { NumberContent } from '../../data/formInstructionsInterface';
import { Label, Input } from '../sharedComponents';

interface NumberContentProps {
  numberContent: NumberContent;
}

export const NumberContentComponent = ({ numberContent }: NumberContentProps) => {
  if (!numberContent) return null;

  return (
    <>
      <Label htmlFor={numberContent.id}>{numberContent.question_text}</Label>
      <Input type="number" id={numberContent.id} name={numberContent.id} />
    </>
  );
};
