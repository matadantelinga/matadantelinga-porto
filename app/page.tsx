import Basecontent from "@/components/basecontent";
import ConfirmUser from "@/components/ConfirmUser";
import HomepageIndex from "@/components/Homepage/HomepageIndex";

export default function Home() {
  return (
    <Basecontent>
      <ConfirmUser />
      <HomepageIndex />
    </Basecontent>
  );
}
