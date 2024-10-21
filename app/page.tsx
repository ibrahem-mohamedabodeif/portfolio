import AboutSec from "@/components/aboutSec";
import HomeSec from "@/components/homeSec";
import ProjectsSec from "@/components/projectsSec";
import ThoughtsSec from "@/components/thoughtsSec";

export default function Home() {
  return (
    <div className="mx-5 lg:mx-20">
      <HomeSec />
      <AboutSec />
      <ThoughtsSec />
      <ProjectsSec />
    </div>
  );
}
