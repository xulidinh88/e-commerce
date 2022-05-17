import styled from 'styled-components';

export const StyledContainerFluid = styled.div<{ background: string }>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: ${(props) => props.background};
  position: relative;
`;

export const StyledContainer = styled.div<{ background: string }>`
  width: 68.75%;
  height: 100%;
  background-color: ${(prop) => prop.background};
`;
