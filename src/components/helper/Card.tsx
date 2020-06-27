import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MDBIcon, MDBBadge, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';

// Default card values
const CARD_IMAGE = 'https://firebasestorage.googleapis.com/v0/b/sizee109.appspot.com/o/doc-data%2Fimages%2F25-WHALES-LARGEST%2Fthumbnail?alt=media&token=37886ba8-35e7-4c7b-b488-09af62114a96';
const CARD_TITLE = 'Shark Size Comparision: Living & Extinct';
const CARD_DESC = 'When it comes to basketball, people usually associate it as a tall persons’ sport and to be hones...';
const CARD_TAGS = ['Animals','Sports','Science','Space','Infras','Anime'];
const CARD_DATE = '05/10/2020';
const CARD_VIEWS = 2000;

// Props Defination: Used to validate the input prop types
interface Props {
    image?: string,
    title?: string,
    description?: string,
    addedDate?: string,
    views?: number,
    tags?: string[],
}

// Renders the card for the Home Page.
// Added information of the date, views and tags too.
const Card: React.FC<Props> = ({image, title, description, addedDate, views, tags}) => {
  return (
      <StyledDiv>
        <MDBCard  className='my-3 grey lighten-4 '>
            <MDBCardImage
                cascade
                className='img-fluid m-0 rounded-top z-depth-2'
                src={image || CARD_IMAGE} // use the default image if not provided
            /> 
              <div className='mdb-color lighten-2 text-center pt-1'>
                  <ul className='list-unstyled list-inline font-small mb-1 px-3'>
                    <li className='list-inline-item white-text'>
                      <MDBIcon icon='clock' /> { addedDate || CARD_DATE }
                    </li>
                    <li className='list-inline-item'>
                      <a href='#!' className='white-text'>
                        <MDBIcon far icon='eye' /> { views || CARD_VIEWS }
                      </a>
                    </li>
                  </ul>
              </div>
            <MDBCardBody cascade className='text-center p-1 py-2'>
                <MDBCardTitle className="h5 ">
                    <strong>{ title || CARD_TITLE }</strong>
                </MDBCardTitle>
                <MDBCardText className='pb-3'>{ description || CARD_DESC }</MDBCardText>
            </MDBCardBody>
            <div className='card-tags mb-1 mx-2'>
                {
                    Array(tags || CARD_TAGS).flat().map( tag => 
                        <MDBBadge pill color="rgba-red-strong" className="ml-1">{tag}</MDBBadge>
                    )
                }
            </div>
        </MDBCard>
      </StyledDiv>
  )
}

export default Card;


const StyledDiv = styled.div`
    transition: all .3s;
    &:hover {
      transform: scale(1.08);
      // cursor: pointer;
    }
    .card {
        
    }
    ul {
        display: flex;
        justify-content: space-between;
    }
    .card-tags {
        text-align: end;
    }
`