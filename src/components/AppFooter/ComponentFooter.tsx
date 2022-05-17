import React from 'react';
import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';

import { StyledContainerFluid, StyledContainer } from '../../styled';
import { EnumColor } from '@enums';

interface IHomeContainerProps {
  scrollToTop: () => void;
}

export const ComponentFooter = (props: IHomeContainerProps) => {
  const { scrollToTop } = props;
  return (
    <>
      <StyledContainerFluid background={EnumColor.WHITE}>
        <StyledWrap background={EnumColor.WHITE}>
          <Grid container direction="row" justifyContent="center" alignItems="flex-start" spacing={5}>
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              lg={4}
              xl={4}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <StyledWrapLogo>
                <div className="addtional-logo">
                  <img src={require('@assets/additional-logo.png')} className="img-additional-logo" />
                </div>
                <div className="wrap-text-logo">
                  <h1 className="text-logo">CORAL</h1>
                </div>
                <div className="addtional-logo">
                  <img src={require('@assets/additional-logo.png')} className="img-additional-logo" />
                </div>
              </StyledWrapLogo>
              <Typography variant="h4" className="info-footer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua
              </Typography>
              <div className="social">
                <div className="wrap-icon">
                  <img src={require('@assets/facebook.png')} />
                </div>
                <div className="wrap-icon">
                  <img src={require('@assets/twitter.png')} />
                </div>
                <div className="wrap-icon">
                  <img src={require('@assets/linkedin.png')} />
                </div>
                <div className="wrap-icon">
                  <img src={require('@assets/dribbble.png')} />
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              lg={2.5}
              xl={2.5}
              justifyContent="center"
              alignItems="flex-start"
            >
              <Typography
                variant="h4"
                className="info-catalog"
                sx={{ fontWeight: 'bold', marginBottom: '2.5rem', fontSize: '1.6rem' }}
              >
                CATALOG
              </Typography>
              <Typography
                variant="h4"
                className="info-catalog"
                sx={{ marginBottom: '1.2rem', fontSize: '1.4rem', cursor: 'pointer' }}
              >
                Necklaces
              </Typography>
              <Typography
                variant="h4"
                className="info-catalog"
                sx={{ marginBottom: '1.2rem', fontSize: '1.4rem', cursor: 'pointer' }}
              >
                Hoodies
              </Typography>
              <Typography
                variant="h4"
                className="info-catalog"
                sx={{ marginBottom: '1.2rem', fontSize: '1.4rem', cursor: 'pointer' }}
              >
                Jewelry Box
              </Typography>
              <Typography
                variant="h4"
                className="info-catalog"
                sx={{ marginBottom: '1.2rem', fontSize: '1.4rem', cursor: 'pointer' }}
              >
                T-Shirt
              </Typography>
              <Typography
                variant="h4"
                className="info-catalog"
                sx={{ marginBottom: '1.2rem', fontSize: '1.4rem', cursor: 'pointer' }}
              >
                Jacket
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              lg={2.5}
              xl={2.5}
              justifyContent="center"
              alignItems="flex-start"
            >
              <Typography
                variant="h4"
                className="info-catalog"
                sx={{ fontWeight: 'bold', marginBottom: '2.5rem', fontSize: '1.6rem' }}
              >
                ABOUT US
              </Typography>
              <Typography
                variant="h4"
                className="info-catalog"
                sx={{ marginBottom: '1.2rem', fontSize: '1.4rem', cursor: 'pointer' }}
              >
                Our Producers
              </Typography>
              <Typography
                variant="h4"
                className="info-catalog"
                sx={{ marginBottom: '1.2rem', fontSize: '1.4rem', cursor: 'pointer' }}
              >
                Sitemap
              </Typography>
              <Typography
                variant="h4"
                className="info-catalog"
                sx={{ marginBottom: '1.2rem', fontSize: '1.4rem', cursor: 'pointer' }}
              >
                FAQ
              </Typography>
              <Typography
                variant="h4"
                className="info-catalog"
                sx={{ marginBottom: '1.2rem', fontSize: '1.4rem', cursor: 'pointer' }}
              >
                About Us
              </Typography>
              <Typography
                variant="h4"
                className="info-catalog"
                sx={{ marginBottom: '1.2rem', fontSize: '1.4rem', cursor: 'pointer' }}
              >
                Term & Condition
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              lg={3}
              xl={3}
              justifyContent="center"
              alignItems="flex-start"
            >
              <Typography
                variant="h4"
                className="info-catalog"
                sx={{ fontWeight: 'bold', marginBottom: '2.5rem', fontSize: '1.6rem' }}
              >
                CUSTOMER SERVICES
              </Typography>
              <Typography
                variant="h4"
                className="info-catalog"
                sx={{ marginBottom: '1.2rem', fontSize: '1.4rem', cursor: 'pointer' }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="h4"
                className="info-catalog"
                sx={{ marginBottom: '1.2rem', fontSize: '1.4rem', cursor: 'pointer' }}
              >
                Track Your Order
              </Typography>
              <Typography
                variant="h4"
                className="info-catalog"
                sx={{ marginBottom: '1.2rem', fontSize: '1.4rem', cursor: 'pointer' }}
              >
                Product Care & Repair
              </Typography>
              <Typography
                variant="h4"
                className="info-catalog"
                sx={{ marginBottom: '1.2rem', fontSize: '1.4rem', cursor: 'pointer' }}
              >
                Book An Appointment
              </Typography>
              <Typography
                variant="h4"
                className="info-catalog"
                sx={{ marginBottom: '1.2rem', fontSize: '1.4rem', cursor: 'pointer' }}
              >
                Shipping & Returns
              </Typography>
            </Grid>
          </Grid>
        </StyledWrap>
      </StyledContainerFluid>
      <StyledContainerFluid background={EnumColor.BLACK}>
        <StyledContainer background={EnumColor.BLACK}>
          <Grid container sx={{ height: '5.2rem' }} justifyContent="space-between" alignItems="center">
            <Grid item xs={6} sm={6} md={6} xl={4} lg={4} sx={{ height: '5.2rem' }}>
              <Typography
                variant="caption"
                sx={{
                  color: EnumColor.WHITE,
                  fontSize: 14,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}
              >
                &copy; Coral, Inc
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              xl={4}
              lg={4}
              sx={{
                height: '5.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img src={require('@assets/payment.png')} />
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
              xl={4}
              lg={4}
              sx={{ height: '5.2rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
            >
              <Typography
                variant="caption"
                sx={{ color: EnumColor.WHITE, fontSize: 14, cursor: 'pointer' }}
                onClick={scrollToTop}
              >
                Scroll To Top &#8679;
              </Typography>
            </Grid>
          </Grid>
        </StyledContainer>
      </StyledContainerFluid>
    </>
  );
};

const StyledWrap = styled(StyledContainer)`
  padding: 9rem 0;

  .info-footer {
    line-height: 2rem;
    font-size: 1.5rem;
    margin: 3rem 0;
  }
  .social {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    max-width: 20rem;
    .wrap-icon {
      cursor: pointer;
    }
  }
`;
const StyledWrapLogo = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .wrap-text-logo {
    margin: 0 1rem;
    .text-logo {
      font-size: 2.8rem;
      font-weight: 400;
      color: ${EnumColor.TEXT};
    }
  }
`;
