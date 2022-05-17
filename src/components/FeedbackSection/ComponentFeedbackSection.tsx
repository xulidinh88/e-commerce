import React from 'react';
import styled from 'styled-components';
import { Typography, Grid } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { StyledContainer, StyledContainerFluid } from '../../styled';
import { EnumColor } from '@enums';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast'
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger'
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera'
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee'
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats'
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey'
  }
];

export const ComponentFeedbackSection = () => {
  return (
    <StyledContainerFluid background={EnumColor.GRAY}>
      <StyledContainer background={EnumColor.GRAY}>
        <StyledWrap>
          <Typography variant="h2" align="center" sx={{ margin: '3rem 0 3rem' }}>
            Follow products and discounts on Instagram
          </Typography>
          <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item>
              <ImageList sx={{ width: '100%' }} cols={6} rowHeight="auto" gap={24}>
                {itemData.map((item, index: number) => (
                  <ImageListItem
                    key={index}
                    sx={{ position: 'relative', border: `0.1rem solid ${EnumColor.GREEN}`, borderRadius: 2 }}
                  >
                    <img
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                      className="img"
                    />
                    <div className="overlay">
                      <img src={require('@assets/instagram.png')} />
                    </div>
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          </Grid>
          <Typography variant="h2" align="center" sx={{ margin: '3rem 0 3rem' }}>
            Or subscribe to the newsletter
          </Typography>
          <div className="wrap-form-feedback">
            <div className="form-feedback">
              <div className="wrap-input">
                <input className="email-input" type="text" placeholder="Email Address.." />
              </div>
              <div className="wrap-button">SUBMIT</div>
            </div>
          </div>
        </StyledWrap>
      </StyledContainer>
    </StyledContainerFluid>
  );
};

const StyledWrap = styled.div`
  width: 100%;
  min-height: 40rem;
  margin: 10rem 0;
  .img {
    border-radius: 0.4rem;
  }
  .img:hover ~ .overlay {
    display: flex;
  }
  .overlay {
    display: none;
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.51);
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .wrap-form-feedback {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .form-feedback {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 3.2rem;
      gap: 10;
      .wrap-input {
        height: 100%;
        width: 75%;
        .email-input {
          width: 100%;
          height: 100%;
          padding: 0 1.4rem;
          background-color: transparent;
          border: none;
          border-bottom: 0.1rem solid ${EnumColor.BLACK};
          font-size: 1.6rem;
          outline: unset;
        }
      }
      .wrap-button {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
        font-weight: bold;
        color: ${EnumColor.BLACK};
        cursor: pointer;
        border-bottom: 0.1rem solid ${EnumColor.BLACK};
      }
    }
  }
`;
