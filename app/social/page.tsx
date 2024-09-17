import { FaFacebookSquare, FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";

export default function Social() {
  return (
    <div className="my-16 lg:my-36 md:my-80 mx-5 md:mx-20 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center md:flex-row gap-5">
        <IoMailOutline size={30} />
        <span className="text-lg text-red-800 break-all">
          ibrahem.mohamed191999@gmail.com
        </span>
      </div>

      <div className="flex flex-col items-center md:flex-row gap-5">
        <IoLogoLinkedin size={30} className="text-blue-800" />
        <a
          href="https://linkedin.com/in/ibrahem-mohamed-9a7982247"
          target="_blanck"
          className="text-lg text-red-800 break-all"
        >
          https://linkedin.com/in/ibrahem-mohamed-9a7982247
        </a>
      </div>

      <div className="flex flex-col items-center md:flex-row gap-5">
        <FaGithub size={30} />
        <a
          href="https://github.com/ibrahem-mohamedabodeif"
          target="_blanck"
          className="text-lg text-red-800 break-all"
        >
          https://github.com/ibrahem-mohamedabodeif
        </a>
      </div>

      <div className="flex flex-col items-center md:flex-row gap-5">
        <FaFacebookSquare size={30} className="text-blue-600" />
        <a
          href="https://www.facebook.com/hemo.mohamed.792"
          target="_blanck"
          className="text-lg text-red-800 break-all"
        >
          https://www.facebook.com/hemo.mohamed.792
        </a>
      </div>

      <div className="flex flex-col items-center md:flex-row gap-5">
        <FaWhatsapp size={30} className="text-green-500" />
        <span className="text-lg text-red-800">(+20) 114-837-7307</span>
      </div>
    </div>
  );
}
