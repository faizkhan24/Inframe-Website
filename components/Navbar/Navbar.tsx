"use client";

import React, { useState } from "react";

import { ChevronDown, Globe, Menu, Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { INFRAME_LOGO } from "@/utils/constant";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import StudyDropDown from "./StudyDropDown";

const Navbar = () => {
  const [openSheet, setOpenSheet] = useState(false); // State for controlling the sheet

  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50 py-4 font-sans ">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl">
                <Link href="/">
                 <Image
                  src={INFRAME_LOGO}
                  alt="Inframe College Logo"
                  width={150}
                  height={10}
                  className="object-contain"
                />
                </Link>
               
              </span>
            </div>
            <StudyDropDown />

            <nav className="hidden  md:flex items-center gap-8">
              <Link
                href="#"
                className="text-muted-foreground  text-white font-bold"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-muted-foreground  text-white font-bold hover:"
              >
                Life @ Inframe
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-7">
            <Link className="text-white font-bold" href={"/contact"}>
              Contact Us
            </Link>
            <Link href="/login">
              <Button variant="outline" className="text-black font-bold">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-yellow-300 text-black font-bold hover:bg-yellow-400">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile View Hamburger Button */}
          <div className="md:hidden">
            <Sheet  open={openSheet} onOpenChange={setOpenSheet}>
              <SheetTrigger className="border border-black" asChild>
                <Menu className="text-white text-3xl" />
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-black text-white font-sans"
              >
                <nav className="flex flex-col space-y-4">
                  {/* Navigation Links */}
                  <Link href="/about" className="hover:font-bold">
                    About
                  </Link>
                  <Link href="/life-inframe" className="hover:font-bold">
                    LIFE@Inframe
                  </Link>

                  {/* Login and Sign Up Buttons */}
                  <div className="mt-4">
                    <Link href="/login">
                      <Button className="w-full mb-2 text-black font-sans font-bold bg-yellow-300">
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup">
                      <Button className="w-full bg-white font-sans font-bold text-black">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
