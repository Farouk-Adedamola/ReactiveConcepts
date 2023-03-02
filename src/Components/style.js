import media from "styled-media-query";
import styled from "styled-components";

export const Section = styled.section`
  margin-top: 2rem;
  position: relative;
  margin-bottom: 2rem;

  ${media.greaterThan("large")`
  margin-top: ${(props) => (props.variant === "follow" ? "8rem" : "4rem")};
  margin-bottom: 3rem;
  `}
  h1,
  h3 {
    text-align: center;
  }

  h3 {
    font-family: poppins;
    font-weight: 600;
    font-size: 15px;
    color: #5e6282;

    ${media.greaterThan("medium")`
    font-size: 18px;
    `}
  }

  h1 {
    font-family: volkhov;
    font-weight: 700;
    font-size: 30px;
    margin: 0;
    ${media.greaterThan("medium")`
    font-size: 50px;
    `}
  }
  img {
    ${media.lessThan("medium")`
    display: none;
    `}
    position: absolute;
    right: 0;
    top: -10px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: ${(props) =>
    props.variant === "destination" ? "relative" : "none"};

  justify-content: ${(props) =>
    props.variant === "destination" ? "center" : ""};

  ${media.greaterThan("medium")`
  margin-top: 3rem;
`}

  ${media.greaterThan("large")`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`}

.springwire {
    position: absolute;
    right: 0;
  }
`;
