import { ColWrapper } from "../Shared/ColWrapper";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export const ContactForm = () => {
  return (
    <>
      <form className="grid grid-cols-12 w-full gap-4">
        <ColWrapper className="md:col-span-6">
          <div className="input-group">
            <label className="block mb-4">Your Name</label>
            <Input />
          </div>
        </ColWrapper>
        <ColWrapper className="md:col-span-6">
          <div className="input-group">
            <label className="block mb-4">Email Address</label>
            <Input />
          </div>
        </ColWrapper>
        <ColWrapper>
          <div className="input-group">
            <label className="block mb-4">Your Message</label>
            <Textarea />
          </div>
        </ColWrapper>
        <ColWrapper>
          <div className="text-end mb-4">
            <Button>Submit</Button>
          </div>
        </ColWrapper>
      </form>
    </>
  );
};
