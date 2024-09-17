import AboutSec from "@/components/aboutSec";
import HomeSec from "@/components/homeSec";
import ProjectsSec from "@/components/projectsSec";

export default function Home() {
  return (
    <div className="mx-5 lg:mx-20">
      <HomeSec />
      <AboutSec />
      <ProjectsSec />
    </div>
  );
}
