import React from 'react';
import { TextContent } from '../../data/formInstructionsInterface';
import { Label } from '../sharedComponents/Label';
import styled from 'styled-components';

const StyleInput = styled.input`
  padding: 10px;
`;

interface TextContentProps {
  textContent: TextContent;
}

export const TextContentComponent = ({ textContent }: TextContentProps) => {
  if (!textContent) return null;

  return (
    <>
      <Label htmlFor={textContent.id}>{textContent.question_text}</Label>
      <StyleInput type="text" id={textContent.id} name={textContent.id} />
    </>
  );
};
