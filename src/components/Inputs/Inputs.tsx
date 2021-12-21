import { InputFilter } from "./InputFilter";
import { InputSearch } from "./InputSearch";

export const Inputs = () => {
  return (
    <div className="flex items-center justify-between h-32 px-16">
      <InputSearch />
      <InputFilter />
    </div>
  );
};
