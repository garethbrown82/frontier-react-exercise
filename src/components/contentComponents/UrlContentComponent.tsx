import React from 'react';
import { UrlContent } from '../../data/formInstructionsInterface';
import { Label, Input } from '../sharedComponents';

interface UrlContentProps {
  urlContent: UrlContent;
}

export const UrlContentComponent = ({ urlContent }: UrlContentProps) => {
  if (!urlContent) return null;

  return (
    <>
      <Label htmlFor={urlContent.id}>{urlContent.question_text}</Label>
      <Input type="text" id={urlContent.id} name={urlContent.id} />
    </>
  );
};
