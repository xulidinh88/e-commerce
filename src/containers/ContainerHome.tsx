import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {
  ComponentHeader,
  ComponentBrandFeature,
  ComponentFeatureSection,
  ComponentNewProductFeature,
  ComponentBanner,
  ComponentBestSellew,
  ComponentFeedbackSection,
  ComponentFooter
} from '@components';
import { IProduct } from '@types';

export const ContainerHome = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const fetchAllProduct = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAllProduct();
  }, []);
  return (
    <>
      {products.length > 0 ? (
        <>
          <ComponentHeader />
          <ComponentBrandFeature />
          <ComponentFeatureSection heading="New Product">
            <ComponentNewProductFeature products={products} />
          </ComponentFeatureSection>
          <ComponentBanner>
            <StyledImage src={require('@assets/brand-banner.png')} />
          </ComponentBanner>
          <ComponentFeatureSection heading="Best Seller">
            <ComponentBestSellew products={products} />
          </ComponentFeatureSection>
          <ComponentFeedbackSection />
          <ComponentFooter scrollToTop={scrollToTop} />
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

const StyledImage = styled.img`
  width: 100%;
  height: 46rem;
  margin: 5rem 0;
`;
