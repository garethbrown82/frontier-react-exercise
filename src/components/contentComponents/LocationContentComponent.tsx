import React from 'react';
import { LocationContent } from '../../data/formInstructionsInterface';
import { Label, Input } from '../sharedComponents';

interface LocationContentProps {
  locationContent: LocationContent;
}

export const LocationContentComponent = ({ locationContent }: LocationContentProps) => {
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
