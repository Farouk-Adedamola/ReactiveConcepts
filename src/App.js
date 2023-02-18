import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import media from "styled-media-query";
import {
  Destination,
  Bookings,
  Flights,
  Login,
  Signup,
  Hotels,
  Page404,
  SharedLayout,
} from "./Pages/index";

const Wrapper = styled.section`
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

function App() {
  return (
    <Fragment>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index path="/" element={<Destination />} />
              <Route path="flights" element={<Flights />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="Hotels" element={<Hotels />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="Page404" element={<Page404 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </Fragment>
  );
}

export default App;
