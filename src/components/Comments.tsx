import React from 'react';
import styled from 'styled-components';
import { MDBContainer, MDBBadge, MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn } from 'mdbreact';
import { useMediaQuery, useTheme } from '@material-ui/core';

const SAMPLE_DATA:{[key: string]: string}[] = [
    {
        "id":"random-1",
        "name":"Tom Smith",
        "comment":"Ut enim ad minim veniam, quis nostrud exercitation.",
        "date":"05/10/2015",
    },
    {
        "id":"random-2",
        "name":"Marta Tev",
        "comment":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae\
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
        "date":"08/10/2015",
    },
    {
        "id":"random-3",
        "name":"Anna Maria",
        "comment":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum\
        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate\
        non provident, similique sunt in culpa qui officia.",
        "date":"17/10/2015",
    },
]

const Comments = () => {
    const mediaQuery = useMediaQuery(useTheme().breakpoints.up("md"));

    return (
      <StyledContainer>
        <MDBContainer className={`${mediaQuery?'w-50':'w-100'}`}>
            <section className="mb-4 pt-5" id="comments">

                <div className="text-center text-md-left mb-5">
                    <div className="text-center mb-4">
                        <h3 className="font-weight-bold pt-3 mb-5">Comments <MDBBadge color="orange">3</MDBBadge></h3>
                    </div>
                    {
                        SAMPLE_DATA.map( comment => 
                            <MDBRow className="mb-4" key={comment.id}>
                                <MDBCol sm="2" col="12" className="mb-md-0 mb-3">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img (9).jpg" className="z-depth-1-half rounded-circle img-fluid avatar" alt="img"/>
                                </MDBCol>

                                <MDBCol sm="10" size="12">
                                    <span className="h5 font-weight-bold">{comment.name}</span>
                                    <span> on <span className="font-weight-bold">{comment.date}</span></span>
                                    <div className="mt-2">
                                        <ul className="list-unstyled">
                                            <li className="comment-date"></li>
                                        </ul>
                                    </div>
                                    <p className="grey-text">{comment.comment}</p>
                                </MDBCol>
                            </MDBRow>
                        )
                    }


                </div>
            </section>

            <section className="pb-5 mt-5">
                <div className="reply-form">
                    <h3 className="text-center my-5 h3 pt-3">{SAMPLE_DATA.length ? "Leave a Feedback" : "Be the first to comment"}</h3>
                    <p className="text-center">(Logged In User)</p>
                    <MDBRow className="text-center text-md-left">
                        <MDBCol sm="2" size="12" className="mb-md-0 mt-4">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg" alt="Sample avatar" className="img-fluid avatar rounded-circle z-depth-2"/>
                        </MDBCol>
                        <MDBCol size="12" sm="10">
                            <MDBInput
                                type="textarea"
                                id="form-contact-message"
                                label="Your message"
                                rows="3"
                                />
                        </MDBCol>

                        <MDBCol md="12" className="text-center mt-4">
                            <MDBBtn color="amber" className="rounded-pill">Submit</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </div>
            </section>
        </MDBContainer>
      </StyledContainer>
    )
}

export default Comments;

const StyledContainer = styled.div`
    background-color: #33333311;
    margin-top: 10rem;
    img.avatar {
        max-width: 4rem;
    }
    
`