import React from "react";
import { CountryProps } from "./type";

export const Country = ({ flag, name, population, region, capital }: any) => {
  return (
    <div className="bg-white place-self-center max-w-[320px] w-m rounded-md drop-shadow dark:bg-dark-element">
      <img
        width="320"
        height="160"
        className="h-[200px] rounded-t-md object-cover"
        src={flag}
        alt={name}
      />
      <div className="p-8">
        <h5 className="font-bold pb-4 dark:text-white">{name}</h5>
        <p className="dark:text-white">
          <span className="font-semibold dark:text-white">Population:</span>
          {population}
        </p>
        <p className="dark:text-white">
          <span className="font-semibold dark:text-white">Region</span>:{region}
        </p>
        <p className="dark:text-white">
          <span className="font-semibold dark:text-white">Capital</span>:
          {capital}
        </p>
      </div>
    </div>
  );
};
