import React from "react";
import styled from 'styled-components';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from
"mdbreact";

const Carousal = () => {
  return (
        <StyledMDBCarousel
            interval={2500}
            activeItem={1}
            length={3}
            showControls
            showIndicators
            className='z-depth-3 container'
            >
            <MDBCarouselInner>
                <MDBCarouselItem itemId='1'>
                <MDBView>
                    <img
                    className='d-block w-100'
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(131).jpg'
                    alt='First slide'
                    />
                </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId='2'>
                <MDBView>
                    <img
                    className='d-block w-100'
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(132).jpg'
                    alt='Second slide'
                    />
                </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId='3'>
                <MDBView>
                    <img
                    className='d-block w-100'
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(133).jpg'
                    alt='Third slide'
                    />
                </MDBView>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </StyledMDBCarousel>
  );
}

export default Carousal;

const StyledMDBCarousel = styled(MDBCarousel)`
    &.carousel {
      padding: 0;
      margin-top: 2rem;
    }
    .carousel-control-prev:hover {
      box-shadow: inset 20px 0px 10px -5px rgba(0,0,0,0.5);
    }
    .carousel-control-next:hover {
      box-shadow: inset -20px 0 10px -5px rgba(0,0,0,0.5);
    }
`