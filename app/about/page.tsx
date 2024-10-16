import {
  FaCss3Alt,
  FaDiscord,
  FaFacebookSquare,
  FaGithub,
  FaHtml5,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLogoJavascript, IoLogoLinkedin } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
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
import Image from "next/image";
import avatar2 from "@/public/portrait-man-cartoon-style 1.png";
export default function Social() {
  return (
    <div className="mx-5 lg:mx-20 my-10 pt-12">
      <div className="flex items-center justify-between">
        <Image
          src={avatar2}
          alt="avatar"
          width={400}
          className="hidden lg:block md:block"
        />

        <div>
          <h1 className="text-2xl lg:text-4xl font-bold mb-10">
            Who am I and what do I offer?
          </h1>
          <p className="text-xl text-gray-800 leading-relaxed">
            I’m <span className="text-red-800">Ibrahem Mohamed</span>, a
            passionate <span className="text-red-800">front-end developer</span>
            .
            <br /> I specialize in creating responsive, user-friendly websites
            and applications using{" "}
            <span className="text-red-800">
              HTML, CSS, JavaScript, TypeScript
            </span>
            , and frameworks like <span className="text-red-800">React.js</span>{" "}
            and
            <span className="text-red-800"> Next.js</span>
            .
            <br /> After several years in civil engineering, I made a career
            shift to web development, and it’s been an exciting journey, I love
            solving complex problems, optimizing user experiences, and
            continually learning new technologies
            <br />
            When I’m not coding, you can find me exploring new tech, or working
            on personal projects to refine my skills. I’m always looking for new
            challenges and opportunities to grow as a developer.
          </p>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-center text-3xl text-red-800 font-mono tracking-wider">
          Skills
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-y-6 mt-8 ">
          <div className="flex flex-col items-center gap-3">
            <FaHtml5 size={60} className="text-red-700" />
            <span className="text-red-800 text-base font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              HTML
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <FaCss3Alt size={60} className="text-blue-800" />
            <span className=" text-red-800 text-base font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              CSS
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <RiTailwindCssFill size={60} className="text-blue-500" />
            <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              Tailwind CSS
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <IoLogoJavascript size={60} className="text-yellow-400" />
            <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              JavaScript
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <SiTypescript size={60} className="text-blue-700" />
            <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              TypeScript
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <FaReact size={60} className="text-blue-500" />
            <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              React.js
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <RiNextjsFill size={60} className="text-black" />
            <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              Next.js
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <SiRedux size={60} className="text-black" />
            <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              Redux
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <SiReactrouter size={60} className="text-red-600" />
            <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              React Router
            </span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <SiReactquery size={60} className="text-red-800" />
            <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              React query
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <RiSupabaseFill size={60} className="text-green-500" />
            <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
              Supabase
            </span>
          </div>
        </div>
      </div>
      <div className="my-24">
        <h1 className="text-center text-3xl text-red-800 font-mono tracking-wider">
          Certifications
        </h1>
        <div className="my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10">
          <div className="max-w-lg">
            <Image
              src={"/certificates/freecodecamp1.png"}
              alt="certificat 1"
              width={500}
              height={200}
            />
          </div>
          <div className="max-w-lg">
            <Image
              src={"/certificates/UC-1a346b0a-5fe3-431f-97ae-04524173f2ff.jpg"}
              alt="certificat 2"
              width={500}
              height={200}
            />
          </div>
          <div className="max-w-lg">
            <Image
              src={"/certificates/UC-4edc3490-7306-40b3-8aa6-d3c8d43f3240.jpg"}
              alt="certificat 3"
              width={500}
              height={200}
            />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-center text-3xl text-red-800 font-mono tracking-wider">
          Social and Connects
        </h1>
        <div className="my-14 grid grid-cols-3 gap-10 lg:mx-20">
          <div className="flex flex-col items-center md:flex-row gap-5">
            <IoMailOutline size={30} />
            <a
              href="mailto:ibrahem.mohamed191999@gmail.com"
              className="text-lg text-red-800 break-all"
            >
              Ibrahem Mohamed
            </a>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-5">
            <IoLogoLinkedin size={30} className="text-blue-800" />
            <a
              href="https://linkedin.com/in/ibrahem-mohamed-9a7982247"
              target="_blanck"
              className="text-lg text-red-800 break-all"
            >
              Ibrahem Mohamed
            </a>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-5">
            <FaGithub size={30} />
            <a
              href="https://github.com/ibrahem-mohamedabodeif"
              target="_blanck"
              className="text-lg text-red-800 break-all"
            >
              ibrahem-mohamedabodeif
            </a>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-5">
            <FaFacebookSquare size={30} className="text-blue-600" />
            <a
              href="https://www.facebook.com/hemo.mohamed.792"
              target="_blanck"
              className="text-lg text-red-800 break-all"
            >
              Ibrahem Mohamed
            </a>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-5">
            <FaWhatsapp size={30} className="text-green-500" />
            <a
              href="https://wa.me/201148377307"
              className="text-lg text-red-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              (+20) 114-837-7307
            </a>
          </div>
          <div className="flex flex-col items-center md:flex-row gap-5">
            <FaDiscord size={30} className="text-blacl" />
            <a
              href="https://discord.com/channels/@me/1217090140116095081"
              target="_blanck"
              className="text-lg text-red-800 break-all"
            >
              Ibrahem Mohamed
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
