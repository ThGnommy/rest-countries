import { faChevronDown } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const InputFilter = () => {
  const [show, setShow] = useState(false);

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className="relative">
      <div
        className="bg-white flex items-center justify-between h-14 w-60 px-6 rounded-md drop-shadow select-none cursor-pointer  dark:bg-dark-element dark:text-white"
        onClick={() => setShow((prev) => !prev)}
      >
        <p className="font-semibold">Filter by Region</p>
        <FontAwesomeIcon className="" icon={faChevronDown as any} />
      </div>
      {show && (
        <div className="absolute top-16 bg-white flex flex-col justify-between w-60 px-6 py-4 rounded-md drop-shadow select-none dark:bg-dark-element dark:text-white">
          {regions.map((region) => (
            <p className="py-1 font-semibold cursor-pointer">{region}</p>
          ))}
        </div>
      )}
    </div>
  );
};
