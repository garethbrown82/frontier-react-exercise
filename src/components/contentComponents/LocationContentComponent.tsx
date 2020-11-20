import React from 'react';
import { LocationContent } from '../../data/formInstructionsInterface';
import { WithDispatch } from '../contentInterfaces';
import { Label, Input } from '../sharedComponents';

interface LocationContentProps extends WithDispatch {
  locationContent: LocationContent;
}

export const LocationContentComponent = ({ locationContent, dispatch }: LocationContentProps) => {
  if (!locationContent) return null;

  return (
    <>
      <Label htmlFor={locationContent.id}>{locationContent.question_text}</Label>
      <Input
        type="text"
        id={locationContent.id}
        name={locationContent.id}
        placeholder={locationContent.metadata?.placeholder}
      />
    </>
  );
};
