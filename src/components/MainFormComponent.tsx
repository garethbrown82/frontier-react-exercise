import React from 'react';
import { Section } from '../data/formInstructionsInterface';
import { SectionComponent } from './SectionComponent';

interface MainFormProps {
  formSections: ReadonlyArray<Section>;
}

export const MainFormComponent = ({ formSections }: MainFormProps) => {
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
  )
}