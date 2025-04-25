import React from "react";
import MembersTable from "../components/alumni_table";
import Container from "../components/container";
import SimpleNavbar from "../components/navbar";
import FooterWithLogo from "../components/footer";
const Alumni: React.FC = () => {
  return (
    <Container className="min-h-screen flex flex-col">
      <SimpleNavbar />
      <div className="flex-grow pt-5 pb-5 scale-90 lg:scale-100">
        <MembersTable />
      </div>

      <FooterWithLogo />
    </Container>
  );
};
export default Alumni;
