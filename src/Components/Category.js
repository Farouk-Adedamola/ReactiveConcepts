import React, { Fragment } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import CalculatedSvg from "../Assets/CalculatedSvg.svg";
import customization from "../Assets/customization.svg";
import LocalEvents from "../Assets/LocalEvents.svg";
// import Bestflight2 from "../Assets/Bestflight2.svg";
import Bestflight from "../Assets/Bestflight.svg";

import dottedplus from "../Assets/dottedplus.svg";
import { Section, Main } from "./style";

// const Section = styled.section`
//   margin-top: 2rem;
//   position: relative;
//   ${media.greaterThan("large")`
//   margin-top: 4rem;
//   `}
//   h1,
//   h3 {
//     text-align: center;
//   }

//   h3 {
//     font-family: poppins;
//     font-weight: 600;
//     font-size: 15px;
//     color: #5e6282;

//     ${media.greaterThan("medium")`
//     font-size: 18px;
//     `}
//   }

//   h1 {
//     font-family: volkhov;
//     font-weight: 700;
//     font-size: 30px;
//     margin: 0;
//     ${media.greaterThan("medium")`
//     font-size: 50px;
//     `}
//   }
//   img {
//     ${media.lessThan("medium")`
//     display: none;
//     `}
//     position: absolute;
//     right: 0;
//     top: -10px;
//   }
// `;

// const Main = styled.main`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   ${media.greaterThan("medium")`
//   margin-top: 3rem;
// `}

//   ${media.greaterThan("large")`
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// align-items: center;
// `}
// `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 3.14815px;
  ${media.greaterThan("medium")`
  padding: 28px 35px;
  `}
  div {
    h3,
    p {
      text-align: center;
    }

    h3 {
      ${media.greaterThan("large")`
        font-size: 16px;
        `}
    }

    p {
      max-width: 250px;
      ${media.greaterThan("large")`
        width: 200px;
        font-size: 20px;
        `}
    }
  }

  img {
    width: ${(props) => (props.variant === "wider" ? "112px" : "92px")};
    height: 77px;
  }
`;

const Container2 = styled(Container)`
  background: #ffffff;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
    0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
    0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
    0px 20px 13px rgba(0, 0, 0, 0.01),
    0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
    0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
  border-radius: 36px;
  position: relative;
  /* z-index: 1000; */

  .design {
    position: absolute;
    width: 100px;
    height: 100px;
    left: -2rem;
    bottom: -2rem;
    z-index: -3;
    background: #df6951;
    border-radius: 30px 0px 10px;
  }
`;

const Category = () => {
  return (
    <Fragment>
      <Section>
        <h3>CATEGORY</h3>
        <h1>We Offer Best Services</h1>
        <img src={dottedplus} alt="" />
      </Section>
      <Main>
        <Container>
          <img src={CalculatedSvg} alt="" />
          <div>
            <h3>Calculated Weather </h3>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
        </Container>
        {/* container 2 */}
        <Container2>
          <div className="design"></div>
          <img src={Bestflight} variant="wider" alt="" />
          <div>
            <h3>Best Flights</h3>
            <p>Engrossed listening. Park gate sell they west hard for the.</p>
          </div>
        </Container2>
        {/* container 3 */}
        <Container>
          <img src={LocalEvents} alt="" />
          <div>
            <h3>Local Events</h3>
            <p>
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.{" "}
            </p>
          </div>
        </Container>
        {/* conatiner 4 */}
        <Container>
          <img src={customization} alt="" />
          <div>
            <h3>Customization</h3>
            <p>
              We deliver outsourced aviation services for military customers
            </p>
          </div>
        </Container>
      </Main>
    </Fragment>
  );
};

export default Category;
