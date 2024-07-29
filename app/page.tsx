import Basecontent from "@/components/basecontent";
import ConfirmUser from "@/components/ConfirmUser";
import HomepageIndex from "@/components/Homepage/HomepageIndex";
import { Suspense } from "react"

export default function Home() {
  return (
    <Basecontent>
      <Suspense><ConfirmUser /></Suspense>
      <HomepageIndex />
    </Basecontent>
  );
}
