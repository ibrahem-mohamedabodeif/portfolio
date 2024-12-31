import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import thoughts from "@/json/thoughts.json";
import Link from "next/link";
export default function Thoughts() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-16 mx-5 lg:mx-20 my-20">
        {thoughts.map((article) => (
          <Link
            href={`/thoughts/${article.title}`}
            key={article.id}
            className="relative text-center"
          >
            <FaQuoteLeft
              size={20}
              className="text-red-800 absolute left-0 -top-5"
            />
            <h1 className="font-bold text-xl pb-5">{article.title}</h1>
            <p className="text-neutral-600 mx-9">{article.summary}</p>
            <FaArrowRight className="absolute -bottom-5 right-10 text-red-800" />
          </Link>
        ))}
      </div>
    </div>
  );
}
