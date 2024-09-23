import projectsData from "@/json/projects.json"; // Your JSON data
import Image from "next/image";
import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import Link from "next/link";
import arrow from "@/public/klipartz.com.png";
import { IoLogoJavascript } from "react-icons/io";
import { Suspense } from "react";
import Loading from "../loading";

export default function Projects() {
  return (
    <div className="mx-5 md:mx-10 lg:mx-20 relative my-20">
      {/* Divider line */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-500"></div>

      {projectsData.map((project, index) => (
        <div
          className={`flex flex-col lg:flex-row mb-10 lg:mb-36 ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
          key={project.id}
        >
          <Link href={`/projects/${project.title}`} className="lg:hidden mb-5">
            <h1 className="text-2xl lg:text-3xl text-red-800 font-bold mb-3">
              {project.projectName}
            </h1>
          </Link>
          <div
            className={`w-full lg:w-1/2 mb-5 ${
              index % 2 !== 0 ? "lg:ml-14" : "lg:mr-14"
            }`}
          >
            <Suspense fallback={<Loading />}>
              <Image
                src={project.images[0]}
                alt={project.projectName}
                width={1200}
                height={50}
                className="rounded-lg"
              />
            </Suspense>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-full hidden lg:block">
            <Image src={arrow} alt="arrow" width={80} />
          </div>

          <div
            className={`w-full lg:w-1/2 font-mono flex flex-col justify-around ${
              index % 2 !== 0 ? "lg:mr-14" : "lg:ml-14"
            }`}
          >
            <Link
              href={`/projects/${project.title}`}
              className="hidden lg:block"
            >
              <h1 className="text-2xl lg:text-3xl text-red-800 font-bold mb-3">
                {project.projectName}
              </h1>
            </Link>
            <span className="tracking-wider text-lg">Summary : </span>
            <p className="lg:text-lg text-gray-600 mb-5">{project.summary}</p>
            <span className="tracking-wider mb-2">Technologies : </span>
            <div className="flex flex-wrap gap-8">
              {project.tech.map((tech, idx) => (
                <span key={idx}>
                  {tech === "Tailwind CSS" && (
                    <RiTailwindCssFill size={30} className="text-blue-500" />
                  )}
                  {tech === "TypeScript" && (
                    <SiTypescript size={25} className="text-blue-700" />
                  )}
                  {tech === "React.js" && (
                    <FaReact size={30} className="text-blue-500" />
                  )}
                  {tech === "Next.js" && (
                    <RiNextjsFill size={30} className="text-black" />
                  )}
                  {tech === "JavaScript" && (
                    <IoLogoJavascript size={30} className="text-yellow-400" />
                  )}
                  {tech === "React Router" && (
                    <SiReactrouter size={40} className="text-red-600" />
                  )}
                  {tech === "React query" && (
                    <SiReactquery size={30} className="text-red-800" />
                  )}
                  {tech === "Supabase" && (
                    <RiSupabaseFill size={30} className="text-green-500" />
                  )}
                  {tech === "Redux" && (
                    <SiRedux size={30} className="text-black" />
                  )}
                  {tech === "Css" && (
                    <FaCss3Alt size={30} className="text-blue-800" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
