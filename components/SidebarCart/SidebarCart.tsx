"use client";

import React, { useCallback, useEffect, useState } from "react";
import useSideBarCart from "@/hooks/useSidebarCart";
import SidebarCartFooter from "./SidebarCartFooter";
import SidebarHeader from "./SidebarHeader";
import SidebarCartMenu from "./SidebarCartMenu";
import { cartProducts } from "@/data/ProductsSections";

const SidebarCart = () => {
  const { isOpen, onClose } = useSideBarCart();
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
          className={`fixed right-0 bg-[var(--bgMode)] w-[350px] transition duration-300
                    ${showSidebar ? "translate-x-0" : "translate-x-[100%]"}
                    h-screen
                    flex flex-col
            `}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
         
            <SidebarHeader handelClose = {handelClose}  />

            <div className="px-6 overflow-y-auto flex-1">
                <SidebarCartMenu cartData={cartProducts} handelClose={handelClose} />
            </div>

            <SidebarCartFooter handelClose={handelClose} />

        </div>
      </div>
    );
};

export default SidebarCart;
