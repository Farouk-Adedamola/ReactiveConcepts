import React, { Fragment, useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import { HiBars2 } from "react-icons/hi2";
import styled from "styled-components";
import media from "styled-media-query";
import { MdCancel } from "react-icons/md";

const NavContainer = styled.div`
  ${media.greaterThan("medium")`
display: flex;
align-items: center;
width: 100%;
justify-content: space-between;
`}
`;

const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  // padding: 0.5rem 0.7rem;
  align-items: center;

  button {
    background: transparent;
    border: none;
    // transition: all 0.4s;
    ${media.greaterThan("medium")`
    display: none;
    `}
  }
`;

const LinksWrapper = styled.div`
  overflow: hidden;
  height: 0;
  transition: all 0.4s;

  ${media.greaterThan("medium")`
    height: auto !important;
  `}

  ${media.greaterThan("large")`
  display: flex;
  justify-content: flex-end;
  width: 60vw;
  `}
`;

const LinkContainer = styled.ul`
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  padding: 0;

  ${media.greaterThan("medium")`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 60vw;
    justify-content: space-between;
    `}

  ${media.greaterThan("large")`
    justify-content: space-between;
    `}
  display: flex;

  a {
    text-decoration: none;
  }
  li {
    list-style: none;
    padding-left: 1rem;
  }
  // for rendering Navlinks with styled component but yeah it can be a headache doing this
  // a {
  //   text-decoration: none;
  // }
  // li {
  //   list-style: none;
  //   font-size: 1.2rem;
  //   width: 200px;
  // }
  // .active {
  //   color: #000;
  //   li {
  //     list-style: none;
  //     border-bottom: 1.5px solid red;
  //     width: 250px;
  //   }
  // }
`;

export const navbarData = [
  {
    id: 1,
    url: "/",
    name: "Destination",
  },
  {
    id: 2,
    url: "/flights",
    name: "Flights",
  },
  {
    id: 3,
    url: "/Bookings",
    name: "Bookings",
  },
  {
    id: 4,
    url: "/hotels",
    name: "Hotels",
  },
  {
    id: 5,
    url: "/login",
    name: "Login",
  },
  {
    id: 6,
    url: "/Signup",
    name: "Signup",
    // CSS: { border: "1px solid #000" },
  },
];

const Navbar = () => {
  const [barToggle, setBarToggle] = useState(false);
  const LinksWrapperRef = useRef(null);
  const LinkContainerRef = useRef(null);

  useEffect(() => {
    const linkHeight = LinkContainerRef.current.getBoundingClientRect().height;
    console.log(linkHeight);
    if (barToggle) {
      LinksWrapperRef.current.style.height = `${linkHeight + 15}px`;
    } else {
      LinksWrapperRef.current.style.height = "0px";
    }
  }, [barToggle]);

  return (
    <Fragment>
      <section>
        <NavContainer>
          <HeaderSection>
            <img src={Logo} alt="jadoo" />
            {barToggle ? (
              <button onClick={() => setBarToggle(!barToggle)}>
                <MdCancel style={{ fontSize: "3rem", transition: "all .5s" }} />
              </button>
            ) : (
              <button onClick={() => setBarToggle(!barToggle)}>
                <HiBars2 style={{ fontSize: "3rem" }} />
              </button>
            )}
            {/* {barToggle && (
              
            )} */}
          </HeaderSection>
          <LinksWrapper ref={LinksWrapperRef}>
            <LinkContainer ref={LinkContainerRef}>
              {navbarData.map((links) => {
                const { id, url, name, CSS } = links;
                return (
                  <li key={id} style={CSS}>
                    <NavLink
                      to={url}
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "red" : "grey",
                          fontSize: "1.2rem",
                        };
                      }}
                    >
                      {name}
                    </NavLink>
                  </li>
                );
              })}
            </LinkContainer>
          </LinksWrapper>
        </NavContainer>
      </section>
    </Fragment>
  );
};

export default Navbar;
