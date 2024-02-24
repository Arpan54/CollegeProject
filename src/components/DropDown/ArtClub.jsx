import React from "react";
import styled from "styled-components";
import NavDropDown from "./NavDropDown";
const ArtClub = () => {
  return (
    <>
      <NavDropDown />
      <Container>
        <h1>TINT Art Club - AESTHETICA</h1>
      </Container>
    </>
  );
};

export default ArtClub;

const Container = styled.div`
  margin: 0pc 150px 0px 150px;

  h1{
    text-align: center;
    font-size: 55px;
    font-weight: 600;
  }
`;
