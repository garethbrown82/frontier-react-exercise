import React from 'react';
import { EmailContent } from '../../data/formInstructionsInterface';
import { updateValue } from '../../state/actions';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Input } from '../sharedComponents';

interface EmailContentProps extends SharedContentProps {
  emailContent: EmailContent;
}

export const EmailContentComponent = ({ emailContent, dispatch, contentItemState, sectionId }: EmailContentProps) => {
  if (!emailContent) return null;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(updateValue(sectionId, contentItemState.id, event.target.value));
  };

  return (
    <>
      <Label htmlFor={emailContent.id}>{emailContent.question_text}</Label>
      <Input
        type="email"
        id={emailContent.id}
        name={emailContent.id}
        placeholder={emailContent.metadata.placeholder}
        onChange={handleChange}
        value={contentItemState.value as string}
      />
    </>
  );
};
