import React from 'react';
import styled from 'styled-components';

import { EnumColor } from '@enums';

export const ComponentHeroSection = () => {
  return (
    <StyledWrap>
      <div className="additional-banner">
        <img src={require('@assets/absolute-banner.png')} />
      </div>
      <div className="main-section">
        <div className="wrap-collections">
          <div className="collections">
            <h1 className="heading">Collections</h1>
            <p className="sub-heading">you can explore ans shop many differnt collection from various barands here.</p>
            <div className="wrap-btn-shopnow">
              <div className="btn-icon">
                <img src={require('@assets/cart-white.png')} className="img-icon" />
              </div>
              <div className="wrap-btn-text">
                <p className="btn-text">Shop Now</p>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap-hero-image">
          <img src={require('@assets/img-banner.png')} className="hero-image" />
        </div>
        <div className="wrap-hero-image-under" />
      </div>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  height: 67.2rem;
  padding: 8.1rem 0 2.9rem;
  width: 93%;
  background-color: ${EnumColor.GRAY};
  .additional-banner {
    position: absolute;
    bottom: 10rem;
    right: 0;
  }
  .main-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    position: relative;
    .wrap-hero-image {
      width: 36%;
      height: 100%;
      overflow: hidden;
      border-radius: 16rem 0;
      position: absolute;
      bottom: 2rem;
      right: 2rem;
      z-index: 2;
      .hero-image {
        width: 100%;
        height: 100%;
      }
    }
    .wrap-hero-image-under {
      width: 36%;
      height: 100%;
      position: absolute;
      border-radius: 16rem 0;
      border: 0.1rem solid ${EnumColor.SECOND_BORDER};
      bottom: 0;
      right: 0;
      z-index: 1;
    }
    .wrap-collections {
      height: 100%;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .collections {
        height: 67.8%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .heading {
          font-size: 7.4rem;
          margin-bottom: 5.2rem;
          font-weight: 300;
        }
        .sub-heading {
          font-size: 3rem;
          margin-bottom: 6.6rem;
          line-height: 5.5rem;
        }
        .wrap-btn-shopnow {
          min-width: 22.3rem;
          height: 7.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${EnumColor.BLACK};
          .btn-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 0.8rem;
          }
          .wrap-btn-text {
            .btn-text {
              color: ${EnumColor.WHITE};
              font-size: 2.9rem;
              line-height: 5.5rem;
              font-weight: 400;
            }
          }
        }
      }
    }
  }
`;
