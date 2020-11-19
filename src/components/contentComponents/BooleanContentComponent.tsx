import React from 'react';
import { BooleanContent } from '../../data/formInstructionsInterface';
import { Label, Input } from '../sharedComponents';

interface BooleanContentProps {
  booleanContent: BooleanContent;
}

export const BooleanContentComponent = ({ booleanContent }: BooleanContentProps) => {
  if (!booleanContent) return null;

  return (
    <>
      <Label htmlFor={booleanContent.id}>{booleanContent.question_text}</Label>
      <Input type="checkbox" id={booleanContent.id} name={booleanContent.id} />
    </>
  );
};
