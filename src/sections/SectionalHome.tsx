import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import { MDBView, MDBRow, MDBCol, MDBAnimation, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
import HomeContainer from "../components/HomeContainer";
import { SECTION_HEADING } from "../utils/Constants";


const SectionalHome = () => {
    const { sec } = useParams();
    const { url } = useRouteMatch();
    // console.log(sec, SECTION_HEADING )
    // console.log(urr)
    
    return (
          <>
            <MDBView
                cascade
                className='gradient-card-header  rgba-blue-strong p-4 text-center text-white w-25 mx-auto rounded z-depth-2 mt-5'
              >
                <h4 className='h1-responsive mb-0 font-weight-bold text-shadow'>{ SECTION_HEADING[sec||url.substr(1)] }</h4>
            </MDBView>
            <HomeContainer title={ '' } style={{marginTop:'-4rem', marginBottom:'6rem'}}>
                <MDBRow className="pb-5">
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
            {/* <MDBView
                cascade
                className='gradient-card-header light-blue lighten-1 p-4 text-center text-white'
              >
                <h4 className='h2-responsive mb-0 font-weight-bold'>Traffic</h4>
            </MDBView> */}
          </>
    )
}

export default SectionalHome;