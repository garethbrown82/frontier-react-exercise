import React from 'react';
import { UrlContent } from '../../data/formInstructionsInterface';
import { WithDispatch } from '../contentInterfaces';
import { Label, Input } from '../sharedComponents';

interface UrlContentProps extends WithDispatch {
  urlContent: UrlContent;
}

export const UrlContentComponent = ({ urlContent, dispatch }: UrlContentProps) => {
  if (!urlContent) return null;

  return (
    <>
      <Label htmlFor={urlContent.id}>{urlContent.question_text}</Label>
      <Input type="text" id={urlContent.id} name={urlContent.id} />
    </>
  );
};
