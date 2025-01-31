// "use client";

// import { Product } from "types/products";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import Swal from "sweetalert2";
// import { getCartItems, removeFromCart, updateCartQuantity } from "@/cart/cart";

// const Page = () => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   useEffect(() => {
//     setCartItems(getCartItems());
//   }, []);

//   const handleRemove = (id: string) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to undo this action!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, remove it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         removeFromCart(id);
//         setCartItems(getCartItems());
//         Swal.fire(
//           "Removed!",
//           "Item has been removed from your cart.",
//           "success"
//         );
//       }
//     });
//   };

//   const handleQuantityChange = (id: string, quantity: number) => {
//     updateCartQuantity(id, quantity);
//     setCartItems(getCartItems());
//   };

//   const handleIncrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id);
//     if (product) {
//       handleQuantityChange(id, product.inventory + 1);
//     }
//   };

//   const handleDecrement = (id: string) => {
//     const product = cartItems.find((item) => item._id === id);
//     if (product && product.inventory > 1) {
//       handleQuantityChange(id, product.inventory - 1);
//     }
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.inventory,
//       0
//     );
//   };

//   const handleProceed = () => {
//     Swal.fire({
//       title: "Processing your order...",
//       text: "Please wait a moment.",
//       icon: "info",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Proceed",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire(
//           "Success!",
//           "Your order has been successfully processed!",
//           "success"
//         );
//         // Clear the cart after proceeding (optional)
//         setCartItems([]);
//       }
//     });
//   };
//   return (
//     <div className="md:pt-40 bg-white min-h-screen p-4">
   
//     <div className=" mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
//       {/* Bag Section */}
//       <div className="lg:col-span-2">
//          {/* Free Delivery Notice */}
//     <div className="bg-gray-200 py-2 text-start px-4 text-sm">
//       Free Delivery <br /> <span className="font-semibold"> 14,000.00 or more</span>.{" "}
//       <a href="#" className="underline ml-2">
//         View details
//       </a>
//     </div>

//         <h1 className="text-2xl font-semibold mb-4">Bag</h1>

//         {/* Product 1 */}
//         <div className="border-b pb-4 mb-4">
//           <div className="flex items-center">
//             <Image
//               src="/images/men1.png"
//               alt="Nike Product"
//               width={100}
//               height={100}
//               className="rounded-md"
//             />
//             <div className="ml-4 flex-grow">
//               <h2 className="font-semibold">Nike Dri-FIT ADV TechKnit Ultra</h2>
//               <p className="text-sm text-gray-500">
//                 Men&apos;s Short-Sleeve Running Top <br />
//                 Ashen Slate/Cobalt Bliss
//               </p>
//               <div className="text-sm text-gray-500 mt-2">
//                 <span>Size: L</span> &nbsp; | &nbsp; <span>Quantity: 1</span>
//               </div>
//               {/* Actions */}
//           <div className="flex items-center mt-4 space-x-4 text-gray-600">
//             <button className="hover:text-black">
//             <Image
//               src="/images/heart.png"
//               alt="Nike Product"
//               width={16}
//               height={16}
//               className="rounded-md"
//             />
//             </button>
//             <button className="hover:text-black">
//             <Image
//               src="/images/dustbin.png"
//               alt="Nike Product"
//               width={16}
//               height={16}
//               className="rounded-md h-"
//             />
//             </button>
//           </div>
//             </div>
//             <p className="font-semibold text-right">MRP: 3,895.00</p>
          
//           </div>
//         </div>

