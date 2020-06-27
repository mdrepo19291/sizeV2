import React from 'react';
import styled from 'styled-components';

const SAMPLE_DATA:{[key: string]: string}[] = [
    {
        "title":"M51 ICBM, France – 10,000km",
        "img":"https://firebasestorage.googleapis.com/v0/b/sizee109.appspot.com/o/doc-data%2Fimages%2Ficbm-longest-range%2F10?alt=media&token=404771ea-2288-408b-b9d6-27cea10404b7",
        "desc":"The M51 is an intercontinental range submarine-launched ballistic missile produced by EADS Astrium Space Transportation, for the French Navy. Designed to replace the M45 SLBM (the MSBS or Mer-Sol-Balistique-Stratégique in French, meaning ‘Sea-ground-Strategic ballistic’), it was first deployed in 2010. The missile was inducted into service aboard the French Navy’s Triomphant class submarines in 2010. Its operational range is between 8,000km and 10,000km. An improved version with new nuclear warheads is scheduled for commissioning in 2015. The M51 weighs 50t and can carry six independently targetable re-entry vehicles with a yield between 100kt and 150kt each. The three-stage missile is powered by a solid rocket motor integrating a flex-bearing nozzle"
    },
    {
        "title":"M51 ICBM, France – 10,000km",
        "img":"https://firebasestorage.googleapis.com/v0/b/sizee109.appspot.com/o/doc-data%2Fimages%2Ficbm-longest-range%2F10?alt=media&token=404771ea-2288-408b-b9d6-27cea10404b7",
        "desc":"The M51 is an intercontinental range submarine-launched ballistic missile produced by EADS Astrium Space Transportation, for the French Navy. Designed to replace the M45 SLBM (the MSBS or Mer-Sol-Balistique-Stratégique in French, meaning ‘Sea-ground-Strategic ballistic’), it was first deployed in 2010. The missile was inducted into service aboard the French Navy’s Triomphant class submarines in 2010. Its operational range is between 8,000km and 10,000km. An improved version with new nuclear warheads is scheduled for commissioning in 2015. The M51 weighs 50t and can carry six independently targetable re-entry vehicles with a yield between 100kt and 150kt each. The three-stage missile is powered by a solid rocket motor integrating a flex-bearing nozzle"
    },
    {
        "title":"M51 ICBM, France – 10,000km",
        "img":"https://firebasestorage.googleapis.com/v0/b/sizee109.appspot.com/o/doc-data%2Fimages%2Ficbm-longest-range%2F10?alt=media&token=404771ea-2288-408b-b9d6-27cea10404b7",
        "desc":"The M51 is an intercontinental range submarine-launched ballistic missile produced by EADS Astrium Space Transportation, for the French Navy. Designed to replace the M45 SLBM (the MSBS or Mer-Sol-Balistique-Stratégique in French, meaning ‘Sea-ground-Strategic ballistic’), it was first deployed in 2010. The missile was inducted into service aboard the French Navy’s Triomphant class submarines in 2010. Its operational range is between 8,000km and 10,000km. An improved version with new nuclear warheads is scheduled for commissioning in 2015. The M51 weighs 50t and can carry six independently targetable re-entry vehicles with a yield between 100kt and 150kt each. The three-stage missile is powered by a solid rocket motor integrating a flex-bearing nozzle"
    },
    {
        "title":"M51 ICBM, France – 10,000km",
        "img":"https://firebasestorage.googleapis.com/v0/b/sizee109.appspot.com/o/doc-data%2Fimages%2Ficbm-longest-range%2F10?alt=media&token=404771ea-2288-408b-b9d6-27cea10404b7",
        "desc":"The M51 is an intercontinental range submarine-launched ballistic missile produced by EADS Astrium Space Transportation, for the French Navy. Designed to replace the M45 SLBM (the MSBS or Mer-Sol-Balistique-Stratégique in French, meaning ‘Sea-ground-Strategic ballistic’), it was first deployed in 2010. The missile was inducted into service aboard the French Navy’s Triomphant class submarines in 2010. Its operational range is between 8,000km and 10,000km. An improved version with new nuclear warheads is scheduled for commissioning in 2015. The M51 weighs 50t and can carry six independently targetable re-entry vehicles with a yield between 100kt and 150kt each. The three-stage missile is powered by a solid rocket motor integrating a flex-bearing nozzle"
    },
]

const Top10Content = () => {
    return (
      <StyledDiv>
        <p className="">
          This is just another Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatem quia corrupti vel qui asperiores aliquam, enim, temporibus voluptates nisi et excepturi molestias quaerat. Quibusdam necessitatibus illo eveniet eaque minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi amet esse ex perferendis, porro impedit repudiandae dolores alias totam sequi dolorem officiis sunt asperiores ratione aperiam maxime fugiat suscipit eaque!
        </p>
        {
            SAMPLE_DATA.map( (sections, index) =>
              <>
                <h4 className="font-weight-bold mt-5">{`${index+1}) ${sections.title}`}</h4>
                <img className="img-fluid mt-2 mb-4 z-depth-1-half" src={sections.img} alt="image 1" />
                <p>{sections.desc}</p>
              </>
            )
        }
      </StyledDiv>
    )
}

export default Top10Content;

const StyledDiv = styled.div`
    p {
        font-size: 1.1rem;
        line-height: 1.7;
        letter-spacing: .5px;
        font-weight: 400;
        text-align: justify;
        // font-family: "Bree Serif",sans-serif;
    }
`