import { InputFilter } from "./InputFilter";
import { InputSearch } from "./InputSearch";

export const Inputs = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between h-32 px-4 md:px-16 my-12 md:my-0">
      <InputSearch />
      <InputFilter />
    </div>
  );
};
