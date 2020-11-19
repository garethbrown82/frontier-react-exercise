import React from 'react';
import { EmailContent } from '../../data/formInstructionsInterface';
import { Label, Input } from '../sharedComponents';

interface EmailContentProps {
  emailContent: EmailContent;
}

export const EmailContentComponent = ({ emailContent }: EmailContentProps) => {
  if (!emailContent) return null;

  return (
    <>
      <Label htmlFor={emailContent.id}>{emailContent.question_text}</Label>
      <Input
        type="email"
        id={emailContent.id}
        name={emailContent.id}
        placeholder={emailContent.metadata.placeholder}
      />
    </>
  );
};
