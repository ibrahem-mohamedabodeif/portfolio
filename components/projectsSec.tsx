import Image from "next/image";
import Link from "next/link";
import projects from "@/json/projects.json";
import { Suspense } from "react";
import Loading from "@/app/loading";
export default function ProjectsSec() {
  return (
    <div className="my-10 pt-10 border-t">
      <h1 className="text-center text-4xl font-mono mb-10 text-red-800">
        Projects
      </h1>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {projects.slice(0, 2).map((project) => (
          <div key={project.id} className="group relative">
            <Suspense fallback={<Loading />}>
              <Link href={`/projects/${project.title}`}>
                <div className="h-60 md:h-80 lg:h-96 w-full group-hover:opacity-80 transition duration-300 ease-in-out">
                  <Image
                    src={project.imageCover}
                    alt="Bookings Project"
                    fill
                    objectFit="contain"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 rounded-lg">
                  <span className="text-white text-lg font-semibold">
                    {project.projectName}
                  </span>
                </div>
              </Link>
            </Suspense>
          </div>
        ))}
      </div>
      <Link
        href={"/projects"}
        className="block mx-auto border border-transparent rounded-full p-3 bg-red-700 w-40 text-white text-lg font-mono text-center"
      >
        <button>See more...</button>
      </Link>
    </div>
  );
}
