import Image from "next/image";
import React from "react";
import { HiSearch, HiBell, HiChat } from "react-icons/hi";

const Header = () => {
  return (
    <div className="flex gap-3 md:gap-2 items-center justify-around p-3">
      <Image
        src="/logo_pinterest.png"
        width={50}
        height={50}
        alt="Logotype"
        className="hover:bg-gray-300 p-2 cursor-pointer rounded-full"
      />
      <button className="btn-header">Home</button>
      <button className="btn-header bg-transparent font-semibold text-black">
        Create
      </button>
      <div className="bg-[#e9e9e9] p-3 gap-3 items-center rounded-full w-full hidden md:flex">
        <HiSearch className="text-[24px] text-gray-500" />
        <input
          className="bg-transparent outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <HiSearch className="text-[24px] text-gray-500 md:hidden" />
      <HiBell className="text-[40px] text-gray-500 hover:bg-gray-300 p-1 cursor-pointer rounded-full" />
      <HiChat className="text-[40px] text-gray-500 hover:bg-gray-300 p-1 cursor-pointer rounded-full" />
      <Image
        src="/man.jpg"
        alt="user_image"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 cursor-pointer rounded-full"
      />
    </div>
  );
};

export default Header;
