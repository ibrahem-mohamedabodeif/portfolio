import { TbCopyright } from "react-icons/tb";

export default function Footer() {
  return (
    <div className="text-xs lg:text-base lg:mx-20 p-2.5 border-t">
      <h1 className="flex items-center gap-1 justify-center">
        <TbCopyright size={20} />
        copyright 2024, All Rights Reserved by{" "}
        <span className="text-red-800">Ibrahem Mohamed</span>
      </h1>
    </div>
  );
}
