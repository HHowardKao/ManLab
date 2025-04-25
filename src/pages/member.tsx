import React from "react";
import Container from "../components/container";
import SimpleNavbar from "../components/navbar";
import FooterWithLogo from "../components/footer";
import ProfileCard from "../components/member_card";
const Member: React.FC = () => {
  return (
    <>
      <Container className="min-h-screen flex flex-col">
        <SimpleNavbar />

        <div className=" lg:flex items-center justify-center flex-grow scale-90 lg:scale-100">
          <div className="pb-3 pt-3 flex justify-center">
            <ProfileCard />
          </div>
          <div className="pb-3 pt-3 flex justify-center">
            <ProfileCard />
          </div>
          <div className="pb-3 pt-3 flex justify-center">
            <ProfileCard />
          </div>
        </div>

        <FooterWithLogo />
      </Container>
    </>
  );
};
export default Member;
