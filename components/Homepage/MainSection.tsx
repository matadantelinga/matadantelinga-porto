import { FaEnvelope } from "react-icons/fa";
import { GridWrapper } from "../Shared/GridWrapper";
import { SocialButtons } from "../Shared/SocialButtons";
import { Button } from "../ui/button";
import TypingAnimation from "./TypingAnimation";

export const MainSection = () => {
  return (
    <>
      <GridWrapper className="main-section">
        <div className="col-span-6">
          <div className="icon up">
            <img src="/icons/icon-buble-1.svg" alt="" />
          </div>
          <h3 className="text-c-blue font-medium text-lg">Hi, Im Indra</h3>
          <TypingAnimation />
          <div className="main-content">
            <p className="py-4">
              Skilled front-end developer with 5+ years of experience,
              proficient in modern frameworks like Angular and Next.js. Let's
              team up to bring your ideas to life and create something
              exceptional!
            </p>
            <div className="social-btn flex gap-4 items-center">
              <Button>
                <FaEnvelope className="me-1"></FaEnvelope> Hire Me
              </Button>
              <SocialButtons showOnlyMain />
            </div>
          </div>
          <div className="icon bottom">
            <img src="/icons/icon-buble-2.svg" alt="" />
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
