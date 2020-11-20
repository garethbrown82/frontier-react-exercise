import React from 'react';
import { LocationContent } from '../../data/formInstructionsInterface';
import { updateValue } from '../../state/actions';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Input } from '../sharedComponents';

interface LocationContentProps extends SharedContentProps {
  locationContent: LocationContent;
}

export const LocationContentComponent = ({ locationContent, dispatch, contentItemState, sectionId }: LocationContentProps) => {
  if (!locationContent) return null;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(updateValue(sectionId, contentItemState.id, event.target.value));
  };

  return (
    <>
      <Label htmlFor={locationContent.id}>{locationContent.question_text}</Label>
      <Input
        type="text"
        id={locationContent.id}
        name={locationContent.id}
        placeholder={locationContent.metadata?.placeholder}
        onChange={handleChange}
        value={contentItemState.value as string}
      />
    </>
  );
};
