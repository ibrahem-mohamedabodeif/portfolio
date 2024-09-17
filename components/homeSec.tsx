import Image from "next/image";
import avatar from "@/public/portrait-man-cartoon-style.png";
import { IoMdArrowDown } from "react-icons/io";
export default function HomeSec() {
  return (
    <div className="mt-10 lg:mt-0 flex items-center justify-between">
      <div className="text-xl lg:text-6xl md:text-4xl lg:space-y-5 ">
        <h1>Hi !</h1>
        <h1>
          I&rsquo;m <span className="text-red-800">Ibrahem Mohamed</span>,
        </h1>
        <h1>Frontend developer.</h1>
        <a href="/Ibrahem-Mohamed-frontend-develover.pdf" download>
          <button className="mt-5 lg:mt-10 flex items-center gap-2 text-sm lg:text-2xl md:text-xl text-gray-700 tracking-wide">
            <div className="border rounded-full p-0.5 bg-red-800 text-white">
              <IoMdArrowDown size={25} />
            </div>
            Download Resume
          </button>
        </a>
      </div>

      <Image
        src={avatar}
        alt="avatar"
        width={400}
        className="w-1/2 h-56 lg:h-screen lg:w-auto md:h-auto"
        priority
      />
    </div>
  );
}
