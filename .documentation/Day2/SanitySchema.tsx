// //  Sanity Schema Example (Property)

// // import { defineField, defineType } from 'sanity';

// export default defineType({
//   name: 'property',
//   title: 'Property',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'name',
//       title: 'Property Name',

//       type: 'string',
//     }),
//     defineField({
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//     }),
//     defineField({
//       name: 'address',
//       title: 'Address',
//       type: 'geopoint',
//     }),
//     defineField({
//       name: 'city',
//       title: 'City',
//       type: 'string',
//     }),
//     defineField({
//       name: 'images',
//       title: 'Images',
//       type: 'array',
//       of: [{ type: 'image' }],

//     }),
//     defineField({
//       name: 'amenities',
//       title: 'Amenities',
//       type: 'array',
//       of: [{ type: 'string' }],
//     }),
//     defineField({
//       name: 'pricePerNight',
//       title: 'Price Per Night',
//       type: 'number',
//     }),
//     defineField({
//       name: 'availability',
//       title: 'Availability',
//       type: 'array',
//       of: [{ type: 'date' }],
//     }),
//     defineField({
//       name: 'owner',
//       title: 'Owner',
//       type: 'reference',
  
//     to: [{ type: 'owner' }],
//     }),
//   ],
// });
