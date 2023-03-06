import React, { Fragment, useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import mail from "../Assets/mail.svg";
import send from "../Assets/sendspecial.svg";
import maskgroup from "../Assets/maskgroup.svg";
import mask2large from "../Assets/mask2large.svg";

const Section = styled.main`
  background: #dfd7f9;
  border-radius: 40px 15px 15px 15px;
  padding: 2rem 0;
  position: relative;

  ${media.greaterThan("large")`
  padding: 79px 0;
border-radius: 129px 20px  20px 20px;
  `}

  h3 {
    text-align: center;
    font-size: 20px;
    font-family: poppins;
    font-weight: 600;
    padding: 1rem 1.5rem;
    ${media.between("medium", "large")`
  
    font-size: 30px;

  `}

    ${media.greaterThan("large")`
    font-size: 33px;
    padding: 0 155px ;
    `}

    ${media.greaterThan("medium")`
    padding: 0 135px ;
    `}
  }

  ${media.lessThan("medium")`
  max-width: 600px;
  margin: auto;
  /* display: ; */
  `}

  ${media.between("medium", "large")`
  padding-top: 50px;
  padding-bottom: 50px;

  `}
`;
const SendWrapper = styled.div`
  position: absolute;
  top: -1rem;
  right: -1rem;
  background: linear-gradient(201.65deg, #747def 10.27%, #5e3be1 100%);
  padding: 0.5rem 0.6rem;
  border-radius: 50%;

  ${media.greaterThan("large")`
  /* border-radius: 45px; */
  padding: 0.7rem 0.8rem;
  `}

  img {
    width: 24px;
    height: 20px;
    ${media.greaterThan("large")`
    
    width: 34px;
    height: 30px;
    `}
  }
`;

const Maskgroup = styled.div`
  ${media.lessThan("large")`
    display: none;
    `}
  position: absolute;
  right: 0;
  top: 0;
`;

const Mask2large = styled.div`
  ${media.lessThan("large")`
    display: none;
    `}
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Form = styled.div`
  ${media.greaterThan("large")`
margin-top: 74px;
`}
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    padding: 10px 10px 10px 10px;
    border-radius: 10px;
    border: none;
    margin-left: 15px;
    color: #fff;
    background: linear-gradient(180deg, #ff946d 0%, #ff7d68 100%);
    ${media.greaterThan("large")`
    padding: 15px 15px 15px 15px;
    margin-left: 24px;

    `}
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 25vw;
    padding: 10px 15px 10px 40px;
    border-radius: 10px;
    border: none;
    background: #fff;
    ${media.greaterThan("large")`
    padding: 15px 25px 15px 40px;
    `}
  }

  .mailbox {
    position: absolute;
    left: 1rem;
  }
`;

const Subscription = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <Section>
        <SendWrapper>
          <img src={send} alt="" />
        </SendWrapper>
        <Maskgroup>
          <img className="maskgroup" src={maskgroup} alt="" />
        </Maskgroup>
        <Mask2large>
          <img className="mask2large" src={mask2large} alt="" />
        </Mask2large>
        <h3>
          Subscribe to get information, latest news and other interesting offers
          about Cobham
        </h3>
        <Form>
          <form className="form" onSubmit={handleSubmit}>
            <InputWrapper>
              <input
                type="email"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <img className="mailbox" src={mail} alt="" />
            </InputWrapper>
            <button>Subscribe</button>
          </form>
        </Form>
      </Section>
    </Fragment>
  );
};

export default Subscription;
