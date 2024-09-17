import Image from "next/image";
import avatar from "@/public/portrait-man-cartoon-style 1.png";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
export default function AboutSec() {
  return (
    <div className="my-10 pt-12 border-t">
      <h1 className="text-2xl lg:text-4xl font-bold mb-8">
        Who am I and what do I offer?
      </h1>
      <div className="flex items-center justify-between">
        <Image
          src={avatar}
          alt="avatar"
          width={400}
          className="hidden lg:block md:block"
        />
        <p className="text-xl text-gray-800 leading-relaxed">
          I’m <span className="text-red-800">Ibrahem Mohamed</span>, a
          passionate <span className="text-red-800">front-end developer</span>.
          <br /> I specialize in creating responsive, user-friendly websites and
          applications using{" "}
          <span className="text-red-800">
            HTML, CSS, JavaScript, TypeScript
          </span>
          , and frameworks like <span className="text-red-800">React.js</span>{" "}
          and
          <span className="text-red-800"> Next.js</span>
          .
          <br /> After several years in civil engineering, I made a career shift
          to web development, and it’s been an exciting journey, I love solving
          complex problems, optimizing user experiences, and continually
          learning new technologies
          <br />
          When I’m not coding, you can find me exploring new tech, or working on
          personal projects to refine my skills. I’m always looking for new
          challenges and opportunities to grow as a developer.
        </p>
      </div>
      <div>
        <h1 className="text-center text-3xl text-red-800 font-mono tracking-wider">
          Skills
        </h1>
        <div className="flex justify-between items-center flex-wrap mt-8">
          <div className="flex flex-col items-center gap-3 group">
            <FaHtml5 size={50} className="group-hover:text-red-700" />
            <span className="opacity-0 group-hover:opacity-100 text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              HTML
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 group">
            <FaCss3Alt size={50} className="group-hover:text-blue-800" />
            <span className="opacity-0 group-hover:opacity-100 text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              CSS
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <RiTailwindCssFill
              size={50}
              className="group-hover:text-blue-500"
            />
            <span className="opacity-0 group-hover:opacity-100 text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              Tailwind CSS
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <IoLogoJavascript
              size={50}
              className="group-hover:text-yellow-400"
            />
            <span className="opacity-0 group-hover:opacity-100 text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              JavaScript
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <SiTypescript size={40} className="group-hover:text-blue-700" />
            <span className="opacity-0 group-hover:opacity-100 text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              TypeScript
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <FaReact size={50} className="group-hover:text-blue-500" />
            <span className="opacity-0 group-hover:opacity-100 text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              React.js
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <RiNextjsFill size={50} className="group-hover:text-black" />
            <span className="opacity-0 group-hover:opacity-100 text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              Next.js
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <SiRedux size={40} className="group-hover:text-black" />
            <span className="opacity-0 group-hover:opacity-100 text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              Redux
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <SiReactrouter size={40} className="group-hover:text-red-600" />
            <span className="opacity-0 group-hover:opacity-100 text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              React Router
            </span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <SiReactquery size={40} className="group-hover:text-red-800" />
            <span className="opacity-0 group-hover:opacity-100 text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              React query
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 group">
            <RiSupabaseFill size={40} className="group-hover:text-green-500" />
            <span className="opacity-0 group-hover:opacity-100 text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              Supabase
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
