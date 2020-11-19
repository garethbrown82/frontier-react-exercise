import React from 'react';
import { PhoneContent } from '../../data/formInstructionsInterface';
import { Label, Input } from '../sharedComponents';

interface PhoneContentProps {
  phoneContent: PhoneContent;
}

export const PhoneContentComponent = ({ phoneContent }: PhoneContentProps) => {
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
