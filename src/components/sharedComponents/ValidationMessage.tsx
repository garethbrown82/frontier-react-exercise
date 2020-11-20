import React from 'react';
import styled from 'styled-components';

const StyledValidation = styled.span`
  color: red;
  font-size: 0.8em;
  height: 10px;
`;

const EmptySpan = styled.span`
  height: 10px;
`;

interface ValidationMessageProps {
  isValid: boolean;
  message: string;
}

export const ValidationMessage = ({ isValid, message }: ValidationMessageProps) => {
  if (isValid) return <EmptySpan />;
  return (
    <StyledValidation>* {message}</StyledValidation>
  );
};
