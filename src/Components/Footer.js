import React, { Fragment } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import FooterLogo from "../Assets/FooterJadoo.svg";
import { Link } from "react-router-dom";

import {
  instagramicon,
  twittericon,
  FacebookIcon,
  googleplay,
  appstore,
} from "../Assets/Index";

const Company = [
  {
    id: 1,
    text: "About",
    url: "/",
  },
  {
    id: 2,
    text: "Careers",
    url: "/",
  },
  {
    id: 3,
    text: "Mobile",
    url: "/",
  },
];

const Contact = [
  {
    id: 1,
    text: "Help/FAQ",
    url: "/",
  },
  {
    id: 2,
    text: "Press",
    url: "/",
  },
  {
    id: 3,
    text: "Affiliate",
    url: "/",
  },
];

const More = [
  {
    id: 1,
    text: "Airlinefees",
    url: "/",
  },
  {
    id: 2,
    text: "Airline",
    url: "/",
  },
  {
    id: 3,
    text: "Low fare tips",
    url: "/",
  },
];

const Section = styled.section`
  margin-top: 45px;
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  padding: 50px 30px;
  /* padding-bottom : 50px; */
  ${media.greaterThan("medium")`
  margin-top: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  `}
`;

const Wrapper = styled.div`
  ${media.greaterThan("medium")`
  width: 30%;
  `}

  p {
    font-family: poppins;
    font-weight: 500;
    color: #5e6282;
  }
`;

const WrapperTwo = styled.div`
  ${media.greaterThan("medium")`
  width: 20%;
  `}

  h3 {
    font-family: poppins;
    font-weight: 700;
    color: #080809;
  }
`;

const Social = styled.div`
  ${media.greaterThan("medium")`
  width: 30%;
  `}

  main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    /* ${media.greaterThan("medium")`
    width: 120px;
    `} */
    ${media.greaterThan("large")`
    width: 30%;
    `}
    .instagram {
      padding: 0.2rem 0.3rem;
      border-radius: 45px;
      background: conic-gradient(
        from 180deg at 50% 50%,
        #b8d2f1 0deg,
        #f289aa 60deg,
        #c68bf0 106.09deg,
        #d164da 153.75deg,
        #c963e8 221.25deg,
        #bfc2e8 258.75deg,
        #ffc999 288.75deg,
        #d0d8c9 315deg,
        #bad0f1 334.13deg,
        #ced8cb 358.97deg,
        rgba(255, 255, 255, 0) 360deg
      );
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
  }

  .app {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    ${media.greaterThan("large")`
      flex-direction: row;

    `}

    .appstore {
      ${media.lessThan("medium")`
        margin-top: 15px;
        `}
    }
  }
`;

const Footer = () => {
  return (
    <Fragment>
      <Section>
        <Wrapper>
          <img src={FooterLogo} alt="" />
          <p>Book your trip in minute, get full Control for much longer.</p>
        </Wrapper>
        <WrapperTwo>
          <h3>Company</h3>
          {Company.map((each) => {
            const { id, text, url } = each;
            return (
              <div className="map" key={id}>
                <Link to={url}>{text}</Link>
              </div>
            );
          })}
        </WrapperTwo>
        <WrapperTwo>
          <h3>Contact</h3>
          {Company.map((each) => {
            const { id, text, url } = each;
            return (
              <div key={id}>
                <Link to={url}>{text}</Link>
              </div>
            );
          })}
        </WrapperTwo>

        <WrapperTwo>
          <h3>More</h3>
          {More.map((each) => {
            const { id, text, url } = each;
            return (
              <div key={id}>
                <Link to={url}>{text}</Link>
              </div>
            );
          })}
        </WrapperTwo>
        <Social>
          <main>
            <div>
              <img src={FacebookIcon} alt="" />
            </div>
            <div className="instagram">
              <img src={instagramicon} alt="" />
            </div>
            <div>
              <img src={twittericon} alt="" />
            </div>
          </main>
          <p>Discover our app</p>
          <div className="app">
            <img src={googleplay} alt="" />
            <img className="appstore" src={appstore} alt="" />
          </div>
        </Social>
      </Section>
    </Fragment>
  );
};

export default Footer;
