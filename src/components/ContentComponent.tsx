import React from 'react';
import { ContentItem, Type } from '../data/formInstructionsInterface';
import {
  TextContentComponent,
  EmailContentComponent,
  PhoneContentComponent,
  LocationContentComponent,
  UrlContentComponent,
  TextareaContentComponent,
} from './contentComponents';
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

  if (contentItem.type === Type.Email) {
    return <EmailContentComponent emailContent={contentItem} />;
  }

  if (contentItem.type === Type.Phone) {
    return <PhoneContentComponent phoneContent={contentItem} />;
  }

  if (contentItem.type === Type.Location) {
    return <LocationContentComponent locationContent={contentItem} />;
  }

  if (contentItem.type === Type.Url) {
    return <UrlContentComponent urlContent={contentItem} />;
  }

  if (contentItem.type === Type.Textarea) {
    return <TextareaContentComponent textareaContent={contentItem} />;
  }

  return (
    <div>
      <p>{contentItem.question_text} ({contentItem.type})</p>
    </div>
  );
};