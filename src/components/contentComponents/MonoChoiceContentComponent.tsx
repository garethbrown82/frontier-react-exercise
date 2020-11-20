import React from 'react';
import { MonoChoiceContent } from '../../data/formInstructionsInterface';
import { updateValue } from '../../state/actions';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Select } from '../sharedComponents';

interface MonoChoiceContentProps extends SharedContentProps {
  monoChoiceContent: MonoChoiceContent;
}

export const MonoChoiceContentComponent = ({ monoChoiceContent, dispatch, contentItemState, sectionId }: MonoChoiceContentProps) => {
  if (!monoChoiceContent) return null;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(updateValue(sectionId, contentItemState.id, event.target.value));
  };

  return (
    <>
      <Label htmlFor={monoChoiceContent.id}>{monoChoiceContent.question_text}</Label>
      <Select
        id={monoChoiceContent.id} name={monoChoiceContent.id}
        value={contentItemState.value as string}
        onChange={handleChange}
      >
        {monoChoiceContent.metadata?.options.map(({value, label}) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </>
  );
};
