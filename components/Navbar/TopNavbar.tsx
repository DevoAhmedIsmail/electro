import Link from "next/link";
import React from "react";

import { BiMap } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const TopNavbar = () => {
  return (
    <div className="hidden lg:flex justify-between items-center text-[var(--textColor)] text-sm">
      <p>Welcome to Worldwide Electronics Store</p>
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <BiMap size={18} />
          <p>Store Location</p>
        </Link>
        <Link href="/" className="flex items-center gap-2">
          <AiOutlineUser size={18} />
          <p>Sign in or Register</p>
        </Link>
        <div className="cursor-pointer">
            <TfiWorld size={20} />
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default TopNavbar;
