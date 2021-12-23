import { AnyAction } from "redux";
import { GET_ALL_COUNTRIES, SET_QUERY, SET_REGIONS } from "../ActionTypes";

const initialState = {
  filtered_countries: [],
  allCountries: [],
  query: "",
};

export const reducerCountries = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, query: action.payload };
    case SET_REGIONS:
      return {
        ...state,
        filtered_countries: action.payload.filtered_countries,
      };
    case GET_ALL_COUNTRIES:
      return { ...state, allCountries: action.payload };
    default:
      return { ...state };
  }
};
