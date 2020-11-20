import React from 'react';
import { MultiChoiceContent } from '../../data/formInstructionsInterface';
import { updateValue } from '../../state/actions';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Select } from '../sharedComponents';

interface MultiChoiceContentProps extends SharedContentProps {
  multiChoiceContent: MultiChoiceContent;
}

export const MultiChoiceContentComponent = ({ multiChoiceContent, dispatch, contentItemState, sectionId }: MultiChoiceContentProps) => {
  if (!multiChoiceContent) return null;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const options = event.target.options;

    let selectedOptions = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedOptions.push(options[i].value);
      }
    }
    dispatch(updateValue(sectionId, contentItemState.id, selectedOptions));
  };
  
  return (
    <>
      <Label htmlFor={multiChoiceContent.id}>{multiChoiceContent.question_text}</Label>
      <Select
        id={multiChoiceContent.id}
        name={multiChoiceContent.id}
        onChange={handleChange}
        multiple
      >
        {multiChoiceContent.metadata?.options.map(({value, label}) => {
          const itemStateValues = contentItemState.value as Array<string>;
          const isSelected = itemStateValues.includes(value);
          return (
            <option key={value} value={value} selected={isSelected}>
              {label}
            </option>
          );
        })}
      </Select>
    </>
  );
};
