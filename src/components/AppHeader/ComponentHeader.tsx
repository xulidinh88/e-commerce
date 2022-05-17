import React from 'react';

import { StyledContainerFluid, StyledContainer } from '../../styled';
import { EnumColor } from '@enums';
import { ComponentNavbar, ComponentHeroSection } from '@components'

export const ComponentHeader = () => {
  return (
    <>
      <StyledContainerFluid background={EnumColor.GRAY}>
        <StyledContainer background={EnumColor.GRAY}>
          <ComponentNavbar />
          <ComponentHeroSection/>
        </StyledContainer>
      </StyledContainerFluid>
    </>
  );
};
