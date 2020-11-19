import React, { useReducer } from 'react';
import { Section } from '../data/formInstructionsInterface';
import { SectionComponent } from './SectionComponent';
import { userInputReducer } from '../state/userInputReducer';
import { State } from '../state/stateInterface';
import { createStateFromSections } from '../state/utilities';

interface MainFormProps {
  formSections: ReadonlyArray<Section>;
}

export const MainFormComponent = ({ formSections }: MainFormProps) => {
  const initialState: State = {
    userDetails: {
      sections: createStateFromSections(formSections),
    },
  };

  const [state, dispatch] = useReducer(userInputReducer, initialState);
  console.log('state: ', state);
  if (!formSections) return null;
  
  return (
    <>
      <h1>Main Form</h1>
      {formSections.map((section) => (
        <SectionComponent
          key={section.id}
          section={section}
        />
      ))}
    </>
  );
};
