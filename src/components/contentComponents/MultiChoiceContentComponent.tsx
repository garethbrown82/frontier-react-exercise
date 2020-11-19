import React from 'react';
import { MultiChoiceContent } from '../../data/formInstructionsInterface';
import { Label, Select } from '../sharedComponents';

interface MultiChoiceContentProps {
  multiChoiceContent: MultiChoiceContent;
}

export const MultiChoiceContentComponent = ({ multiChoiceContent }: MultiChoiceContentProps) => {
  if (!multiChoiceContent) return null;

  return (
    <>
      <Label htmlFor={multiChoiceContent.id}>{multiChoiceContent.question_text}</Label>
      <Select id={multiChoiceContent.id} name={multiChoiceContent.id} multiple>
        {multiChoiceContent.metadata?.options.map(({value, label}) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </>
  );
};
