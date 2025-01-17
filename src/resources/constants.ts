// import { getCountryCallingCode } from "react-phone-number-input/input";
// import countryNames from "react-phone-number-input/locale/en.json";
// import {CountryCode} from "libphonenumber-js";

import { CountryCode, getCountryCallingCode } from "libphonenumber-js";
import { useEffect } from "react";
import { ISupportedCountry } from "./types/index";

// import { ISupportedCountry } from "./types/index";

export const SUPPORTED_COUNTRIES: Array<ISupportedCountry> = [
  {
    name: "Ghana",
    iso: "GH",
    code: getCountryCallingCode("GH" as CountryCode),
    flag: "https://flagcdn.com/gh.svg",
  },
  {
    name: "United Kingdom",
    iso: "GB",
    code: getCountryCallingCode("GB" as CountryCode),
    flag: "https://flagcdn.com/gb.svg",
  },
  {
    name: "ÜSA",
    iso: "US",
    code: getCountryCallingCode("US" as CountryCode),
    flag: "https://flagcdn.com/us.svg",
  },
];

// export const getSupportedCountries = () => {
//   import("react-phone-number-input/input").then((module) => {
//     const { getCountryCallingCode } = module;

//     // Dynamically import countryNames
//     import("react-phone-number-input/locale/en.json").then((countryModule) => {
//       const countryNames = countryModule.default;

//       // Add supported countries to the SUPPORTED_COUNTRIES array
//       return (SUPPORTED_COUNTRIES = [
//         {
//           name: countryNames["EG" as keyof typeof countryNames],
//           iso: "EG",
//           code: getCountryCallingCode("EG" as CountryCode),
//           flag: "https://flagcdn.com/eg.svg",
//           cities: [
//             { name: "Cairo" },
//             { name: "Aswan" },
//             { name: "Damietta" },
//             { name: "Alex" },
//           ],
//         },
//         {
//           name: countryNames["GH" as keyof typeof countryNames],
//           iso: "GH",
//           code: getCountryCallingCode("GH" as CountryCode),
//           flag: "https://flagcdn.com/gh.svg",
//           cities: [
//             // GREATER ACCRA
//             { name: "Accra" },
//             { name: "Tema" },
//             { name: "Kumasi" },
//           ],
//         },
//         {
//           name: countryNames["RW" as keyof typeof countryNames],
//           iso: "RW",
//           code: getCountryCallingCode("RW" as CountryCode),
//           flag: "https://flagcdn.com/rw.svg",
//           cities: [
//             { name: "Kigali" },
//             { name: "Ruhengeri" },
//             { name: "Bukavu" },
//             { name: "Musanze" },
//           ],
//         },
//         {
//           name: countryNames["GB" as keyof typeof countryNames],
//           iso: "GB",
//           code: getCountryCallingCode("GB" as CountryCode),
//           flag: "https://flagcdn.com/gb.svg",
//           cities: [
//             { name: "London" },
//             { name: "Manchester" },
//             { name: "Leeds" },
//             { name: "Merseyside" },
//             { name: "Colchester" },
//             { name: "Newcastle" },
//           ],
//         },
//         {
//           name: countryNames["US" as keyof typeof countryNames],
//           iso: "US",
//           code: getCountryCallingCode("US" as CountryCode),
//           flag: "https://flagcdn.com/us.svg",
//           cities: [
//             // GREATER ACCRA
//             { name: "Oklahoma City", state: "Oklahoma" },
//             { name: "Phoenix", state: "Arizona" },
//             { name: "Indianapolis", state: "Indiana" },
//             { name: "Atlanta", state: "Georgia" },
//             { name: "Columbus", state: "Ohia" },
//             { name: "Austin", state: "Texas" },
//             { name: "Sacramento", state: "California" },
//             { name: "Springfield", state: "Illinois" },
//             { name: "Lincoln City", state: "Nebraska" },
//             { name: "Philadelphia", state: "Pennsylvania" },
//             { name: "New York City", state: "New York" },
//             { name: "Los Angeles", state: "California" },
//             { name: "Houston", state: "Texas" },
//             { name: "Seattle", state: "Washington" },
//             { name: "Chicago", state: "Illinois" },
//             { name: "Minneapolis", state: "Minnesota" },
//             { name: "Las Vegas", state: "Nevada" },
//             { name: "Las Vegas", state: "Nevada" },
//             { name: "Oakland", state: "San Francisco" },
//             { name: "Tucson", state: "Arizona" },
//           ],
//         },
//       ]);
//     });
//   });

//   return SUPPORTED_COUNTRIES
// };

// export const SUPPORTED_COUNTRIES: Array<ISupportedCountry> = [
//   {
//     code: "233",
//     iso: "GH",
//     name: "Ghana",
//     flag: "https://flagcdn.com/gh.svg",
//   },
//   {
//     code: "44",
//     iso: "GB",
//     name: "United Kingdom",
//     flag: "https://flagcdn.com/gb.svg",
//   },
// ];

// Iana Time Zones
