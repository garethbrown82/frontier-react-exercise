import React from 'react';
import { ContentItem, Type } from '../data/formInstructionsInterface';
import { TextContentComponent } from './content/TextContentComponent';
import styled from 'styled-components';

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

interface ContentProps {
  contentItem: ContentItem;
}

export const ContentComponent = ({ contentItem }: ContentProps) => {
  if (!contentItem) return null;

  return (
    <StyledContentContainer>
      {getContent(contentItem)}
    </StyledContentContainer>
  );
};

const getContent = (contentItem: ContentItem) => {
  if (contentItem.type === Type.Text) {
    return <TextContentComponent textContent={contentItem} />;
  }

  return (
    <div>
      <p>{contentItem.question_text} ({contentItem.type})</p>
    </div>
  );
};