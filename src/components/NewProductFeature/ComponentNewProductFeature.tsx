import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { makeStyles, Typography } from '@mui/material';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import Button from '@mui/material/Button';

import { arrayEight } from '@constants';
import { ComponentCard } from '@components';
import { StyledContainer, StyledContainerFluid } from '../../styled';
import { EnumColor } from '@enums';
import { categories } from '@constants';
import { IProducts, IProduct } from '@types'

export const ComponentNewProductFeature = (props : IProducts) => {
  const { products } = props
  return (
    <Grid container rowSpacing={3.4} columnSpacing={{ xs: 1, sm: 2, md: 2.4, lg: 2.4, xl: 2.4 }}>
      {products && products.map((product: IProduct, index: number) => {
        return (
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3} key={index}>
            <ComponentCard product={product}/>
          </Grid>
        );
      })}
    </Grid>
  );
};