import Loading from "@/app/loading";
import projects from "@/json/projects.json";
import Image from "next/image";
import { Suspense } from "react";
import { DiGithubBadge } from "react-icons/di";
import { FaCss3Alt, FaReact, FaRegEye } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
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

export default function Project({
  params,
}: {
  params: { projectName: string };
}) {
  const project = projects.find(
    (project) => project.title === params.projectName
  );

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="mx-4 md:mx-20 my-10 md:my-20 font-mono">
      <div className="flex flex-col lg:flex-row gap-10 border-b pb-10">
        <div className="lg:w-1/2 w-full">
          <Suspense fallback={<Loading />}>
            <div className="shadow-2xl rounded-lg object-contain">
              <Image
                src={project.imageCover}
                alt="project cover image"
                width={1200}
                height={600}
              />
            </div>
          </Suspense>
          <div className="flex mt-8 gap-5 md:gap-10">
            <a
              target="_blank"
              href={project.demo}
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <FaRegEye size={20} />
              <span>Live demo</span>
            </a>
            <a
              target="_blank"
              href={project.github}
              className="flex items-center gap-2 text-gray-800 hover:underline"
            >
              <DiGithubBadge size={25} />
              <span>Source Code</span>
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <h1 className="text-2xl md:text-3xl text-red-800 font-bold mb-3">
            {project.projectName}
          </h1>
          <h3 className="tracking-wider text-lg">Summary:</h3>
          <p className="text-md md:text-lg text-gray-700 mb-5 mt-2">
            {project.summary}
          </p>

          {/* Technologies */}
          <h3 className="tracking-wider text-lg mb-3">Technologies:</h3>
          <div className="flex items-center gap-5 flex-wrap">
            {project.tech.map((tech, index) => (
              <span key={index}>
                {tech === "Tailwind CSS" && (
                  <div className="flex flex-col items-center gap-3">
                    <RiTailwindCssFill size={45} className="text-blue-500" />
                    <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
                      Tailwind CSS
                    </span>
                  </div>
                )}
                {tech === "TypeScript" && (
                  <div className="flex flex-col items-center gap-3 ">
                    <SiTypescript size={35} className="text-blue-700" />
                    <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
                      TypeScript
                    </span>
                  </div>
                )}
                {tech === "React.js" && (
                  <div className="flex flex-col items-center gap-3">
                    <FaReact size={45} className="text-blue-500" />
                    <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
                      React.js
                    </span>
                  </div>
                )}
                {tech === "Next.js" && (
                  <div className="flex flex-col items-center gap-3">
                    <RiNextjsFill size={45} className="text-black" />
                    <span className="text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
                      Next.js
                    </span>
                  </div>
                )}
                {tech === "JavaScript" && (
                  <div className="flex flex-col items-center gap-3">
                    <IoLogoJavascript size={45} className="text-yellow-400" />
                    <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
                      JavaScript
                    </span>
                  </div>
                )}
                {tech === "React Router" && (
                  <div className="flex flex-col items-center gap-3">
                    <SiReactrouter size={45} className="text-red-600" />
                    <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
                      React Router
                    </span>
                  </div>
                )}
                {tech === "React query" && (
                  <div className="flex flex-col items-center gap-3">
                    <SiReactquery size={45} className="text-red-800" />
                    <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
                      React query
                    </span>
                  </div>
                )}
                {tech === "Supabase" && (
                  <div className="flex flex-col items-center gap-3">
                    <RiSupabaseFill size={45} className="text-green-500" />
                    <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
                      Supabase
                    </span>
                  </div>
                )}
                {tech === "Redux" && (
                  <div className="flex flex-col items-center gap-3">
                    <SiRedux size={45} className="text-black" />
                    <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
                      Redux
                    </span>
                  </div>
                )}
                {tech === "Css" && (
                  <div className="flex flex-col items-center gap-3">
                    <FaCss3Alt size={40} className="text-blue-800" />
                    <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
                      CSS
                    </span>
                  </div>
                )}
              </span>
            ))}
          </div>

          {/* Features */}
          <h3 className="tracking-wider text-lg mt-5 mb-2">Features:</h3>
          <ul className="list-disc ml-5">
            {project.features.map((feature, index) => (
              <li key={index} className="mt-2 text-gray-700">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Project Presentation Section */}
      <div className="my-10 border-b pb-14 w-full">
        <h1 className="text-2xl md:text-3xl text-center mb-10">
          Project Presentation
        </h1>
        <Suspense fallback={<Loading />}>
          <div className="columns-1 sm:columns-2 lg:columns-2 gap-5 space-y-5">
            {project.images.map((image, index) => (
              <div key={index} className="break-inside-avoid">
                <Image
                  src={image}
                  alt={`project image ${index + 1}`}
                  width={1500}
                  height={1500}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </Suspense>
      </div>

      {/* Project Performance Section */}
      <div className="my-10">
        <h1 className="text-2xl md:text-3xl text-center mb-10">
          Project Performance
        </h1>
        <div className="flex justify-center">
          <Suspense fallback={<Loading />}>
            <div>
              <Image
                src={project.performance}
                alt="performance"
                width={1500}
                height={500}
                className="w-full rounded-2xl shadow-2xl object-contain"
              />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
