import React from "react";
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import Carousal from "../../components/helper/Carousal";
import Comments from "../../components/Comments";


const Comparision = () => {
    const { topicId } = useParams();

    return (
        <StyledDiv className="clearfix">
            <div className="h2-responsive text-center text-white">
                <span className="align-middle">{ topicId }</span>
            </div>
            <Carousal />
            <p className="text-center w-responsive mx-auto mt-5 mb-5 pb-5">This is just another Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatem quia corrupti vel qui asperiores aliquam, enim, temporibus voluptates nisi et excepturi molestias quaerat. Quibusdam necessitatibus illo eveniet eaque minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi amet esse ex perferendis, porro impedit repudiandae dolores alias totam sequi dolorem officiis sunt asperiores ratione aperiam maxime fugiat suscipit eaque!</p>
            <Comments />
        </StyledDiv>
    )
}

export default Comparision;

const StyledDiv = styled.div`
    margin-top: -2.5rem;
    .h2-responsive {
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
    }
    p.text-center {
        font-size: 1.2rem;
        font-weight: 400;
        // font-family: "Bree Serif",sans-serif;
    }
`