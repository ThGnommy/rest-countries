import { AnyAction } from "redux";
import {
  FETCH_SUCCESS,
  GET_ALL_COUNTRIES,
  RESET_COUNTRY,
  SET_COUNTRY,
  SET_QUERY,
  SET_REGIONS,
  RESET_QUERY,
} from "../ActionTypes";

const initialState = {
  filtered_countries: [],
  allCountries: [],
  country: {},
  query: "",
  fetching: false,
};

export const reducerCountries = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { ...state, fetching: action.payload };
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
