import React from 'react'

import { StyledContainerFluid, StyledContainer } from '../../styled'
import { EnumColor } from '@enums'

export const ComponentBanner: React.FC = ({ children }) => {
  return (
    <StyledContainerFluid background={ EnumColor.WHITE }>
        <StyledContainer background={ EnumColor.WHITE}>
            {children}
        </StyledContainer>
    </StyledContainerFluid>
  )
}
