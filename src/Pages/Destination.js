import React, { Fragment } from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import media from "styled-media-query";
import background from "../Assets/background.svg";
import woman from "../Assets/woman.svg";
import play from "../Assets/play.svg";

const Wrapper = styled.section`
  padding: 10px 4vw 0 4vw;
  ${media.greaterThan("medium")`
  padding: 15px 50px 0 50px;
  `}
  ${media.greaterThan("large")`
  padding: 15px 90px 0 90px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  `}
  ${media.greaterThan("huge")`
  padding: 15px 150px 0 150px;
  `}
`;

const Container = styled.div`
  display: flex;

  ${media.lessThan("medium")`
  flex-direction: column;
  `}

  h3 {
    font-size: 20px;
    color: #df6951;
    font-family: poppins;

    ${media.lessThan("medium")`
    font-size: 14px;

  `}
  }
`;

const Contact = () => {
  return (
    <Fragment>
      <Wrapper>
        <Navbar />
        <Container>
          <div>
            <h3>Best Destinations around the world</h3>
            <h1>Travel, enjoy and live a new and full life</h1>
            <p>
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div>
              <button>Find out more</button>
              <div>
                <button>
                  <img src={play} alt="play button" />
                </button>
              </div>
            </div>
          </div>
          <img src={woman} alt="woman traveller" />
        </Container>
      </Wrapper>
    </Fragment>
  );
};

export default Contact;
