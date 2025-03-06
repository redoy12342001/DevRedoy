"use client";

import React, { useState } from "react";
// import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react"; // Import icons
import "./Navbar.css";
import { MenuBtn } from "./AnimatedHamburgerButoon";
import { usePathname } from "next/navigation";


const navLinks = ["Home", "About", "Services", "Contact"]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

  // const handleStateChange = (state: { isOpen: boolean }) => {
  //   setIsOpen(state.isOpen);
  // };

  // const closeMenu = () => {
  //   setIsOpen(false);
  // };

  if (!pathname.includes("admin")) {

    return (
      <nav className="flex justify-between items-center p-4 md:py-10 bg-background text-primary-foreground">
        {/* Logo */}
        <div>
          <h1 className="text-primary text-2xl font-bold">DevRedoy</h1>
          {/* <img className="w-40" src="/images/DevRedoy-Green.png" alt="" /> */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6">
          {
            navLinks.map((nav, index) => (
              <Link key={index} href={nav === "Home" ? "/" : `/${nav.toLowerCase()}`} className="hover:text-primary text-white font-semibold">{nav}</Link>
            ))
          }

        </div>

        <div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <MenuBtn />
          </div>
          <div className=" flex items-center gap-3">
            <button className="py-3 px-6 bg-primary rounded-xl text-black font-semibold hidden lg:flex">Contact Me</button>
            <Link href={"admin-boy"}><button className="py-3 px-6 bg-primary rounded-xl text-black font-semibold hidden lg:flex">Admin</button></Link>
          </div>
        </div>


      </nav>
    );
  }
};

export default Navbar;
