import React from 'react';
import { PhoneContent } from '../../data/formInstructionsInterface';
import { WithDispatch } from '../contentInterfaces';
import { Label, Input } from '../sharedComponents';

interface PhoneContentProps extends WithDispatch {
  phoneContent: PhoneContent;
}

export const PhoneContentComponent = ({ phoneContent, dispatch }: PhoneContentProps) => {
  if (!phoneContent) return null;

  return (
    <>
      <Label htmlFor={phoneContent.id}>{phoneContent.question_text}</Label>
      <Input
        type="phone"
        id={phoneContent.id}
        name={phoneContent.id}
        placeholder={phoneContent.metadata?.placeholder}
      />
    </>
  );
};
