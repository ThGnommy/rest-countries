import { AnyAction } from "redux";
import { CountryProps } from "../../../components/CountriesList/type";
import {
  FETCH_SUCCESS,
  GET_ALL_COUNTRIES,
  RESET_COUNTRY,
  SET_COUNTRY,
  SET_QUERY,
  SET_REGIONS,
  RESET_QUERY,
  FETCH_RESET,
} from "../ActionTypes";

interface AppState {
  filtered_countries: Array<object>;
  allCountries: Array<object>;
  country: CountryProps | object;
  query: string | undefined;
  fetching: boolean;
}

const initialState: AppState = {
  filtered_countries: [],
  allCountries: [],
  country: {},
  query: "",
  fetching: false,
};

export const reducerCountries = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { ...state, fetching: true };
    case FETCH_RESET:
      return { ...state, fetching: false };
    case SET_QUERY:
      return { ...state, query: action.payload };
    case RESET_QUERY:
      return { ...state, query: "" };
    case SET_REGIONS:
      return {
        ...state,
        filtered_countries: action.payload.filtered_countries,
      };
    case GET_ALL_COUNTRIES:
      return { ...state, allCountries: action.payload };
    case SET_COUNTRY:
      return { ...state, country: action.payload };
    case RESET_COUNTRY:
      return { ...state, country: {} };
    default:
      return { ...state };
  }
};
