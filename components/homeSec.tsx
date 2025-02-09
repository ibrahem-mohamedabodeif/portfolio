import { IoMdArrowDown } from "react-icons/io";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
export default function HomeSec() {
  return (
    <div className="mt-10 lg:mt-28 flex justify-center pb-10">
      <div className="text-xl lg:text-6xl md:text-4xl lg:space-y-5 flex flex-col items-center text-black ">
        <h1>Hi !</h1>
        <h1>
          I&rsquo;m <span className="text-red-800">Ibrahem Mohamed</span>,
        </h1>
        <h1>Frontend developer.</h1>
        <div className="flex flex-col gap-5 items-center">
          <a href="/Ibrahem-Mohamed(front-end-developer).pdf" download>
            <button className="mt-5 lg:mt-10 flex items-center gap-2 text-sm lg:text-2xl md:text-xl text-gray-700 tracking-wide">
              <div className="border rounded-full p-0.5 bg-red-800 text-white">
                <IoMdArrowDown size={25} />
              </div>
              Download Resume
            </button>
          </a>
          <span className="text-sm lg:text-3xl md:text-xl flex justify-center items-center border rounded-full w-8 h-8 lg:w-10 lg:h-10 bg-red-800 text-white">
            or
          </span>
          <Link
            href={"/about"}
            className="flex items-center gap-3 text-sm lg:text-3xl md:text-xl text-gray-700 tracking-wide"
          >
            Contact me
            <FaArrowRight size={20} className="text-red-800" />
          </Link>
        </div>
      </div>
    </div>
  );
}
