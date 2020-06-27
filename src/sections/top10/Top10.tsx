import React, { useEffect } from "react";
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { MDBRow, MDBCol, MDBContainer, MDBAnimation, MDBJumbotron } from "mdbreact";
// import Carousal from "../../components/Carousal";
import Comments from "../../components/Comments";
import { useMediaQuery, useTheme } from "@material-ui/core";
import Top10Content from "./Top10Content";
// import Card from "../../components/Card";
import CardHover from "../../components/helper/CardHover";


const Top10 = () => {
    const { topicId } = useParams();
    const mediaQuery = useMediaQuery(useTheme().breakpoints.up("md"));

    return (
        <StyledDiv className="clearfix">
            <div className={`${mediaQuery?"h1 py-5":"h2 py-3"} text-center text-white`}>
                <span className="align-middle w-responsive mx-auto">{ "The 10 longest range Intercontinental Ballistic Missiles (ICBMs)" }</span>
                <span className="post-creation h6">by Gary, on 05/06/2020</span>
            </div>
            <MDBContainer className="mt-5 mb-5">
            <MDBRow>
                {/* Content Section */}
                <MDBCol md="9">
                    <Top10Content />
                </MDBCol>

                {/* Sidebar */}
                <MDBCol md="3">
                    <MDBJumbotron className="z-depth-2 p-1 mx-4">
                        <span className="h5 m-3 d-flex">Related Posts</span>
                    {   // COMPARISION section,  implement pagination
                        Array(14).fill(1).map( item=>
                            <MDBCol >
                                <MDBAnimation reveal type='fadeInRight'>
                                    <CardHover />
                                </MDBAnimation>
                            </MDBCol>   
                        )
                    }
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>

            </MDBContainer>
            <Comments />
        </StyledDiv>
    )
}

export default Top10;

const StyledDiv = styled.div`
    margin-top: -2.5rem;
    div.text-center.text-white {
        // height: 8rem;
        background-color: #000;
        border-bottom-left-radius: 60%;
        position: relative;
        span {
            display: flex;
            padding: 2rem;
            align-self: center;
            justify-content: center;
            text-transform: capitalize;
        }
        .post-creation {
            position: absolute;
            right: 0;
            bottom: -1.2rem;
            text-transform: none;
            color: #ffffff99;
        }
    }
`