import React from "react";
import SimpleNavbar from "../components/navbar";
import FooterWithLogo from "../components/footer";
import Container from "../components/container";
import ProfileCard from "../components/collaborator_profile";
const Collaborator: React.FC = () => {
  return (
    <>
      <Container className="min-h-screen flex flex-col">
        <SimpleNavbar />
        <div className="lg:flex flex-grow">
          <div className="pb-5 pt-5 pr-2 flex items-center justify-center flex-grow scale-90 lg:scale-100">
            <ProfileCard />
          </div>
          <div className="pb-5 pt-5 flex items-center justify-center flex-grow scale-90 lg:scale-100">
            <ProfileCard />
          </div>
        </div>

        <FooterWithLogo />
      </Container>
    </>
  );
};
export default Collaborator;
