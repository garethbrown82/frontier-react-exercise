import React from 'react';
import { UrlContent } from '../../data/formInstructionsInterface';
import { updateValue } from '../../state/actions';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Input } from '../sharedComponents';

interface UrlContentProps extends SharedContentProps {
  urlContent: UrlContent;
}

export const UrlContentComponent = ({ urlContent, dispatch, contentItemState, sectionId }: UrlContentProps) => {
  if (!urlContent) return null;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(updateValue(sectionId, contentItemState.id, event.target.value));
  };

  return (
    <>
      <Label htmlFor={urlContent.id}>{urlContent.question_text}</Label>
      <Input
        type="text"
        id={urlContent.id}
        name={urlContent.id}
        onChange={handleChange}
        value={contentItemState.value as string}
      />
    </>
  );
};
