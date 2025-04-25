import React from "react";
import SimpleNavbar from "../components/navbar";
import FooterWithLogo from "../components/footer";
import CardDemo from "../components/research_card";
import Container from "../components/container";
const Research: React.FC = () => {
  return (
    <>
      <Container className="min-h-screen flex flex-col">
        <SimpleNavbar />
        <div className="pb-5 pt-5  flex  items-center justify-center flex-grow scale-90 lg:scale-100">
          <CardDemo />

          <CardDemo />

          <CardDemo />
        </div>

        <FooterWithLogo />
      </Container>
    </>
  );
};
export default Research;
