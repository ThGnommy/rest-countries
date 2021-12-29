import { useAppSelector } from "../../redux/hooks";
import { numberWithCommas } from "../../utils";
import { Country } from "./Country";
import { CountryProps } from "./type";

export const CountriesList = () => {
  const { query, allCountries, filtered_countries } = useAppSelector(
    (state) => state.countries
  );

  const query_region = allCountries.filter((country: CountryProps) => {
    return country.name.common.includes(query);
  });

  const query_region_filtered = filtered_countries.filter(
    (country: CountryProps) => {
      return country.name.common.includes(query);
    }
  );

  return (
    <div className="w-full grid gap-20 grid-cols-1 pb-8 place-self-center text-[14px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {filtered_countries &&
        query_region_filtered?.map(
          (country: CountryProps): JSX.Element => (
            <Country
              key={country.name.common}
              flag={country.flags.png}
              name={country.name.common}
              population={numberWithCommas(country.population)}
              region={country.region}
              subregion={country.subregion}
              capital={country.capital[0]}
              languages={country.languages}
              borders={country.borders}
            />
          )
        )}
      {filtered_countries.length === 0 &&
        query_region?.map(
          (country: CountryProps): JSX.Element => (
            <Country
              key={country.name.common}
              flag={country.flags.png}
              name={country.name.common}
              population={numberWithCommas(country.population)}
              region={country.region}
              capital={country.capital[0]}
              subregion={country.subregion}
              languages={country.languages}
              borders={country.borders}
            />
          )
        )}
    </div>
  );
};
