import React, { Fragment } from "react";
import media from "styled-media-query";
import styled from "styled-components";
import europe2 from "../Assets/europe2.svg";
import london from "../Assets/london.svg";
import italy from "../Assets/italy.svg";
import arrow from "../Assets/arrow.svg";
import spring from "../Assets/springwire.svg";

import { Section, Main } from "./style";

const data = [
  {
    id: 1,
    img: italy,
    place: "Rome, Italty",
    price: "$5,42k",
    days: "10 Days Trip",
  },
  {
    id: 2,
    img: london,
    place: "London, UK",
    price: "$4.2k",
    days: "12 Days Trip",
  },
  {
    id: 3,
    img: europe2,
    place: "Full Europe",
    price: "$15k",
    days: "28 Days Trip",
  },
];

const image = [data.img];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  /* width: 400px; */
  /* background-image: url (${image}); */

  ${media.lessThan("small")`
  justify-content: center;
  `}

  .background_image {
    display: block;
    width: 400px;
    /* position: absolute; */

    ${media.lessThan("small")`
    /* width: 300px; */
    justify-self: center;
    `}
  }
`;

const Wrapper = styled.div`
  /* background: blue; */
  background: #fff;
  margin: 0;
  width: 227px;
  position: absolute;
  /* top: 0; */
  bottom: 7rem;
  left: 16.6%;
  padding: 23px 20px 32px 20px;

  border-radius: 0px 0px 24px 24px;
  ${media.lessThan("small")`
  width: 233px;
  bottom: 6.5rem;
  padding: 18px 15px 27px 18px;
  
  `}
  .Wrapper__upper {
    display: flex;
    justify-content: space-between;
  }

  .Wrapper__down {
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0;

    p {
      margin-left: 15px;
    }
  }

  p {
    color: #5e6282;
    font-family: poppins;
    font-weight: 500px;

    ${media.lessThan("small")`
    font-size: 14px;
    `}
  }
`;

const Arrow = styled.img`
  width: 20px;
  height: 20px;
`;

const TopSelling = () => {
  return (
    <Fragment>
      <Section variant="follow">
        <h3>Top Selling</h3>
        <h1>Top Destinations</h1>
      </Section>
      <Main variant="destination">
        <img src={spring} className="springwire" alt="spring" />
        {data.map((each) => {
          const { id, img, place, days, price } = each;
          return (
            <Container key={id}>
              <img className="background_image" src={img} alt="place" />
              <Wrapper>
                <div className="Wrapper__upper">
                  <p>{place}</p>
                  <p>{price}</p>
                </div>
                <div className="Wrapper__down">
                  <Arrow src={arrow} alt="" />
                  <p>{days}</p>
                </div>
              </Wrapper>
            </Container>
          );
        })}
      </Main>
    </Fragment>
  );
};

export default TopSelling;
