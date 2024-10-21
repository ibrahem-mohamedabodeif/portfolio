import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { LiaBookOpenSolid } from "react-icons/lia";
import thoughts from "@/json/thoughts.json";

export default function ThoughtsSec() {
  return (
    <div className="my-10 pt-10 border-t">
      <h1 className="text-center text-4xl font-mono mb-12 text-red-800 tracking-wider">
        Thoughts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-16">
        {thoughts.slice(0, 4).map((article) => (
          <Link
            href={`/thoughts/${article.title}`}
            key={article.id}
            className="relative"
          >
            {" "}
            <div className="flex items-center gap-1">
              <LiaBookOpenSolid size={30} className="text-red-800" />
              <h1 className="font-bold text-xl">{article.title}</h1>
            </div>
            <p className="text-neutral-600 mx-9">{article.summary}</p>
            <FaArrowRight className="absolute -bottom-5 right-10 text-red-800" />
          </Link>
        ))}
      </div>
      <Link
        href={"/thoughts"}
        className="mt-24 block mx-auto border border-transparent rounded-full p-3 bg-red-700 w-40 text-white text-lg font-mono text-center"
      >
        <button>See more...</button>
      </Link>
    </div>
  );
}
