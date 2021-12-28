import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { Country } from "./Country";

export const CountriesList = () => {
  let navigate = useNavigate();

  const { query, allCountries, filtered_countries } = useAppSelector(
    (state) => state.countries
  );

  const query_region = allCountries.filter((country: any) => {
    return country.name.common.includes(query);
  });

  const query_region_filtered = filtered_countries.filter((country: any) => {
    return country.name.common.includes(query);
  });

  return (
    <div className="w-full grid gap-20 grid-cols-4 pb-8 place-self-center">
      {filtered_countries &&
        query_region_filtered?.map(
          (country: any): JSX.Element => (
            <Country
              key={country.name.common}
              flag={country.flags.png}
              name={country.name.common}
              population={country.population}
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
          (country: any): JSX.Element => (
            <Country
              key={country.name.common}
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
