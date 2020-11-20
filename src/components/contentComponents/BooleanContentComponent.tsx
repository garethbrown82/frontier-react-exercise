import React from 'react';
import { BooleanContent } from '../../data/formInstructionsInterface';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Input } from '../sharedComponents';

interface BooleanContentProps extends SharedContentProps {
  booleanContent: BooleanContent;
}

export const BooleanContentComponent = ({ booleanContent, dispatch }: BooleanContentProps) => {
  if (!booleanContent) return null;

  return (
    <>
      <Label htmlFor={booleanContent.id}>{booleanContent.question_text}</Label>
      <Input type="checkbox" id={booleanContent.id} name={booleanContent.id} />
    </>
  );
};
