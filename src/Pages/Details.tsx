import { faArrowLeft } from "@fortawesome/fontawesome-free-solid";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import {
  fetchSuccess,
  resetCountry,
  resetQuery,
} from "../redux/actions/countriesAction";
import { useAppSelector } from "../redux/hooks";
import { numberWithCommas } from "../utils";
import { ILanguages } from "./types";

const Details = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { country, fetching } = useAppSelector((state) => state.countries);

  useEffect(() => {
    if (Object.entries(country).length > 0) {
      dispatch(fetchSuccess(true));
    }
    return () => {
      dispatch(fetchSuccess(false));
      dispatch(resetQuery);
    };
  }, [country]);

  return (
    <Layout>
      <div className="px-16 text-[16px] dark:text-white">
        <button
          className="flex w-28 bg-design-white py-2 my-20 justify-evenly items-center rounded drop-shadow-md capitalize dark:bg-dark-element"
          onClick={() => {
            navigate("/");
            dispatch(resetCountry);
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft as IconDefinition} />
          back
        </button>
        <div className="flex w-full justify-around h-[400px]">
          <img
            className="h-[400px] w-[600px]"
            src={fetching && country.flags.svg}
            alt={fetching && country.name.common}
          />
          <div className="flex flex-col w-2/5 justify-around">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <h2 className="text-4xl font-bold pb-8">
                  {fetching && country.name.common}
                </h2>
                <p className="pb-2">
                  <span className="font-extrabold">Native Name</span>:{" "}
                  {fetching && country.name.official}
                </p>
                <p className="pb-2">
                  <span className="font-extrabold">Population</span>:{" "}
                  {fetching && numberWithCommas(fetching && country.population)}
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
                    Object.entries<ILanguages>(country.currencies)[0][1].name}
                </p>
                <p>
                  <span className="font-extrabold">Languages</span>:{" "}
                  {fetching && Object.values(country.languages).join(", ")}
                </p>
              </div>
            </div>
            <div className="">
              <p>
                <span className="font-extrabold">Border Countries</span>:{" "}
                {fetching && country.borders.length > 0
                  ? Object.values(country.borders).map((el: any) => (
                      <span
                        key={el}
                        className="bg-white px-3 py-1 mx-1 rounded drop-shadow dark:bg-dark-element select-none"
                      >
                        {el}
                      </span>
                    ))
                  : "None"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
