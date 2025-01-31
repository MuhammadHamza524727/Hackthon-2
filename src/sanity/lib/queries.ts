// import { defineQuery } from "next-sanity";

import { groq } from "next-sanity";

//  export const allproducts = defineQuery (`

//       *[_type == "product"] {  
//       _id,
//       name,
//       description,
//       price,
//      discountPercentage,
//      priceWithoutDiscount,
//      rating,
//      ratingCount,
//      tags,
//      sizes,
//       "imageUrl": image.asset->url 
//       }
//     `)

//     export const fourPro = defineQuery (`

//         *[_type== "product"] [0..3]{  
//         _id,
//         name,
//         description,
//         price,
//        discountPercentage,
//        priceWithoutDiscount,
//        rating,
//        ratingCount,
//        tags,
//        sizes,
//         "imageUrl": image.asset->url 
//         }
//       `)



export const allProducts = groq`*[_type== "product"]`
export const four = groq`*[_type == ""product][0..3]`