"use client";
import Image from "next/image";
import logo from "@/app/favicon.ico";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { TfiUser } from "react-icons/tfi";
export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className=" flex items-center justify-between font-sans text-lg tracking-wider">
      <button
        onClick={() => setOpen(!open)}
        className="block relative lg:hidden"
      >
        <RxHamburgerMenu size={30} />
      </button>
      {open && (
        <div className="z-10 bg-white absolute flex flex-col items-center gap-6 top-16 left-5 border border-transparent p-5 shadow-2xl rounded-xl ">
          <Link href={"/"}>Home</Link>
          <Link href={"/projects"}>Projects</Link>
          <span>Thoughts</span>
        </div>
      )}
      <Image
        src={logo}
        alt="logo"
        width={45}
        className="w-10 lg:w-auto"
        priority
      />
      <div className="hidden lg:flex lg:gap-20">
        <Link href={"/"}>Home</Link>
        <Link href={"/projects"}>Projects</Link>
        <span>Thoughts</span>
      </div>
      <Link
        href={"/about"}
        className="flex items-center gap-2 border border-transparent bg-red-800 text-white rounded-lg pt-2 pb-2 pl-4 pr-4"
      >
        <TfiUser size={25} />
        <span className="hidden lg:block text-xl font-semibold">ME</span>
      </Link>
    </div>
  );
}
