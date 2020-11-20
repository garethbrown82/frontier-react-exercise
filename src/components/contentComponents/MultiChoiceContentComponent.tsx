import React from 'react';
import { MultiChoiceContent } from '../../data/formInstructionsInterface';
import { updateIsValid, updateValue } from '../../state/actions';
import { validate } from '../../state/utilities';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Select, ValidationMessage } from '../sharedComponents';

interface MultiChoiceContentProps extends SharedContentProps {
  multiChoiceContent: MultiChoiceContent;
}

export const MultiChoiceContentComponent = ({ multiChoiceContent, dispatch, contentItemState, sectionId }: MultiChoiceContentProps) => {
  if (!multiChoiceContent) return null;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const options = event.target.options;

    let selectedOptions = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedOptions.push(options[i].value);
      }
    }
    dispatch(updateValue(sectionId, contentItemState.id, selectedOptions));
    checkValidation(event.target.value);
  };

  const handleBlur = (event: any) => { 
    checkValidation(event.target.value);
  };

  const checkValidation = (value: string) => {
    const isValid = validate(value as string, multiChoiceContent.metadata.required);
    dispatch(updateIsValid(sectionId, contentItemState.id, isValid));
  };
  
  return (
    <>
      <Label htmlFor={multiChoiceContent.id}>{multiChoiceContent.question_text}</Label>
      <Select
        id={multiChoiceContent.id}
        name={multiChoiceContent.id}
        onChange={handleChange}
        onBlur={handleBlur}
        value={Array.isArray(contentItemState.value) ? contentItemState.value : []}
        multiple
      >
        {multiChoiceContent.metadata?.options.map(({value, label}) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </Select>
      {!contentItemState.isValid && <ValidationMessage>* Please make a selection</ValidationMessage>}
    </>
  );
};
