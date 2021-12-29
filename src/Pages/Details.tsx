import { faArrowLeft } from "@fortawesome/fontawesome-free-solid";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CountryDetailsProps } from "../components/CountriesList/type";
import Layout from "../components/Layout";
import {
  fetchReset,
  fetchSuccess,
  resetCountry,
  resetQuery,
} from "../redux/actions/countriesAction";
import { useAppSelector } from "../redux/hooks";
import { numberWithCommas } from "../utils";

const Details = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { country, fetching } = useAppSelector((state) => state.countries);

  useEffect(() => {
    if (Object.entries(country).length > 0) {
      dispatch(fetchSuccess);
    }
    return () => {
      dispatch(fetchReset);
      dispatch(resetQuery);
    };
  }, [country, dispatch]);

  return (
    <Layout>
      <div className="flex px-4 xl:px-16 flex-col text-[16px] dark:text-white">
        <div>
          <button
            className="flex w-28 bg-design-white py-2 my-8 md:my-20 justify-evenly items-center rounded drop-shadow-md capitalize dark:bg-dark-element"
            onClick={() => {
              navigate("/");
              dispatch(resetCountry);
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft as IconDefinition} />
            back
          </button>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center w-full max-w-[500px] lg:max-w-none">
            <img
              className="h-auto w-[500px]"
              width={500}
              src={fetching ? country.flags.svg : undefined}
              alt={fetching ? country.name.common : undefined}
            />
            <div className="flex flex-col justify-around mt-12 lg:mt-0 lg:w-5/12">
              <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col mb-8 lg:mb-12">
                  <h2 className="text-4xl font-bold pb-8">
                    {fetching && country.name.common}
                  </h2>
                  <p className="pb-2">
                    <span className="font-extrabold">Native Name</span>:{" "}
                    {fetching &&
                      Object.entries<any>(country.name.nativeName)[0][1]
                        .official}
                  </p>
                  <p className="pb-2">
                    <span className="font-extrabold">Population</span>:{" "}
                    {fetching &&
                      numberWithCommas(fetching && country.population)}
                  </p>
                  <p className="pb-2">
                    <span className="font-extrabold">Region</span>:{" "}
                    {country.region}
                  </p>
                  <p className="pb-2">
                    <span className="font-extrabold">Sub Region</span>:{" "}
                    {fetching && country.subregion}
                  </p>
                  <p className="pb-2">
                    <span className="font-extrabold">Capital</span>:{" "}
                    {fetching && country.capital}
                  </p>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="pb-2">
                    <span className="font-extrabold">Top level domain</span>:{" "}
                    {fetching && country.tld && country.tld[0]}
                  </p>
                  <p className="pb-2">
                    <span className="font-extrabold">Currencies</span>:{" "}
                    {fetching &&
                      Object.entries<CountryDetailsProps>(
                        country.currencies
                      )[0][1].name}
                  </p>
                  <p className="pb-2">
                    <span className="font-extrabold">Languages</span>:{" "}
                    {fetching && Object.values(country.languages).join(", ")}
                  </p>
                </div>
              </div>
              <div>
                <p className="pb-4 md:pb-0">
                  <span className="pt-4 font-extrabold">Border Countries</span>:{" "}
                  {fetching && country.borders.length > 0
                    ? Object.values<CountryDetailsProps>(country.borders).map(
                        (el: any) => (
                          <span
                            key={el}
                            className="inline-flex bg-white px-3 py-1 mx-1 mb-3 rounded drop-shadow dark:bg-dark-element select-none"
                          >
                            {el}
                          </span>
                        )
                      )
                    : "None"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
