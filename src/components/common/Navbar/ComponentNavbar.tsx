import React from 'react';
import styled from 'styled-components';

import { ADDITIONAL_NAVBAR } from '@constants';
import { EnumColor } from '@enums';

export const ComponentNavbar = () => {
  return (
    <StyledWrap>
      <StyledNavbar>
        <div className="wrap-search">
          <img src={require('@assets/search.png')} className="img" />
        </div>
        <div className="wrap-logo">
          <div className="addtional-logo">
            <img src={require('@assets/additional-logo.png')} className="img-additional-logo" />
          </div>
          <div className="wrap-text-logo">
            <h1 className="text-logo">CORAL</h1>
          </div>
          <div className="addtional-logo">
            <img src={require('@assets/additional-logo.png')} className="img-additional-logo" />
          </div>
        </div>
        <div className="wrap-account-cart">
          <div className="wrap-account">
            <div className="wrap-icon">
              <img src={require('@assets/user.png')} className="icon-header" />
            </div>
            <p className="text-account-cart">Account</p>
          </div>
          <div className="wrap-cart">
            <div className="wrap-icon">
              <img src={require('@assets/cart.png')} className="icon-header" />
            </div>
            <p className="text-account-cart">Shopping</p>
          </div>
        </div>
      </StyledNavbar>
      <StyledAdditionalNavbar>
        {ADDITIONAL_NAVBAR.map((item: string, index: number) => {
          return (
            <li key={index} className="additional-navbar-item">
              <p className="additional-navbar-text">{item}</p>
            </li>
          );
        })}
      </StyledAdditionalNavbar>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 11.3rem;
  width: 100%;
  margin: 3.1rem 0; 
`;
const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5.9rem;
  border-bottom: 0.1rem solid ${EnumColor.BORDER};
  padding-bottom: 2.5rem;
  .wrap-search {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .wrap-logo {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .wrap-text-logo {
      margin: 0 1rem;
      .text-logo {
        font-size: 2.8rem;
        font-weight: 400;
        color: ${EnumColor.TEXT};
      }
    }
  }
  .wrap-account-cart {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .wrap-account,
    .wrap-cart {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 9.1rem;
      min-height: 2.4rem;
      cursor: pointer;
      &:hover > .text-account-cart {
        color: ${EnumColor.GREEN};
      }
      .wrap-icon {
        margin-right: 0.8rem;
      }
      .text-account-cart {
        font-size: 1.3rem;
      }
    }
    .wrap-account {
      margin-right: 2.4rem;
    }
  }
`;
const StyledAdditionalNavbar = styled.ul`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  list-style-type: none;
  padding: 3rem 0 0;
  .additional-navbar-item {
    height: 2.4rem;
    cursor: pointer;
    .additional-navbar-text {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
    &:hover > .additional-navbar-text {
      color: ${EnumColor.GREEN};
    }
  }
`;
