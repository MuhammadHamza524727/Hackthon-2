import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="w-full font-roboto bg-customGray  shadow-sm ">
      <div className="container mx-auto  px-4 flex  justify-between items-center md:py-3    ">
        <div className="flex items-center">
          <Image
            src="/images/jordan-logo.png"
            alt="Jordan Logo"
            width={24}
            height={24}
            className="h-6 w-auto"
          />
        </div>
        <div className="hidden md:flex space-x-2 text-sm text-gray-700 font-medium">
          <Link href="/find-store">Find a Store</Link>
          <h1>|</h1>
          <Link href="/help">Help</Link>
          <h1>|</h1>
          <Link href="/join-us">Join Us</Link>
          <h1>|</h1>
          <Link href="/sign-in">Sign In</Link>
        </div>

        <div className="block md:hidden   ">
          <Sheet>
            <SheetTrigger>open</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* nav2 */}
      <nav className=" hidden md:block w-full bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/nike-logo.png" // Replace with your logo path
              alt="Nike Logo"
              width={78.47}
              height={78.47}
            />
          </div>
          <div className="hidden md:flex items-center space-x-7 ml-4 text-md font-medium text-gray-800 ">
            <Link href="/productGallery" className="hover:text-gray-400">
              New & Featured
            </Link>
            <Link href="/men">Men</Link>
            <Link href="/women">Women</Link>
            <Link href="/kids">Kids</Link>
            <Link href="/sale">Sale</Link>
            <Link href="/snkrs">SNKRS</Link>
          </div>
          <div className="flex items-center space-x-2 ">
            <div className="hidden md:flex items-center bg-gray-100 px-2  py-2 rounded-full">
              <Image
                src="/images/searchbar.png"
                alt="Jordan Logo"
                width={24}
                height={24}
                className="h-6 w-auto"
              />
              <input
                type="text"
                placeholder="Search"
                className="ml-1 bg-transparent focus:outline-none text-sm  font-bold text-gray-600 placeholder-gray-300"
              />
            </div>
            <Image
              src="/images/heart.png"
              alt="Jordan Logo"
              width={24}
              height={24}
              className="h-5 w-auto "
            />
            <Image
              src="/images/marketplace.png"
              alt="Jordan Logo"
              width={24}
              height={24}
              className="h-6 w-auto"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;