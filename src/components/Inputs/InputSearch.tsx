import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../../redux/actions/countriesAction";
import { capitalize } from "../../utils";

export const InputSearch = () => {
  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative w-full">
      <input
        className="w-auto sm:w-96 h-14 px-14 rounded-md drop-shadow outline-none bg-white dark:bg-dark-element dark:text-white placeholder:text-dark-input"
        placeholder="Search for the country..."
        type="text"
        ref={inputRef}
        onChange={() => {
          dispatch(setQuery(capitalize(inputRef?.current?.value)));
        }}
      />
      <FontAwesomeIcon
        className="absolute left-6 top-1/2 -translate-y-2/4 text-gray-400"
        icon={faSearch as IconDefinition}
      />
    </div>
  );
};
