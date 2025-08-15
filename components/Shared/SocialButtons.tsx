import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

interface iSocialButtonsProps {
  showOnlyMain: boolean;
}

export const SocialButtons: React.FC<iSocialButtonsProps> = ({
  showOnlyMain,
}) => {
  return (
    <>
      <ul className="flex gap-4">
        <li>
          <a className="text-c-black2" href="#" title="Open github">
            <FaGithub size={22}></FaGithub>
          </a>
        </li>
        <li>
          <a className="text-c-black2" href="#" title="Open linkedin">
            <FaLinkedin size={22}></FaLinkedin>
          </a>
        </li>
        {!showOnlyMain && (
          <>
            <li>
              <a className="text-c-black2" href="#" title="Open instagram">
                <FaInstagram size={22}></FaInstagram>
              </a>
            </li>
          </>
        )}
      </ul>
    </>
  );
};
