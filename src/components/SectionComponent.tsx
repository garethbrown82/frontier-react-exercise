import React from 'react';
import { Section } from '../data/formInstructionsInterface';
import { ContentComponent } from './ContentComponent';
import styled from 'styled-components';
import { Action } from '../state/actions';
import { SectionState } from '../state/stateInterface';
import { Heading3 } from './sharedComponents';

const StyledWrapper = styled.div`
  border: solid 1px black;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
`;

interface SectionProps {
  section: Section;
  dispatch: React.Dispatch<Action>;
  sectionState: SectionState;
}

export const SectionComponent = ({ section, dispatch, sectionState }: SectionProps) => {
  if (!section || !section.content) return null;

  return (
    <StyledWrapper>
      <Heading3>{section.title}</Heading3>
      {section.content.map((contentItem) => {
        const contentItemState = sectionState.content.find((contentItemState) => contentItemState.id === contentItem.id);
        if (!contentItemState) return null;

        return (
          <ContentComponent
            key={contentItem.id}
            contentItem={contentItem}
            dispatch={dispatch}
            contentItemState={contentItemState}
            sectionId={section.id}
          />
        );
      })}
    </StyledWrapper>
  );
};
