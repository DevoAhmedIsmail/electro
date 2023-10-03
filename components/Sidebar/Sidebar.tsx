"use client";

import React, { useCallback, useEffect, useState } from "react";
import useSideBar from "@/hooks/useSidebar";

import { AiOutlineClose } from "react-icons/ai";
import SidebarMenu from "./SidebarMenu";

// type PropsOptionsType = {
//     isOpen: boolean
// }

const Sidebar = () => {
  const { isOpen, onClose } = useSideBar();
  const [showSidebar, setShowSidebar] = useState(isOpen);

  const handelClose = useCallback(() => {
    setShowSidebar(false);

    setTimeout(() => {
      onClose();
      document.body.classList.remove("overflow-hidden");
    }, 300);
  }, [onClose]);

  useEffect(() => {
    setShowSidebar(isOpen);
    isOpen && document.body.classList.add("overflow-hidden");
  }, [isOpen]);

  if (!isOpen) return null;
  if (isOpen)
    return (
      <div
        className={`fixed inset-0 bg-slate-600/75 z-50 text-[var(--textColor)]`}
        onClick={handelClose}
      >
        <div
          className={`fixed bg-[var(--bgMode)] w-[300px] transition duration-300
        ${showSidebar ? "translate-x-0" : "translate-x-[-100%]"}
        p-5
        min-h-screen
        `}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <AiOutlineClose
            onClick={handelClose}
            className="absolute top-3 right-3 text-red-500 cursor-pointer"
            size={24}
          />
          <div className="mt-8">
            <SidebarMenu />
          </div>
        </div>
      </div>
    );
};

export default Sidebar;
