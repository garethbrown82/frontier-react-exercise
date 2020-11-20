import React from 'react';
import { NumberContent } from '../../data/formInstructionsInterface';
import { WithDispatch } from '../contentInterfaces';
import { Label, Input } from '../sharedComponents';

interface NumberContentProps extends WithDispatch {
  numberContent: NumberContent;
}

export const NumberContentComponent = ({ numberContent, dispatch }: NumberContentProps) => {
  if (!numberContent) return null;

  return (
    <>
      <Label htmlFor={numberContent.id}>{numberContent.question_text}</Label>
      <Input type="number" id={numberContent.id} name={numberContent.id} />
    </>
  );
};
