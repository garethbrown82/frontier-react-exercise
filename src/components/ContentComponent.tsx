import React from 'react';
import { ContentItem, Type } from '../data/formInstructionsInterface';
import {
  TextContentComponent,
  EmailContentComponent,
  PhoneContentComponent,
  LocationContentComponent,
  UrlContentComponent,
  TextareaContentComponent,
  NumberContentComponent,
  BooleanContentComponent,
  MonoChoiceContentComponent,
  MultiChoiceContentComponent,
} from './contentComponents';
import { SharedContentProps } from './contentInterfaces';
import styled from 'styled-components';
import { Action } from '../state/actions';
import { ContentItemState } from '../state/stateInterface';

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

interface ContentProps extends SharedContentProps {
  contentItem: ContentItem;
}

export const ContentComponent = ({ contentItem, dispatch, contentItemState, sectionId }: ContentProps) => {
  if (!contentItem) return null;

  return (
    <StyledContentContainer>
      {getContent(contentItem, dispatch, contentItemState, sectionId)}
    </StyledContentContainer>
  );
};

const getContent = (
  contentItem: ContentItem,
  dispatch: React.Dispatch<Action>,
  contentItemState: ContentItemState,
  sectionId: string,
) => {
  if (contentItem.type === Type.Text) {
    return (
      <TextContentComponent
        textContent={contentItem}
        dispatch={dispatch}
        contentItemState={contentItemState}
        sectionId={sectionId}
      />
    );
  }

  if (contentItem.type === Type.Email) {
    return (
      <EmailContentComponent
        emailContent={contentItem}
        dispatch={dispatch}
        contentItemState={contentItemState}
        sectionId={sectionId}
      />
    );
  }

  if (contentItem.type === Type.Phone) {
    return (
      <PhoneContentComponent
        phoneContent={contentItem}
        dispatch={dispatch}
        contentItemState={contentItemState}
        sectionId={sectionId}
      />
    );
  }

  if (contentItem.type === Type.Location) {
    return (
      <LocationContentComponent
        locationContent={contentItem}
        dispatch={dispatch}
        contentItemState={contentItemState}
        sectionId={sectionId}
      />
    );
  }

  if (contentItem.type === Type.Url) {
    return (
      <UrlContentComponent
        urlContent={contentItem}
        dispatch={dispatch}
        contentItemState={contentItemState}
        sectionId={sectionId}
      />
    );
  }

  if (contentItem.type === Type.Textarea) {
    return (
      <TextareaContentComponent
        textareaContent={contentItem}
        dispatch={dispatch}
        contentItemState={contentItemState}
        sectionId={sectionId}
      />);
  }

  if (contentItem.type === Type.Number) {
    return (
      <NumberContentComponent
        numberContent={contentItem}
        dispatch={dispatch}
        contentItemState={contentItemState}
        sectionId={sectionId}
      />
    );
  }

  if (contentItem.type === Type.Boolean) {
    return (
      <BooleanContentComponent
        booleanContent={contentItem}
        dispatch={dispatch}
        contentItemState={contentItemState}
        sectionId={sectionId}
      />
    );
  }

  if (contentItem.type === Type.MonoChoice) {
    return (
      <MonoChoiceContentComponent
        monoChoiceContent={contentItem}
        dispatch={dispatch}
        contentItemState={contentItemState}
        sectionId={sectionId}
      />
    );
  }

  if (contentItem.type === Type.MultiChoice) {
    return (
      <MultiChoiceContentComponent
        multiChoiceContent={contentItem}
        dispatch={dispatch}
        contentItemState={contentItemState}
        sectionId={sectionId}
      />
    );
  }

  return null;
};