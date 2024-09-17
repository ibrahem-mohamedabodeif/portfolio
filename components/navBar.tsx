"use client";
import Image from "next/image";
import logo from "@/app/favicon.ico";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { RiContactsBook3Fill } from "react-icons/ri";
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
        href={"/social"}
        className="hidden lg:block border border-transparent bg-red-800 text-white rounded-lg pt-2 pb-2 pl-4 pr-4"
      >
        Social
      </Link>
      <Link href={"/social"} className="lg:hidden">
        <RiContactsBook3Fill size={30} className="block text-red-700" />
      </Link>
    </div>
  );
}
