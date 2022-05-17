import React from 'react';
import styled from 'styled-components';

import { EnumColor } from '@enums';

export const AdditionalCard = () => {
  return (
    <StyledWrap className="absolute-additional">
      <div className="wrap-icon">
        <div className="icon-heart">
          <img className="icon" src={require('@assets/favorite-white.png')} />
        </div>
        <div className="icon-search">
          <img className="icon" src={require('@assets/search-white.png')} />
        </div>
      </div>
      <div className="wrap-btn-shopnow">
        <div className="btn-icon">
          <img src={require('@assets/cart-white.png')} className="img-icon" />
        </div>
        <div className="wrap-btn-text">
          <p className="btn-text">Shop Now</p>
        </div>
      </div>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: none;
  width: 100%;
  height: 5.6rem;
  padding: 1.6rem;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${EnumColor.BLACK};
  .wrap-icon {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .icon-heart {
      margin-right: 2.5rem;
    }
  }
  .wrap-btn-shopnow {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .btn-icon {
      margin-right: 1.1rem;
    }
    .btn-text {
      font-size: 1.8rem;
      color: ${EnumColor.WHITE};
    }
  }
`;
