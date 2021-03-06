import React from 'react';
import { formInstructions } from '../data/formInstructions';
import { MainFormComponent } from './MainFormComponent';
import styled from 'styled-components';

const StyledFormContainer = styled.div`
  max-width: 500px;
  margin: auto;
  font-family: sans-serif;
`;

function App() {
  if (!formInstructions) return null;

  return (
    <StyledFormContainer>
      <MainFormComponent formSections={formInstructions.sections} />
    </StyledFormContainer>
  );
}

export default App;
