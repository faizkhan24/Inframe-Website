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
                href={'/life@inframe'}
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

              <div className="flex gap-8">
                <Link href={'/applynow'}>
                 <Button
                className={`
         py-5 px-7py-5 px-7  bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black
        font-bold border-2 border-yellow-400 transition-all duration-300 ease-in-out
        hover:bg-gradient-to-l hover:from-yellow-500 hover:via-orange-600 hover:to-yellow-500 
        hover:text-white shadow-lg rounded-lg ${poppins.className}`}
              >
                Apply Now
              </Button>
                </Link>
               
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
              </div>
              
            ) : (
              <>
                {/* Login Button */}
                <Link href={'/applynow'}>
                <Button
                className={`
         py-5 px-7py-5 px-7  bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black
        font-bold border-2 border-yellow-400 transition-all duration-300 ease-in-out
        hover:bg-gradient-to-l hover:from-yellow-500 hover:via-orange-600 hover:to-yellow-500 
        hover:text-white shadow-lg rounded-lg ${poppins.className}`}
              >
                Apply Now
              </Button>
              </Link>
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
        <SheetTrigger className="p-2 rounded-lg hover:bg-gray-800 transition-colors" asChild>
          <Menu className="text-white w-8 h-8" />
        </SheetTrigger>

        <SheetContent 
          side="right" 
          className="bg-black/95 text-white border-l border-gray-800 backdrop-blur-sm"
        >
          <nav className="flex flex-col h-full">
            {/* Logo or Brand Name */}
            <div className="mb-8 pt-4">
            <Link href="/">
                  <Image
                    src={INFRAME_LOGO}
                    alt="Inframe College Logo"
                    width={150}
                    height={10}
                    className="object-contain"
                  />
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6">
              <button 
                
                className="block w-full text-left text-lg hover:text-yellow-300 transition-colors duration-200 transform hover:translate-x-2"
              >
                About
              </button>
              <Button 
                
                className="block w-full text-left text-lg hover:text-yellow-300 transition-colors duration-200 transform hover:translate-x-2"
              >
                LIFE@Inframe
              </Button>
            </div>

            {/* Authentication Section */}
            <div className="mt-auto mb-8">
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-full">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                      <img
                        src={user?.picture ?? "/default-avatar.jpg"}
                        alt={user?.name}
                        className="w-10 h-10 rounded-full border-2 border-yellow-300"
                      />
                      <span className="flex-1 text-left">{user?.name}</span>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full bg-gray-900 text-white border border-gray-800">
                    <DropdownMenuItem 
                      className="text-gray-400"
                      disabled
                    >
                      {user?.email}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gray-800" />
                    <DropdownMenuItem
                      className="text-red-400 hover:text-red-300 hover:bg-gray-800"
                      onClick={() => logout({
                        logoutParams: { returnTo: window.location.origin },
                      })}
                    >
                      Log Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="space-y-3">
                  <Button
                    onClick={() => loginWithRedirect()}
                    className="w-full py-6 text-black font-bold bg-yellow-300 hover:bg-yellow-400 transition-colors"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => loginWithRedirect()}
                    variant="outline"
                    className="w-full py-6 font-bold border-yellow-300 text-yellow-300 hover:bg-yellow-300/10 transition-colors"
                  >
                    Sign Up
                  </Button>
                </div>
              )}
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