//         {/* Product 2 */}
//         <div className="border-b pb-4">
//           <div className="flex items-center">
//             <Image
//               src="/images/Rectangle9.png"
//               alt="Nike Product"
//               width={100}
//               height={100}
//               className="rounded-md"
//             />
//             <div className="ml-4 flex-grow">
//               <h2 className="font-semibold">Nike Air Max 97 SE</h2>
//               <p className="text-sm text-gray-500">
//                 Men&apos;s Shoes <br />
//                 Flat Pewter/Light Bone/Black/White
//               </p>
//               <div className="text-sm mt-2 text-gray-500">
//                 <span>Size: 8</span> &nbsp; | &nbsp; <span>Quantity: 1</span>
//               </div>
//               <div className="flex items-center mt-4 space-x-4 text-gray-600">
//             <button className="hover:text-black">
//             <Image
//               src="/images/heart.png"
//               alt="heart"
//               width={16}
//               height={16}
//               className="rounded-md"
//             />
//             </button>
//             <button className="hover:text-black">
//             <Image
//               src="/images/dustbin.png"
//               alt="dustbin"
//               width={16}
//               height={16}
//               className="rounded-md"
//             />
//             </button>
//           </div>
//             </div>
//             <p className="font-semibold text-right">MRP:  16,995.00</p>
//           </div>
//           {/* Actions */}
          
//         </div>
//       </div>

//       {/* Summary Section */}
//       <div className="lg:col-span-1 bg-gray-100 p-6 rounded-md h-fit">
//         <h2 className="text-lg font-semibold mb-4">Summary</h2>
//         <div className="flex justify-between text-sm mb-2">
//           <span>Subtotal</span>
//           <span> 20,890.00</span>
//         </div>
//         <div className="flex justify-between text-sm mb-2">
//           <span>Estimated Delivery & Handling</span>
//           <span>Free</span>
//         </div>
//         <hr className="my-2" />
//         <div className="flex justify-between text-base font-semibold border-b-2 py-2">
//           <span>Total</span>
//           <span> 20,890.00</span>
//         </div>
//         <button className="w-full bg-black text-white py-3 mt-4 rounded-3xl hover:bg-gray-800">
//           Member Checkout
//         </button>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Page;


"use client";

import { Product } from "types/products";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { getCartItems, removeFromCart, updateCartQuantity } from "@/cart/cart";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch cart items dynamically
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire(
          "Removed!",
          "Item has been removed from your cart.",
          "success"
        );
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      handleQuantityChange(id, product.inventory - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };

  return (
    <div className=" bg-white min-h-screen p-4">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        {/* Bag Section */}
        <div className="lg:col-span-2">
          <div className="bg-gray-200 py-2 text-start px-4 text-sm">
            Free Delivery <br />{" "}
            <span className="font-semibold">14,000.00 or more</span>.{" "}
            <a href="#" className="underline ml-2">
              View details
            </a>
          </div>


          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item._id} className="border-b pb-4 mb-4 my-5">
                <div className="flex items-center sm:flex-col md:flex-row">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.productName}
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                  )}
                  <div className="ml-4 flex-grow">
                    <h2 className="font-semibold">{item.productName}</h2>
                    <p className="text-sm text-gray-500">
                      {item.description || "No description available."}
                    </p>
                    <div className="text-sm text-gray-500 mt-2">
                      <span>Size: L</span> &nbsp; | &nbsp;{" "}
                      <span>Quantity: {item.inventory}</span>
                    </div>
                    {/* Quantity Controls */}
                    <div className="flex items-center mt-4 space-x-4">
                      <button
                        onClick={() => handleDecrement(item._id)}
                        className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                      >
                        -
                      </button>
                      <span>{item.inventory}</span>
                      <button
                        onClick={() => handleIncrement(item._id)}
                        className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex sm:flex-row  md:flex-col items-center sm:justify-start sm:py-5 md:py-0">
                    <p className="font-semibold px-2">MRP: ${item.price}</p>
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="text-red-500 hover:underline md:mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
        </div>

        {/* Summary Section */}
        <div className="lg:col-span-1 bg-gray-100 p-6 rounded-md h-fit">
          <h2 className="text-lg font-semibold mb-4">Summary</h2>
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Estimated Delivery & Handling</span>
            <span>Free</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-base font-semibold border-b-2 py-2">
            <span>Total</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <button
            onClick={() => Swal.fire("Order Placed!", "Success!", "success")}
            className="w-full bg-black text-white py-3 mt-4 rounded-3xl hover:bg-gray-800"
          >
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
