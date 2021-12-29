import { faChevronDown } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setRegion } from "../../redux/actions/countriesAction";
import { useAppSelector } from "../../redux/hooks";

export const InputFilter = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const { allCountries } = useAppSelector((state) => state.countries);

  const filteredRegion = (r: any) => {
    return allCountries.filter((country: any) => {
      return country.region === r;
    });
  };

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
        <div className="absolute z-10 top-16 bg-white flex flex-col justify-between w-60 px-6 py-4 rounded-md drop-shadow select-none dark:bg-dark-element dark:text-white">
          {regions.map((region) => (
            <p
              key={region}
              className="py-1 font-semibold cursor-pointer"
              onClick={() => {
                dispatch(setRegion(filteredRegion(region)));
                setShow((prev) => !prev);
              }}
            >
              {region}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
