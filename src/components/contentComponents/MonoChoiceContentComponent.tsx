import React from 'react';
import { MonoChoiceContent } from '../../data/formInstructionsInterface';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Select } from '../sharedComponents';

interface MonoChoiceContentProps extends SharedContentProps {
  monoChoiceContent: MonoChoiceContent;
}

export const MonoChoiceContentComponent = ({ monoChoiceContent, dispatch }: MonoChoiceContentProps) => {
  if (!monoChoiceContent) return null;

  return (
    <>
      <Label htmlFor={monoChoiceContent.id}>{monoChoiceContent.question_text}</Label>
      <Select id={monoChoiceContent.id} name={monoChoiceContent.id}>
        {monoChoiceContent.metadata?.options.map(({value, label}) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </>
  );
};
