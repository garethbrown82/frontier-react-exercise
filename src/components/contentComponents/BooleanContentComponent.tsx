import React from 'react';
import { BooleanContent } from '../../data/formInstructionsInterface';
import { updateIsValid, updateValue } from '../../state/actions';
import { validate } from '../../state/utilities';
import { SharedContentProps } from '../contentInterfaces';
import { Label, ValidationMessage } from '../sharedComponents';
import styled from 'styled-components';

interface ChoiceButtonProps {
  isSelected: boolean
}

const ChoiceButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  width: 100px;
  border: black 1px solid;
  background-color: ${({ isSelected }: ChoiceButtonProps) => isSelected ? 'lightgrey' : 'white'}
`;

interface BooleanContentProps extends SharedContentProps {
  booleanContent: BooleanContent;
}

export const BooleanContentComponent = ({ booleanContent, dispatch, contentItemState, sectionId }: BooleanContentProps) => {
  if (!booleanContent) return null;

  const updateAnswer = (answer: boolean) => {
    dispatch(updateValue(sectionId, contentItemState.id, answer));

    // Check validation
    const isAnswerValid = typeof answer === 'boolean';
    const isValid = validate(isAnswerValid, booleanContent.metadata.required);
    dispatch(updateIsValid(sectionId, contentItemState.id, isValid));
  };

  return (
    <>
      <Label htmlFor={booleanContent.id}>{booleanContent.question_text}</Label>
      <div>
        <ChoiceButton
          onClick={() => updateAnswer(true)}
          isSelected={contentItemState.value as boolean === true}
        >
          Yes
        </ChoiceButton>
        <ChoiceButton
          onClick={() => updateAnswer(false)}
          isSelected={contentItemState.value as boolean === false}
        >
          No
        </ChoiceButton>

      </div>
      <ValidationMessage
        isValid={contentItemState.isValid}
        message="Please make selection"
      />
    </>
  );
};
