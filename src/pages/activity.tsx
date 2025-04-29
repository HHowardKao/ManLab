import React from "react";
import Container from "../components/container";
import SimpleNavbar from "../components/navbar";
import FooterWithLogo from "../components/footer";
import UnderlineTabs from "../components/activity_table";
import CarouselDemo from "../components/activity_gallery";
const Activity: React.FC = () => {
  return (
    <Container className="min-h-screen flex flex-col">
      <SimpleNavbar />

      <div className="pt-10 flex-grow justify-center scale-90 lg:scale-100">
        <UnderlineTabs />
        <CarouselDemo />
      </div>

      <FooterWithLogo />
    </Container>
  );
};
export default Activity;
