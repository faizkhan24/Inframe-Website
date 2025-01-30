"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { INFRAME_LOGO } from "@/utils/constant";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import StudyDropDown from "./StudyDropDown";
import { useAuth0 } from "@auth0/auth0-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu"; // ShadCN Dropdown
import { Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Including various font weights
});

const Navbar = () => {
  const [openSheet, setOpenSheet] = useState(false); // State for controlling the sheet
  const { user, loginWithRedirect, logout, isAuthenticated, } = useAuth0();

  

  console.log(user);

  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50 py-4 font-sans">
      <div className="max-w-7xl mx-auto px-4">
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
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href={'/about'}
                className="text-muted-foreground text-white font-bold"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-muted-foreground text-white font-bold"
              >
                Life @ Inframe
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-7">
            <Link className="text-white font-bold" href="/contact">
              Contact Us
            </Link>

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <img
                      src={user?.picture ?? "/default-avatar.jpg"}
                      alt={user?.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-white font-bold">{user?.name}</span>
                    <ChevronDown className="text-white" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-black">
                  <DropdownMenuItem disabled>{user?.name}</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() =>
                      logout({ logoutParams: { returnTo: window.location.origin } })
                    }
                  >
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                {/* Login Button */}
                <Button
                className={`
         py-5 px-7py-5 px-7  bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black
        font-bold border-2 border-yellow-400 transition-all duration-300 ease-in-out
        hover:bg-gradient-to-l hover:from-yellow-500 hover:via-orange-600 hover:to-yellow-500 
        hover:text-white shadow-lg rounded-lg ${poppins.className}`}
              >
                Apply Now
              </Button>
                {/* Sign Up Button */}
                <Button
                  onClick={() => loginWithRedirect()}
                  variant="outline"
                  className={`text-black py-5  px-9 bg-yellow-300 hover:bg-yellow-400 font-bold ${poppins.className}`}
                >
                  Login
                </Button>
              </>
            )}
          </div>

          {/* Mobile View Hamburger Button */}
          <div className="md:hidden">
            <Sheet open={openSheet} onOpenChange={setOpenSheet}>
              <SheetTrigger className="border border-black" asChild>
                <Menu className="text-white text-3xl" />
              </SheetTrigger>

              <SheetContent side="right" className="bg-black text-white font-sans">
                <nav className="flex flex-col space-y-4">
                  {/* Navigation Links */}
                  <Link href="/about" className="hover:font-bold">
                    About
                  </Link>
                  <Link href="/life-inframe" className="hover:font-bold">
                    LIFE@Inframe
                  </Link>

                  {/* Authentication Buttons in Mobile View */}
                  {isAuthenticated ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <div className="flex items-center gap-2 cursor-pointer">
                          <img
                            src={user?.picture ?? "/default-avatar.jpg"}
                            alt={user?.name}
                            className="w-8 h-8 rounded-full"
                          />
                          <ChevronDown className="text-white" />
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white text-black">
                        <DropdownMenuItem disabled>{user?.name}</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() =>
                            logout({
                              logoutParams: { returnTo: window.location.origin },
                            })
                          }
                        >
                          Log Out
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <div>
                      {/* Mobile Login Button */}
                      <Button
                        onClick={() => loginWithRedirect()}
                        className="w-full mb-2 text-black font-sans font-bold bg-yellow-300"
                      >
                        Login
                      </Button>

                      {/* Mobile Sign Up Button */}
                      <Button
                        onClick={() => loginWithRedirect()}
                        className="w-full mb-2 text-black font-sans font-bold bg-yellow-300"
                      >
                        Sign Up
                      </Button>
                    </div>
                  )}
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
