"use client";

import Link from "next/link";
import React, { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

type PropsOptionsType = {
  title: string;
  link: string;
  subLinks?: {
    id: number;
    title: string;
    link: string;
  }[];
};

const SideBarMenuItem = ({ title, link, subLinks }: PropsOptionsType) => {
  const [openSubLinks, setOpenSubLinks] = useState(false);
  return (
    <div className="py-3">
      <div className="flex items-center ">
        <Link href={link} className="flex-1 hover:translate-x-1 transition">
          {title}
        </Link>
        {subLinks && (
          <IoIosArrowDown
          size={18}
          className={`${openSubLinks ? "rotate-180" : "rotate-0"} transition`}
            onClick={() => subLinks && setOpenSubLinks((prev) => !prev)}
          />
        )}
      </div>
      {openSubLinks && (
        <div className="flex flex-col divide-y-2 px-2 mt-2 bg-slate-400/50">
          {subLinks?.map((subLink) => (
            <div key={subLink.id} className="py-2">

            <Link href={subLink.link}  className="hover:translate-x-1 transition block">
              {subLink.title}
            </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBarMenuItem;
