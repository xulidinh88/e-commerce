import React from 'react';
import styled from 'styled-components';

import { AdditionalCard } from '@components';
import { IProduct } from '@types';

interface IPropsCard {
  product: IProduct;
}

export const ComponentCard = (props: IPropsCard) => {
  const { product } = props;
  return (
    <StyledWrap>
      <StyledWrapImage>
        <img className="img" src={product.image} />
        <AdditionalCard />
      </StyledWrapImage>
      <div className="wrap-content">
        <StyledNameProduct>{product.title}</StyledNameProduct>
        <StyledTypeAndPrice>
          <div className="wrap-type">
            <p className="text-type">{product.category}</p>
          </div>
          <div className="wrap-price">
            <p className="text-price">${product.price}</p>
          </div>
        </StyledTypeAndPrice>
      </div>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  width: 100%;
  height: 50rem;
  border: 0.1rem solid green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  position: relative;
  cursor: pointer;
  &:hover .absolute-additional {
    display: flex;
  }
  .wrap-content {
    width: 100%;
    height: 20%;
  }
`;

const StyledWrapImage = styled.div`
  width: 100%;
  height: 80%;
  position: relative;
  .img {
    width: 100%;
    height: 100%;
  }
`;

const StyledNameProduct = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  height: 2.2rem;
  margin: 1.8rem 0 1.5rem;
  padding: 0 0.4rem;
`;

const StyledTypeAndPrice = styled.div`
  width: 100%;
  min-height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.4rem;
  .wrap-type,
  .wrap-price {
    width: 50%;
    .text-price {
      width: 100%;
      display: inline-block;
      text-align: right;
      color: #000;
      font-size: 1.6rem;
      font-weight: bold;
    }
    .text-type {
      width: 100%;
      display: inline-block;
      text-align: left;
      color: #777;
      font-size: 1.6rem;
    }
  }
`;
