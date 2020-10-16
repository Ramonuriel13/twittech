import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import devMan from "../assets/images/devMan.svg";
import devWoman from "../assets/images/devWoman.svg";
import { Container, Nav } from "../assets/styles/typography";
import {
  TitleHeader,
  HeaderTitle,
  SideRight,
  SideLeft,
} from "../assets/styles/pages/landing";


function Landing() {
  return (
    <>
      <Header />
      <Container>
        <TitleHeader>{`Mentoria`}</TitleHeader>
        <HeaderTitle>{`& Colaboração`}</HeaderTitle>
        <Nav>
          <SideLeft src={devMan} />
          <SideRight src={devWoman} />
        </Nav>
      </Container>
      <Footer/>
    </>
  );
}

export default Landing;
