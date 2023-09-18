import Link from "next/link";
import React from "react";

type LinksType = {
  links: { id: number; title: string; href: string }[];
};

const NavDropDown = ({ links }: LinksType) => {
  return (
    <div className="absolute dropdown shadow-sm flex flex-col gap-2 z-10">
      {links.map((link) => (
        <Link key={link.id} href={link.href}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default NavDropDown;
