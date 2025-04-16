"use client";
import React from "react";
import logo from "../../public/logo.png";
import menu from "../../public/menu.png";
import icon from "../../public/icon.png";
import arrow from "../../public/arro.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "text-sm font-medium text-[#EC6219] flex items-center space-x-1"
      : "text-sm font-medium text-[#1A1A1A]";
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex items-center justify-between ps-[70px] pe-[34px] h-[92px]  border-b border-[#DFDFDF] ">
      <Image src={logo} alt="" />
      {/* Navigation Links */}
      <div className="flex items-center space-x-[50px]">
        <Link href="/" className={getLinkClass("/")}>
          <span>Home</span>
          {isActive("/") && (
            <Image src={icon} alt="Chevron" className="h-2.5" />
          )}
        </Link>
        <Link href="/solutions" className={getLinkClass("/solutions")}>
          <span>Solutions</span>
          {isActive("/solutions") && (
            <Image src={icon} alt="Chevron" className="h-2.5" />
          )}
        </Link>
        <Link href="/portfolio" className={getLinkClass("/portfolio")}>
          <span>Portfolio</span>
          {isActive("/portfolio") && (
            <Image src={icon} alt="Chevron" className="h-2.5" />
          )}
        </Link>
        <Link href="/pages" className={getLinkClass("/pages")}>
          <span>Pages</span>
          {isActive("/pages") && (
            <Image src={icon} alt="Chevron" className="h-2.5" />
          )}
        </Link>
        <Link href="/blogs" className={getLinkClass("/blogs")}>
          <span>Blogs</span>
          {isActive("/blogs") && (
            <Image src={icon} alt="Chevron" className="h-2.5" />
          )}
        </Link>
        <Link href="/contact" className={getLinkClass("/contact")}>
          <span>Contact</span>
          {isActive("/contact") && (
            <Image src={icon} alt="Chevron" className="h-2.5" />
          )}
        </Link>
        <div className="flex items-center ">
          <button className="ms-[20px] bg-white size-[36px] rounded-full flex justify-center items-center cursor-pointer">
            <Image src={menu} alt="" />
          </button>
          <div className="h-[92px] w-[1px] bg-[#DFDFDF] ms-[70px]"></div>
          <button
              className="bg-[#EC6219]  text-white px-4 py-2 gap-2 items-center justify-center ms-[35px]
        h-[56px] flex "
            >
              <Image src={arrow} alt="" />
              SCHEDULE A CALL
            </button>
        </div>
      </div>

      {/* Schedule a Call Button and Menu Icon */}
    </nav>
  );
};

export default Header;
