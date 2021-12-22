import React from "react";
import { CountryProps } from "./type";

export const Country = ({ flag, name, population, region, capital }: any) => {
  return (
    <div className="bg-white place-self-center w-[320px] rounded-md drop-shadow dark:bg-dark-element">
      <img className="rounded-t-md" src={flag} alt={name} />
      <div className="p-8">
        <h5 className="font-bold py-4 dark:text-white">{name}</h5>
        <p className="dark:text-white">
          <span className="font-semibold dark:text-white">Population:</span>{" "}
          {population}
        </p>
        <p className="dark:text-white">
          <span className="font-semibold dark:text-white">Region</span>:{" "}
          {region}
        </p>
        <p className="dark:text-white">
          <span className="font-semibold dark:text-white">Capital</span>:{" "}
          {capital}
        </p>
      </div>
    </div>
  );
};
