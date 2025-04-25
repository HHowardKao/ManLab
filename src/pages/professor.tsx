import React from "react";
import SimpleNavbar from "../components/navbar";
import FooterWithLogo from "../components/footer";
import Container from "../components/container";
import ProfileCard from "../components/professor_profile";
import BlogCard from "../components/professor_blogcard";
const Professor: React.FC = () => {
  return (
    <>
      <Container className="min-h-screen flex flex-col">
        <SimpleNavbar />
        <div className="pb-5 pt-5 lg:flex items-center justify-center flex-grow scale-90 lg:scale-100">
          <div className="pb-5 flex justify-center">
            <ProfileCard />
          </div>

          <div className=" lg:pl-5 text-center">
            <BlogCard />
          </div>
        </div>

        <FooterWithLogo />
      </Container>
    </>
  );
};
export default Professor;
