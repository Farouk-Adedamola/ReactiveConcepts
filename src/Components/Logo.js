import React, { Fragment } from "react";
import {
  AlitaliaLogo,
  QantasLogo,
  axonLogo,
  jeststarLogo,
  ExpediaLogo,
} from "../Assets/Index";
import styled from "styled-components";
import media from "styled-media-query";
const logoData = [
  {
    id: 1,
    img: axonLogo,
  },
  {
    id: 2,
    img: jeststarLogo,
  },
  {
    id: 3,
    img: ExpediaLogo,
  },
  {
    id: 4,
    img: QantasLogo,
  },
  {
    id: 5,
    img: AlitaliaLogo,
  },
];

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem 0;

  ${media.lessThan("medium")`
  margin: 6rem 0;
    width: 100%;
    justify-content: space-between;
    `}

  img {
    /* mix-blend-mode: luminosity; */
    filter: grayscale(100%);

    ${media.lessThan("medium")`
    width: 15vw;
    `}
  }
`;

const Logo = () => {
  return (
    <Fragment>
      <Section>
        {logoData.map((eachLogo) => {
          const { id, img } = eachLogo;
          return (
            <div key={id}>
              <img src={img} alt="" />
            </div>
          );
        })}
      </Section>
    </Fragment>
  );
};

export default Logo;
