import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const InputSearch = () => {
  return (
    <div className="relative">
      <input
        className="w-96 h-14 px-14 rounded-md drop-shadow outline-none bg-white dark:bg-dark-element dark:text-gray-400"
        placeholder="Search for the country..."
        type="text"
      />
      <FontAwesomeIcon
        className="absolute left-6 top-1/2 -translate-y-2/4 text-gray-400"
        icon={faSearch as any}
      />
    </div>
  );
};
