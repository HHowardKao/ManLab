import AccordionAllOpen from "../components/research_1";
import React from "react";
import SimpleNavbar from "../components/navbar";
import FooterWithLogo from "../components/footer";
import Container from "../components/container";
import { useNavigate } from "react-router-dom";
const Research: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container className="min-h-screen flex flex-col">
        <SimpleNavbar />

        <div className="pb-5 pt-5    items-center justify-center flex-grow scale-90 lg:scale-100">
          <div className="flex justify-start px-4 mb-4">
            <button
              onClick={() => navigate(-1)} // ✅ 點擊回上一頁
              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            >
              ← 上一頁
            </button>
          </div>
          <h1 className="text-[40px] flex justify-center">Content</h1>
          Surface plasmon polaritons (SPPs) are surface waves that travel along
          travel along a metal-dielectric or metal-air interface with the
          frequency at infrared or visible ranges depending on the plasma
          frequency of metal. (As shown in Fig. 1(a)1)
          <img src="./public/image/project1.png" alt="" />
          Fig. 1. (a) Schematic representation of an electron density wave
          propagating along a metal – dielectric interface and (b) Dispersion
          curve of Surface plasmon polaritons and incident light. To excite an
          SPP, light cone of incoming light should intersect with the dispersion
          curve of SPP (i.e., the two should possess the same kx component at
          the same frequency) as shown in Fig. 1(b).Yet, for a given frequency,
          no intersection could be observed, thus forbidding excitation of SPP
          by free propagating waves. To tackle this problem, a coupler that
          could confer extra kx component to the incoming light is in need. The
          conventional coupler is either a grating or a prism. On one hand, a
          grating coupler provides extra momentum by an amount related to the
          grating period f = 2nπ/a as shown in Fig. 2(a), where n is an integer
          and a is the periodicity. The light cone is translational-shifted
          corresponding to f = 2nπ/a, thus intersecting with the dispersion
          curve of SPP as shown in Fig. 2(b).
          <img src="./public/image/project1-2.png" alt="" />
          SPR-2 new Fig. 2. (a) SPP Excitation by Grating Coupler and (b) The
          extra wave momentum is provided by the grating. On the other hand, a
          prism can be positioned against a thin metal film in the Kretschmann
          configuration or in the Otto configuration. Considering the KR (Otto)
          configuration shown in Fig. 3, the incoming light impinges on the
          prism/metal interface at an angle larger than the total reflection
          angle, the evanescent field will penetrate through the metal
          (dielectric) thin film to the adjacent interface. In this case, the
          wave vector along metal/analyte interface becomes to k0 , and SPP is
          excited at the intersecting point between the inclined light cone and
          the dispersion curve of SPs at metal/analyte interface as illustrated
          in Fig. 3(c).
          <h1 className="text-[40px] flex justify-center">Q & A</h1>
          <AccordionAllOpen />
        </div>

        <FooterWithLogo />
      </Container>
    </>
  );
};
export default Research;
