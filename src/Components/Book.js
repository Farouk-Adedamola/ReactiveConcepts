import React, { Fragment } from "react";
import styled from "styled-components";
import media from "styled-media-query";
// images

import choose from "../Assets/choose.svg";
import make from "../Assets/make.svg";
import reach from "../Assets/reach.svg";
import ladyfly from "../Assets/ladyfly.svg";
import progressbar from "../Assets/progressbar.svg";
import leaf from "../Assets/leaf.svg";
import smallestimage from "../Assets/smallestimage.svg";
import building from "../Assets/building.svg";
import map from "../Assets/map.svg";
import send2 from "../Assets/send2.svg";
import heart from "../Assets/heart.svg";

const Main = styled.main`
  ${media.greaterThan("large")`
display: flex;
justify-content: space-between;
`}
`;
const Section = styled.section`
  ${media.greaterThan("large")`
width: 45%;
`}
  p {
    font-family: poppins;
    font-weight: 600;
    color: #5e6282;
  }

  h1 {
    font-family: volkhov;
    font-weight: 700;
    font-size: 30px;
    ${media.greaterThan("large")`
    font-size: 50px;
    max-width: 511px;
    margin: 0;
    color: #14183E;
    `}
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  /* justify-content: space-between; */
  margin: 2rem 0;

  .Wrapper__first {
    background: #f0bb1f;
    padding: 1rem;
    border-radius: 1rem;
  }

  .Wrapper__second {
    background: #f15a2b;
    padding: 1rem;
    border-radius: 1rem;
  }

  .Wrapper__third {
    background: #006380;
    padding: 1rem;
    border-radius: 1rem;
  }
`;

const Contain = styled.div`
  margin-left: 2rem;
  h3 {
    margin: 0;
    font-family: poppins;
    font-weight: 700;
    color: #5e6282;
  }

  p {
    ${media.greaterThan("large")`
    max-width: 350px;
    `}
    margin: 0;
    color: #5e6282;
    font-family: poppins;
    font-weight: 400;
  }
`;

const SectionTwo = styled.div`
  /* ${media.greaterThan("large")`
width: 50%;
`} */

  position: relative;
  left: -7rem;
  .partone {
    background: #ffffff;
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
      0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
      0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
      0px 20px 13px rgba(0, 0, 0, 0.01),
      0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
      0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
    border-radius: 26px;
    padding: 0.8rem;
    .partone__Headtext {
      margin: 0.4rem 0;
    }
    .partone__normaltext {
      color: #84829a;
      font-family: poppins;
      font-weight: 500;
    }

    .Wrap__container {
      margin: 1.5rem 0;
      display: flex;
      width: 140px;
      justify-content: space-between;
    }
  }
`;

const Wrap = styled.div`
  background: #f5f5f5;
  padding: 0.7rem 0.9rem;
  border-radius: 45px;
`;

const FootMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .Footmain__one {
    display: flex;
    p {
      margin-left: 10px;
    }
  }
`;

const Card = styled.div`
  position: absolute;
  right: -6rem;
  bottom: 10rem;
  padding: 0.5rem 0.8rem;
  background: #ffffff;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
    0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
    0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
    0px 20px 13px rgba(0, 0, 0, 0.01),
    0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
    0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
  border-radius: 18px;
  .parttwo {
    display: flex;
    align-items: flex-start;

    .Card__headText {
      margin-left: 15px;
      p {
        margin: 0;
      }
      h3 {
        margin: 0 0 1rem 0;
      }
    }
  }

  p {
    margin: 0 0 1rem 0;

    span {
      color: #8a79df;
    }
  }
`;
const Book = () => {
  return (
    <Fragment>
      <Main>
        <Section>
          <p>Easy and Fast</p>
          <h1>Book your next trip in 3 easy steps</h1>
          <Wrapper>
            <div className="Wrapper__first">
              <img src={choose} alt="" />
            </div>
            <Contain>
              <h3>Choose Destination</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </Contain>
          </Wrapper>

          {/* second */}
          <Wrapper>
            <div className="Wrapper__second">
              <img src={make} alt="" />
            </div>
            <Contain>
              <h3>Make Payment</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </Contain>
          </Wrapper>
          {/* third */}
          <Wrapper>
            <div className="Wrapper__third">
              <img src={reach} alt="" />
            </div>
            <Contain>
              <h3>Reach Airport on Selected Date</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </Contain>
          </Wrapper>
        </Section>
        <SectionTwo>
          <div className="partone">
            <img src={ladyfly} alt="ladyfly" />
            <h3 className="partone__Headtext">Trip To Greece</h3>
            {/* <section className="sideText"> */}
            <p className="partone__normaltext">
              14-29 June || by Robbin joseph
            </p>
            {/* </section> */}
            <section className="Wrap__container">
              <Wrap>
                <img src={leaf} alt="" />
              </Wrap>
              <Wrap>
                <img src={map} alt="" />
              </Wrap>
              <Wrap>
                <img src={send2} alt="" />
              </Wrap>
            </section>
            <FootMain>
              <div className="Footmain__one">
                <img src={building} alt="" />
                <p>24 people going</p>
              </div>
              <div>
                <img src={heart} alt="" />
              </div>
            </FootMain>
          </div>

          {/* second part card */}
          <Card>
            <div className="parttwo">
              <img src={smallestimage} alt="" />
              <div className="Card__headText">
                <p>Ongoing</p>
                <h3>Trip to rome</h3>
                <p>
                  <span>40%</span> completed
                </p>

                <img src={progressbar} alt="" />
              </div>
            </div>
          </Card>
        </SectionTwo>
      </Main>
    </Fragment>
  );
};

export default Book;
