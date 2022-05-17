import React, { useCallback } from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { StyledContainerFluid, StyledContainer } from '../../styled';
import { EnumColor } from '@enums';
import { arrayFour, arrayBrand } from '@constants';

export const ComponentBrandFeature = () => {
  return (
    <StyledContainerFluid background={EnumColor.WHITE}>
      <Wrap background={EnumColor.WHITE}>
        <StyledWrapBrand>
          {arrayBrand.map((item: string, index: number) => {
            return (
              <div className="wrap-img" key={index}>
                <img src={item} />
              </div>
            );
          })}
        </StyledWrapBrand>
        <Grid container sx={{ display: 'flex', margin: '9rem 0', position: 'relative' }}>
          {arrayFour.map((item: number, index: number) => {
            return (
              <Grid item xs={12} sm={12} md={12} lg={3} xl={3} key={index}>
                <Card
                  sx={{
                    border: 'none',
                    boxShadow: 'none',
                    margin: '1rem 1rem 0',
                    padding: 0,
                    cursor: 'pointer'
                  }}
                  key={index}
                >
                  <CardContent sx={{ overflow: 'hidden', padding: '0 !important' }}>
                    <img src={require('@assets/img-banner.png')} className="img" />
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
          <div className="wrap-additional-text">
            <p className="additional-text">Explore new and popular styles</p>
          </div>
        </Grid>
      </Wrap>
    </StyledContainerFluid>
  );
};

const Wrap = styled(StyledContainer)`
  position: relative;
  .img {
    width: 100%;
    height: 100%;
  }
  .wrap-additional-text {
    position: absolute;
    left: 0;
    bottom: 0;
    transform: rotate(-90deg);
    transform-origin: left bottom;
    .additional-text {
      font-size: 2.8rem;
    }
  }
`;
const StyledWrapBrand = styled.div`
  margin-top: 9rem;
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
