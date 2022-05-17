import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import Button from '@mui/material/Button';

import { StyledContainer, StyledContainerFluid } from '../../../styled';
import { EnumColor } from '@enums';
import { categories } from '@constants';

interface IFeatureSection {
  heading: string;
}
export const ComponentFeatureSection: React.FC<IFeatureSection> = ({ children, heading }) => {
  return (
    <StyledContainerFluid background={EnumColor.WHITE}>
      <StyledWrap background={EnumColor.WHITE}>
        <Typography variant="h2" align="center" sx={{ margin: '0 0 2rem', fontWeight: 500 }}>
          {heading}
        </Typography>
        <div className="wrap-tool">
          <div className="categories">
            {categories.map((category: string, index: number) => {
              return (
                <StyledCategory isActive={index === 0} key={index}>
                  <p className="text-category">{category}</p>
                </StyledCategory>
              );
            })}
          </div>
          <div className="filter">
            <Button
              variant="contained"
              startIcon={<FilterAltOffIcon />}
              sx={{
                backgroundColor: EnumColor.BLACK,
                borderRadius: 0,
                ':hover': {
                  bgcolor: EnumColor.BLACK,
                  color: 'white'
                }
              }}
            >
              Filter
            </Button>
          </div>
        </div>
        {children}
      </StyledWrap>
    </StyledContainerFluid>
  );
};

const StyledWrap = styled(StyledContainer)`
  min-height: 50rem;
  margin-bottom: 4rem;
  .wrap-tool {
    width: 100%;
    min-height: 2.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    .categories {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: ${EnumColor.BLACK} !important;
  }
`;

const StyledCategory = styled.div<{ isActive: boolean }>`
  min-width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover > .text-category {
    font-weight: bold;
    transform: scale(1.2);
  }
  .text-category {
    font-size: 1.6rem;
    font-weight: ${(props) => (props.isActive ? 'bold' : 400)};
  }
`;
