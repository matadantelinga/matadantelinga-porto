import { ContactForm } from "../Contact/ContactForm";
import { GridWrapper } from "../Shared/GridWrapper";
import { SectionTitle } from "../Shared/SectionTitle";

export const Contact = () => {
  return (
    <>
      <GridWrapper>
        <div className="col-span-12">
          <SectionTitle className="font-medium text-center">
            Send me a message!
          </SectionTitle>
          <p className="text-center">
            Got a question or proposal, or just want to invite me to have a cup
            of tea? Go ahead.
          </p>
        </div>
      </GridWrapper>
      <ContactForm />
    </>
  );
};
