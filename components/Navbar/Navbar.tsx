"use client"

import React from "react";
import TopNavbar from "./TopNavbar";
import Container from "../Container";
import Image from "next/image";
import LogoImg from "./LogoImg";
import Link from "next/link";
import "./Navbar.css";

import { AiOutlineMenu, AiOutlineHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoGitCompare } from "react-icons/io5";
import NavLinks from "./NavLinks";
import Badge from "./Badge";
import useSideBar from "@/hooks/useSidebar";

const Navbar = () => {
  const { isOpen, onOpen } = useSideBar();
    
  return (
    <nav className="bg-[var(--bgColor)] py-2 w-full z-50">
      <Container>
        <TopNavbar />

        <div className="py-8 flex-center justify-between text-[var(--textColor)]">
          {/* logo */}
          <div className="flex-center gap-4">
              <AiOutlineMenu size={24} onClick={onOpen} className="cursor-pointer block lg:hidden"/>
            <Link href="/" className="min-[1024px]:mr-16 mr-10">
              <LogoImg />
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 gap-5 items-center">
            <AiOutlineMenu size={24} onClick={onOpen} className="cursor-pointer" />
            <NavLinks />
          </div>

          <div className="flex-center gap-6 lg:gap-16">
            <div className="cursor-pointer group">
              <BsSearch size={24} className="group-hover:text-[var(--yellowColor)]" />
            </div>
            <div className="cursor-pointer group relative hidden lg:block">
              <IoGitCompare size={28} className="group-hover:text-[var(--yellowColor)] rotate-90" />
              <Badge num={0} />
            </div>
            <Link href="/" className="cursor-pointer group relative">
              <AiOutlineHeart size={28} className="group-hover:text-[var(--yellowColor)]" />
              <Badge num={2} />
            </Link>
            <Link href="/cart" className="cursor-pointer group relative flex-center gap-3">
              <div className="relative">
                <HiOutlineShoppingBag size={28} className="group-hover:text-[var(--yellowColor)]" />
                <Badge num={3} />
              </div>
              <span className="hidden lg:inline-block text-sm font-semibold">600.00$</span>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
