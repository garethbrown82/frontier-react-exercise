import React, { useReducer } from 'react';
import { Section } from '../data/formInstructionsInterface';
import { SectionComponent } from './SectionComponent';
import { userInputReducer } from '../state/userInputReducer';
import { State } from '../state/stateInterface';
import { createStateFromSections } from '../state/utilities';
import { Action } from '../state/actions';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin: 10px;
`;

const StyledButton = styled.button`
  background-color: white;
  border: solid 1px black;
  width: 100%;
  padding: 15px;
  border-radius: 5px;
`;

interface MainFormProps {
  formSections: ReadonlyArray<Section>;
}

export const MainFormComponent = ({ formSections }: MainFormProps) => {
  const initialState: State = {
    userDetails: {
      sections: createStateFromSections(formSections),
    },
  };

  const [state, dispatch]: [State, React.Dispatch<Action>] = useReducer(userInputReducer, initialState);
  console.log('state: ', state);

  const handleSubmit = () => {
    console.log('User input state: ', state.userDetails);
  };

  if (!formSections) return null;
  
  return (
    <>
      {formSections.map((section) => {
        const sectionState = state.userDetails.sections.find((sectionState) => sectionState.id === section.id);
        if (!sectionState) return null;

        return (
          <SectionComponent
            key={section.id}
            section={section}
            dispatch={dispatch}
            sectionState={sectionState}
          />
        );
      })}
      <ButtonWrapper>
        <StyledButton onClick={handleSubmit}>Submit</StyledButton>
      </ButtonWrapper>
    </>
  );
};
