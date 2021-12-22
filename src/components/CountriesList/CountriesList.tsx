import { useAppSelector } from "../../redux/hooks";
import { Country } from "./Country";

export const CountriesList = () => {
  const { countries } = useAppSelector((state) => state.countries);

  return (
    <div className="w-full grid gap-20 grid-cols-4 pb-8 place-self-center ">
      {countries?.europe?.map(
        (country: any): JSX.Element => (
          <Country
            key={country.cca3}
            flag={country.flags.png}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital[0]}
          />
        )
      )}
    </div>
  );
};
