import React from 'react';
import { MonoChoiceContent } from '../../data/formInstructionsInterface';
import { updateIsValid, updateValue } from '../../state/actions';
import { validate } from '../../state/utilities';
import { SharedContentProps } from '../contentInterfaces';
import { Label, Select, ValidationMessage } from '../sharedComponents';

interface MonoChoiceContentProps extends SharedContentProps {
  monoChoiceContent: MonoChoiceContent;
}

export const MonoChoiceContentComponent = ({ monoChoiceContent, dispatch, contentItemState, sectionId }: MonoChoiceContentProps) => {
  if (!monoChoiceContent) return null;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(updateValue(sectionId, contentItemState.id, event.target.value));
    checkValidation(event.target.value);
  };

  const handleBlur = (event: React.FocusEvent<HTMLSelectElement>) => { 
    checkValidation(event.target.value);
  };

  const checkValidation = (value: string) => {
    const isValid = validate(value as string, monoChoiceContent.metadata.required);
    dispatch(updateIsValid(sectionId, contentItemState.id, isValid));
  };

  return (
    <>
      <Label htmlFor={monoChoiceContent.id}>{monoChoiceContent.question_text}</Label>
      <Select
        id={monoChoiceContent.id} name={monoChoiceContent.id}
        value={contentItemState.value as string}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option value="">-- Please select a language --</option>
        {monoChoiceContent.metadata?.options.map(({value, label}) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
      <ValidationMessage
        isValid={contentItemState.isValid}
        message="Please make selection"
      />
    </>
  );
};
