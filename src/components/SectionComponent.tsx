import React from 'react';
import { Section } from '../data/formInstructionsInterface';
import { ContentComponent } from './ContentComponent';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  border: solid 1px black;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
`;

interface SectionProps {
  section: Section;
}

export const SectionComponent = ({ section }: SectionProps) => {
  if (!section || !section.content) return null;

  return (
    <StyledWrapper>
      <h3>{section.title}</h3>
      {section.content.map((contentItem) => (
        <ContentComponent
          key={contentItem.id}
          contentItem={contentItem}
        />
      ))}
    </StyledWrapper>
  );
};
