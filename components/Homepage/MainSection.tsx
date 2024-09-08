import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GridWrapper } from "../Shared/GridWrapper";
import { SectionTitle } from "../Shared/SectionTitle";
import { Button } from "../ui/button";

export const MainSection = () => {
  return (
    <>
      <GridWrapper>
        <div className="col-span-6">
          <h3 className="text-c-blue font-medium text-lg">Hi, Im Indra</h3>
          <SectionTitle className="font-medium">
            Frontend Developer, UI & Logo Designer
          </SectionTitle>
          <div className="main-content ">
            <p className="py-2">
              Skilled front-end developer with 5+ years of experience,
              proficient in modern frameworks like Angular and Next.js. Let's
              team up to bring your ideas to life and create something
              exceptional!
            </p>
            <div className="social-btn flex gap-2 items-center">
              <Button>
                <FaEnvelope className="me-1"></FaEnvelope> Email Me
              </Button>
              <ul className="flex gap-2">
                <li>
                  <a className="text-c-black2" href="#">
                    <FaInstagram size={22}></FaInstagram>
                  </a>
                </li>
                <li>
                  <a className="text-c-black2" href="#">
                    <FaLinkedin size={22}></FaLinkedin>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="main-bg text-center">
            <img src="/images/main-bg.svg" className="m-auto" alt="" />
          </div>
        </div>
      </GridWrapper>
    </>
  );
};
