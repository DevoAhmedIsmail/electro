import React from "react";
import { links } from "@/data/navlinks";
import Link from "next/link";
import NavDropDown from "./NavDropDown";

import { IoIosArrowDown } from "react-icons/io";

const NavLinks = () => {
  return (
    <div className="flex-center gap-3">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.id}
          className="flex-center gap-2 relative link"
        >
          <span className="font-semibold text-[15px]">{link.title}</span>

          {link.children && (
            <span>
              <IoIosArrowDown />
            </span>
          )}

          {link.children && <NavDropDown links={link.children} /> }
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
