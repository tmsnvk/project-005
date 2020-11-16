import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 15px;
  color: red;
`;

const Home: FunctionComponent = () => {
  return (
    <Heading>Hello Gatsby!</Heading>
  );
};

export default Home;