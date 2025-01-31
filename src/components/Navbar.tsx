// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { CiMenuFries } from "react-icons/ci";
// import { useRouter } from "next/navigation"; // Correct usage of useRouter for client components
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// const Navbar = () => {
//   const [searchQuery, setSearchQuery] = useState<string>(""); // State for search
//   const router = useRouter(); // Next.js router for navigation

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       router.push(`/productGalleryApi?search=${searchQuery}`); // Redirect with query
//     }
//   };

//   return (
//     <>
//     <div className="w-full md:mt-0 mx-auto my-0 bg-customGray shadow-sm">
//       <div className="mx-auto px-4 flex justify-between items-center md:py-3">
//         <div className="flex items-center sm:py-3 md:py-0">
//           <a href="/">
//             <Image
//               src="/images/logo2.png"
//               alt="Jordan Logo"
//               width={24}
//               height={24}
//             />
//           </a>
//         </div>
//         <div className="hidden md:flex space-x-2 text-sm text-gray-700 font-medium">
//           <Link href="/checkout" className="hover:text-gray-400">
//             Find a Store
//           </Link>
//           <h1>|</h1>
//           <Link href="/contactus" className="hover:text-gray-400">
//             Help
//           </Link>
//           <h1>|</h1>
//           <Link href="/joinus" className="hover:text-gray-400">
//             Join Us
//           </Link>
//           <h1>|</h1>
//           <Link href="/login" className="hover:text-gray-400">
//             Sign In
//           </Link>
//         </div>

//         <div className="block md:hidden">
//           <Sheet>
//             <SheetTrigger>
//               <CiMenuFries />
//             </SheetTrigger>
//             <SheetContent>
//               <SheetHeader>
//                 <SheetTitle>
//                   <div className="flex gap-1 items-center py-2">
//                     <div className="flex items-center">
//                       <Image
//                         src="/images/logo2.png"
//                         alt="Jordan Logo"
//                         width={24}
//                         height={24}
//                       />
//                     </div>
//                     <h1 className="text-md">Nike</h1>
//                   </div>
//                 </SheetTitle>
//                 <SheetDescription>
//                   <div className="md:hidden sm:flex text-start flex-col space-x-2 py-2 gap-5 text-sm text-gray-700 font-medium">
//                     <input
//                       type="text"
//                       placeholder="Search men/women"
//                       className="ml-1 bg-transparent focus:outline-none text-sm font-medium text-gray-600 placeholder-gray-300"
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                     <Link href="/login" className="ml-2">
//                       Sign In
//                     </Link>
//                     <Link href="/checkout" className="ml-2">
//                       Find a Store
//                     </Link>
//                     <Link href="/contactus">Help</Link>
//                     <Link href="/joinus">Join Us</Link>
//                   </div>
//                 </SheetDescription>
//               </SheetHeader>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>

//       {/* nav2 */}
//       <nav className="hidden md:block w-full bg-white shadow-sm">
//         <div className="container mx-auto flex items-center justify-between px-4 py-3">
//           <div className="flex items-center space-x-4">
//             <Link href="/">
//               <Image
//                 src="/images/nike-logo.png"
//                 alt="Nike Logo"
//                 width={78.47}
//                 height={78.47}
//               />
//             </Link>
//           </div>
//           <div className="hidden md:flex items-center space-x-7 ml-4 text-md font-medium text-gray-800">
//             <Link href="/productGalleryApi" className="hover:text-gray-400">
//               New & Featured
//             </Link>
//             <Link href="/menproducts">Men</Link>
//             <Link href="/womenproducts">Women</Link>
//             <Link href="/productGalleryApi">Kids</Link>
//             <Link href="/productGalleryApi">Sale</Link>
//             <Link href="/productGalleryApi">SNKRS</Link>
//           </div>
//           <div className="flex items-center space-x-2">
//             <form
//               onSubmit={handleSearch}
//               className="hidden md:flex items-center bg-gray-100 px-2 py-2 rounded-full"
//             >
//               <Image
//                 src="/images/searchbar.png"
//                 alt="search bar"
//                 width={24}
//                 height={24}
//                 className="h-6 w-auto"
//               />
//               <input
//                 type="text"
//                 placeholder="Search men/women"
//                 className="ml-1 bg-transparent focus:outline-none text-sm font-medium text-gray-600 placeholder-gray-300"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <button type="submit" className="hidden"></button>
//             </form>
//             <Image
//               src="/images/heart.png"
//               alt="heart"
//               width={24}
//               height={24}
//               className="h-5 w-auto"
//             />
//             <Link href="/cart">
//               <Image
//                 src="/images/marketplace.png"
//                 alt="marketplace"
//                 width={24}
//                 height={24}
//                 className="h-6 w-auto hover:h-[26px] hover:w-[26px]"
//               />
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//     </>
//   );
// };

