import React, { Fragment } from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import media from "styled-media-query";
import background from "../Assets/background.svg";
import woman from "../Assets/woman.svg";
import play from "../Assets/play.svg";

// components

import Category from "../Components/Category";
import TopSelling from "../Components/TopSelling";
import Book from "../Components/Book";
import Logo from "../Components/Logo";
import Subscription from "../Components/Subscription";
import Footer from "../Components/Footer";

const Wrapper = styled.section`
  padding: 10px 4vw 0 4vw;
  ${media.greaterThan("medium")`
  padding: 15px 50px 0 50px;
  `}
  ${media.greaterThan("large")`
  padding: 15px 90px 0 90px;
  background-repeat: no-repeat;
  background-size: cover;
  `}
  
  @media screen and (min-width: 800px) {
    background-image: url(${background});
  }
  ${media.greaterThan("huge")`
  padding: 15px 150px 0 150px;
  `}
`;

const ComponentWrapper = styled.section`
  /* overflow to fix all unscaling svg problems  */
  overflow: hidden;
  padding: 10px 4vw 0 4vw;
  ${media.greaterThan("medium")`
  padding: 15px 50px 0 50px;
  `}
  ${media.greaterThan("large")`
  padding: 15px 90px 0 90px;
  `}
  ${media.greaterThan("huge")`
  padding: 15px 150px 0 150px;
  `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 50px;

  ${media.greaterThan("medium")`
  /* gap: 5vw; */
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  `}

  img {
    ${media.greaterThan("large")`
    width: 45vw;
    height: 650px;
    `}

    ${media.greaterThan("medium")`
    width: 50vw;
    `}
  }
`;

const SectionOne = styled.section`
  ${media.greaterThan("medium")`
  /* width: 45vw; */
  /* justify-self: center; */
`}
  h3 {
    font-size: 20px;
    color: #df6951;
    font-family: poppins;
    font-weight: 700;

    ${media.lessThan("medium")`
    font-size: 14px;
  `}
  }

  p {
    color: #5e6282;
    font-family: poppins;
    font-weight: 500;
  }
`;

const HeadText = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #181e4b;
  font-family: volkhov;
  letter-spacing: -0.04rem;
  @media screen and (min-width: 900px) {
    font-size: 50px;
    max-width: 500px;
    margin: 0;
  }

  @media screen and (min-width: 1000px) {
    font-size: 55px;
    max-width: 500px;
  }

  @media screen and (min-width: 1100px) {
    font-size: 60px;
    max-width: 550px;
  }

  ${media.greaterThan("large")`
  font-size: 60px;
  max-width: 500px;
  `}
  @media screen and (min-width: 1300px) {
    font-size: 65px;
    max-width: 550px;
  }
  ${media.greaterThan("huge")`
     font-size: 70px;
  max-width: 600px;
  `}

  @media screen and (min-width: 1550px) {
    font-size: 60px;
    max-width: 650px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 34px;

  ${media.greaterThan("medium")`
  max-width: 550px;
  `}

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 20px;
    width: 150px;

    ${media.greaterThan("medium")`
    width: auto;

    p {
      margin-left: 20px;
    }
    `}

    p {
      color: #686d77;
      font-family: poppins;
      font-weight: 500;
    }
  }
`;

const HeroCta1 = styled.button`
  background: #f1a501;
  font-size: 15px;
  color: #ffffff;
  border: none;
  box-shadow: 0px 20px 35px rgba(241, 165, 1, 0.15);
  border-radius: 10px;
  padding: 13px 18px;
  ${media.greaterThan("medium")`
  font-size: 18px;
  padding: 19px 27px;
  `}
`;

const HeroCta2 = styled(HeroCta1)`
  background: #df6951;
  box-shadow: 0px 15px 30px rgba(223, 105, 81, 0.3);
  border-radius: 45px;
  padding: 15px 17px;
  /* border: none; */

  ${media.greaterThan("medium")`
  
  `}
  img {
    width: 15px;
    height: 15px;
  }
`;

const Contact = () => {
  return (
    <Fragment>
      <Wrapper>
        <Navbar />
        <Container>
          <SectionOne>
            <h3>Best Destinations around the world</h3>
            <HeadText>Travel, enjoy and live a new and full life</HeadText>
            <p>
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <ButtonWrapper>
              <HeroCta1>Find out more</HeroCta1>
              <div>
                <HeroCta2>
                  <img src={play} alt="play button" />
                </HeroCta2>
                <p>Play demo</p>
              </div>
            </ButtonWrapper>
          </SectionOne>
          {/* section 2 */}
          {/* <SectionTwo> */}
          <img src={woman} alt="woman traveller" />
          {/* </SectionTwo> */}
        </Container>
      </Wrapper>
      <ComponentWrapper>
        <Category />
        <TopSelling />
        <Book />
        <Logo />
        <Subscription />
        <Footer />
      </ComponentWrapper>
    </Fragment>
  );
};

export default Contact;
