import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 20px;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 300px;
    height: 200px;
    object-fit: cover;
  }
`;


const SliderLarge = ({ children }) => (
  <Container>
    <SlickSlider {...{
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 15000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        adaptiveHeight: true,
        variableWidth: true,
        
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default SliderLarge; 