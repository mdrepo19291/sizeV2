import React, { useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import {
    // MDBRow,
    // MDBCol,
    // MDBView,
    // MDBCard,
    // MDBCardImage,
    // MDBCardBody,
    // MDBCardTitle,
    // MDBCardText,
    // MDBNavLink,
    // MDBIcon,
    // MDBInput,
    // MDBFreeBird,
    // MDBAvatar,
    // MDBAnimation,
    // MDBEdgeHeader,
    // MDBBtn
    MDBContainer,
  } from 'mdbreact';
// import { prependOnceListener } from 'cluster';
// import Card from './Card';

// Provide a type defination object or directly in the angular bracket (after the function name)
interface ContainerProps {
    title?: string,
    backgroundColor?: string,
    className?: string,
    style?: object,
}

// Children can be directly accessed,  https://fettblog.eu/typescript-react/children/
const HomeContainer: React.FC<ContainerProps> = ({title, backgroundColor, children, className, style}) => {
    
    // always need to initialise useRef with a null
    const container = useRef<HTMLDivElement>(null);
    
    // using useRef guide, must use useLayoutEffect for any DOM manipulation
    // https://linguinecode.com/post/how-to-use-react-useref-with-typescript
    useLayoutEffect(()=>{
        const { current } = container;
        console.log(`Hi there ${title}`,current?.firstElementChild);
        if(backgroundColor && current?.firstElementChild) current.querySelector('.container')?.setAttribute('style',`background-color: ${backgroundColor}`);
    })

    return ( 
        // styling in App.scss
        <StyledDiv className={`container-home ${className || ''}`} ref={container} style={style}>
            <MDBContainer className="border-primary z-depth-1">
                    { title 
                    ? 
                      <div className="container--title h2 text-white mx-auto px-5 border border-primary z-depth-1">
                        {title}
                      </div>
                    : null
                    }
                { children }
            </MDBContainer>
        </StyledDiv>
    )
}

export default HomeContainer;

const StyledDiv = styled.div`
    .container {
      min-width: 90%;
      background-color: #e9ffed77;
      margin-top: calc(2rem + 5vw);
    }
    .container--title {
      font-family: $font-bree-serif;
      line-height: 4rem;
      height: 4rem;
      border-radius: .6rem;
      width: max-content;
      text-shadow: 1px 1px 5px rgb(49, 49, 49);
      opacity: 1;
      background-color: #53b3ffe9;
      box-shadow: 0 2px 5px 0 rgb(148, 146, 146), 0px 0px 5px 1px #338cff inset !important;
      transform: translateY(-1.8rem);
    }
    .card, .view {
      border-radius: .5rem;;
    }
    .view {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
`