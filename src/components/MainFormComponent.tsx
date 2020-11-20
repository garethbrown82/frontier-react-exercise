import React, { useReducer } from 'react';
import { Section } from '../data/formInstructionsInterface';
import { SectionComponent } from './SectionComponent';
import { userInputReducer } from '../state/userInputReducer';
import { State } from '../state/stateInterface';
import { createStateFromSections } from '../state/utilities';
import { Action } from '../state/actions';

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

  if (!formSections) return null;
  
  return (
    <>
      <h1>Main Form</h1>
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
    </>
  );
};
