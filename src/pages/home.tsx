import React from "react";
import SimpleNavbar from "../components/navbar";
import FooterWithLogo from "../components/footer";
import Container from "../components/container";
import ImageWithBlurredCaption from "../components/home_gallery";
import TimelineDemo from "../components/home_timeline";
const Home: React.FC = () => {
  return (
    <>
      <Container className="min-h-screen flex flex-col">
        <SimpleNavbar />
        <div className=" flex-grow pt-5 scale-90 lg:scale-100 ">
          <div className="pb-5">
            <ImageWithBlurredCaption />
          </div>

          <TimelineDemo />
        </div>

        <FooterWithLogo />
      </Container>
    </>
  );
};
export default Home;
