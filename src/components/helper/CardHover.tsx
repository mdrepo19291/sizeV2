import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MDBIcon, MDBBadge, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBView, MDBMask } from 'mdbreact';

// Default card values
const CARD_IMAGE = 'https://firebasestorage.googleapis.com/v0/b/sizee109.appspot.com/o/doc-data%2Fimages%2F25-WHALES-LARGEST%2Fthumbnail?alt=media&token=37886ba8-35e7-4c7b-b488-09af62114a96';
const CARD_TITLE = 'Shark Size Comparision: Living & Extinct';
const CARD_RATING = '3.5';
const CARD_VIEWS = 2000;

// Props Defination: Used to validate the input prop types
interface Props {
    image?: string,
    title?: string,
    rating?: string,
    views?: number,
}

// Renders the card for the Home Page.
// Added information of the date, views and tags too.
const CardHover: React.FC<Props> = ({image, title, rating, views}) => {
  return (
      <StyledDiv>
        <MDBCard  className='my-3 grey lighten-4 '>
            <MDBView hover className="rounded-top">
              <img
                src={ image || CARD_IMAGE }
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="black-strong">
                <p className="white-text text-center">{ title || CARD_TITLE }</p>
              </MDBMask>
            </MDBView>
              <div className='mdb-color lighten-2 text-center pt-1 rounded-bottom'>
                  <ul className='list-unstyled list-inline mb-1 px-3'>
                    <li className='list-inline-item white-text'>
                      <MDBIcon icon='star' /> { rating || CARD_RATING }
                    </li>
                    <li className='list-inline-item'>
                      <a href='#!' className='white-text'>
                        <MDBIcon far icon='eye' /> { views || CARD_VIEWS }
                      </a>
                    </li>
                  </ul>
              </div>
        </MDBCard>
      </StyledDiv>
  )
}

export default CardHover;


const StyledDiv = styled.div`
    transition: all .3s;
    &:hover {
      transform: scale(1.05);
    }
    .mask, .card {
        &:hover{
            cursor: pointer;
        }
    }
    ul {
        display: flex;
        justify-content: space-between;
        font-size: 0.8rem;
    }
    .card-tags {
        text-align: end;
    }
`