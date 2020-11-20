import React from 'react';
import { PhoneContent } from '../../data/formInstructionsInterface';
import { updateValue } from '../../state/actions';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Input } from '../sharedComponents';

interface PhoneContentProps extends SharedContentProps {
  phoneContent: PhoneContent;
}

export const PhoneContentComponent = ({ phoneContent, dispatch, contentItemState, sectionId }: PhoneContentProps) => {
  if (!phoneContent) return null;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(updateValue(sectionId, contentItemState.id, event.target.value));
  };

  return (
    <>
      <Label htmlFor={phoneContent.id}>{phoneContent.question_text}</Label>
      <Input
        type="phone"
        id={phoneContent.id}
        name={phoneContent.id}
        placeholder={phoneContent.metadata?.placeholder}
        onChange={handleChange}
        value={contentItemState.value as string}
      />
    </>
  );
};
