import { Avatar } from "@nextui-org/avatar";
import { groupBy, snakeCase, sortBy, startCase, uniqBy } from "lodash";

import { SUPPORTED_COUNTRIES } from "@/resources/constants";
import { ISelectOption } from "@/components/forms/Select";
import { IRadioOption } from "@/components/RadioButton";
import { ICountry, ICountryCode } from "@/resources/types/index";

console.log("Countries", SUPPORTED_COUNTRIES);

export const CountryOptions = SUPPORTED_COUNTRIES.reduce<Array<ISelectOption>>(
  (cum, cur) => [
    ...cum,
    {
      id: cur.iso,
      label: cur.name,
      value: cur.iso,
      icon: <Avatar alt={cur.name} className="w-6 h-6" src={cur.flag} />,
    },
  ],
  []
);

export const PhoneNumberCountryOptions: Record<ICountryCode, ICountry> = {
  
  ...SUPPORTED_COUNTRIES.reduce<Record<ICountryCode, ICountry>>(
    (cum, cur) => ({
      ...cum,
      [cur.iso]: {
        iso: cur.iso,
        name: cur.name,
        code: cur.code,
        flag: cur.flag,
      },
    }),
    []
  ),
};