// export default Navbar;
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { Product } from "../../types/products"; // Importing Product type
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Assuming you have the Product type defined
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query
  const [wishlist, setWishlist] = useState<Product[]>([]); // State for wishlist
  const router = useRouter(); // Router for navigation

  // Fetch wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);
  }, []);

  // Handle search form submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/productGalleryApi?search=${searchQuery}`); // Navigate to search page
    }
  };

  // Go to wishlist page
  const goToWishlist = () => {
    router.push("/wishlist"); // Redirect to wishlist page
  };

  return (
    <>
      <div className="w-full md:mt-0 mx-auto my-0 bg-customGray shadow-sm">
        <div className="mx-auto px-4 flex justify-between items-center md:py-3">
          {/* Left section: Logo and navigation */}
          <div className="flex items-center sm:py-3 md:py-0">
            <Link href="/">
              <Image
                src="/images/logo2.png"
                alt="Brand Logo"
                width={24}
                height={24}
              />
            </Link>
          </div>

          {/* Navigation Links (desktop view) */}
          <div className="hidden md:flex space-x-2 text-sm text-gray-700 font-medium">
            <Link href="/checkout" className="hover:text-gray-400">
              Find a Store
            </Link>
            <h1>|</h1>
            <Link href="/contactus" className="hover:text-gray-400">
              Help
            </Link>
            <h1>|</h1>
            <Link href="/joinus" className="hover:text-gray-400">
              Join Us
            </Link>
            <h1>|</h1>
            <Link href="/login" className="hover:text-gray-400">
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Icon (for mobile view) */}
          <div className="block md:hidden">
            <Sheet>
              <SheetTrigger>
                <CiMenuFries />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex gap-1 items-center py-2">
                      <div className="flex items-center">
                        <Image
                          src="/images/logo2.png"
                          alt="Brand Logo"
                          width={24}
                          height={24}
                        />
                      </div>
                      <h1 className="text-md">Brand</h1>
                    </div>
                  </SheetTitle>
                  <SheetDescription>
                    <div className="md:hidden sm:flex text-start flex-col space-x-2 py-2 gap-5 text-sm text-gray-700 font-medium">
                      <input
                        type="text"
                        placeholder="Search men/women"
                        className="ml-1 bg-transparent focus:outline-none text-sm font-medium text-gray-600 placeholder-gray-300"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <Link href="/login" className="ml-2">
                        Sign In
                      </Link>
                      <Link href="/checkout" className="ml-2">
                        Find a Store
                      </Link>
                      <Link href="/contactus">Help</Link>
                      <Link href="/joinus">Join Us</Link>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Main Navbar with Search and Wishlist */}
      <nav className="hidden md:block w-full bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Left section: Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                src="/images/nike-logo.png"
                alt="Nike Logo"
                width={78.47}
                height={78.47}
              />
            </Link>
          </div>

          {/* Main Links (Desktop view) */}
          <div className="hidden md:flex items-center space-x-7 ml-4 text-md font-medium text-gray-800">
            <Link href="/productGalleryApi" className="hover:text-gray-400">
              New & Featured
            </Link>
            <Link href="/menproducts">Men</Link>
            <Link href="/womenproducts">Women</Link>
            <Link href="/productGalleryApi">Kids</Link>
            <Link href="/productGalleryApi">Sale</Link>
            <Link href="/productGalleryApi">SNKRS</Link>
          </div>

          {/* Search and Wishlist */}
          <div className="flex items-center space-x-2">
            <form
              onSubmit={handleSearch}
              className="hidden md:flex items-center bg-gray-100 px-2 py-2 rounded-full"
            >
              <Image
                src="/images/searchbar.png"
                alt="Search Bar"
                width={24}
                height={24}
                className="h-6 w-auto"
              />
              <input
                type="text"
                placeholder="Search men/women"
                className="ml-1 bg-transparent focus:outline-none text-sm font-medium text-gray-600 placeholder-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="hidden"></button>
            </form>

            {/* Wishlist Icon */}
            <div
              onClick={goToWishlist}
              className="relative cursor-pointer"
            >
              <Image
                src="/images/heart.png"
                alt="Wishlist"
                width={24}
                height={24}
                className="h-5 w-auto"
              />
              {/* Show the number of items in the wishlist */}
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 text-xs text-white bg-pink-500 rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </div>

            {/* Cart Icon */}
            <Link href="/cart">
              <Image
                src="/images/marketplace.png"
                alt="Marketplace"
                width={24}
                height={24}
                className="h-6 w-auto hover:h-[26px] hover:w-[26px]"
              />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
