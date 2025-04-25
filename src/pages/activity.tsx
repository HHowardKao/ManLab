import React from "react";
import Container from "../components/container";
import SimpleNavbar from "../components/navbar";
import FooterWithLogo from "../components/footer";
import GalleryWithTab from "../components/activity_table";
const Activity: React.FC = () => {
  return (
    <Container className="min-h-screen flex flex-col">
      <SimpleNavbar />
      <div className="pt-5 flex-grow  flex justify-center scale-90 lg:scale-100">
        <GalleryWithTab />
      </div>

      <FooterWithLogo />
    </Container>
  );
};
export default Activity;
