import React from 'react';
import {
    MDBRow,
    MDBCol,
    MDBAnimation,
    // MDBView,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    // MDBNavLink,
    // MDBIcon,
    // MDBInput,
    // MDBContainer,
    // MDBFreeBird,
    // // MDBAvatar,
    // MDBEdgeHeader,
    // MDBBtn
  } from 'mdbreact';
import Card from '../components/helper/Card';
import HomeContainer from '../components/HomeContainer';

export default function Main () {

    return ( 
        // styling in App.scss
        <div className="main-section container-home">

            {/* Cover Image */}
            <img src="/data/images/cover_page.jpg" alt="Cover Page Main" />

            <HomeContainer title="Comparision">
                <MDBRow>
                    {   // COMPARISION section,  implement pagination
                        Array(14).fill(1).map( item=>
                            <MDBCol sm='6' md='4' lg='3'>
                                <MDBAnimation reveal type='fadeInRight'>
                                    <MDBCard  className='my-3 grey lighten-4 '>
                                    <MDBCardImage
                                        cascade
                                        className='img-fluid m-0 rounded-top z-depth-2'
                                        src='https://firebasestorage.googleapis.com/v0/b/sizee109.appspot.com/o/doc-data%2Fimages%2F25-WHALES-LARGEST%2Fthumbnail?alt=media&token=37886ba8-35e7-4c7b-b488-09af62114a96'
                                    />
                                    <MDBCardBody cascade className='text-center p-1 py-2'>
                                        <MDBCardTitle className="h5 ">
                                        <strong>Top 20 Largest Middle-Earth Monsters</strong>
                                        </MDBCardTitle>
                                        <MDBCardText className='mb-4 pb-3'>
                                        When it comes to basketball, people usually associate it as a tall persons’ sport and to be hones...
                                        </MDBCardText>
                                    </MDBCardBody>
                                    </MDBCard>
                                </MDBAnimation>
                            </MDBCol>   
                        )
                    }
                </MDBRow>
            </HomeContainer>
                
            <HomeContainer title="Top 10" backgroundColor="#ffe9e977" >
                <MDBRow>
                    {   // TOP-10 section,  implement pagination
                        Array(6).fill(1).map( item=>
                            <MDBCol sm='6' md='4' lg='3'>
                                <MDBAnimation reveal type='fadeInUp'>
                                    <Card />
                                </MDBAnimation>
                            </MDBCol>   
                        )
                    }
                </MDBRow>
            </HomeContainer>
            
            <HomeContainer title="Videos" backgroundColor="#fff5e9" className="mb-5 pb-5">
                <MDBRow>
                    {   // TOP-10 section,  implement pagination
                        Array(10).fill(1).map( item=>
                            <MDBCol sm='6' md='4' lg='3'>
                                <MDBAnimation reveal type='fadeInUp'>
                                    <Card />
                                </MDBAnimation>
                            </MDBCol>   
                        )
                    }
                </MDBRow>
            </HomeContainer>
            
        </div>
    )
}