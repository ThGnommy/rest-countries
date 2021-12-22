import { CHANGE_COUNTRY, GET_ALL_COUNTRIES } from "../ActionTypes";

const initialState = {
  countries: {},
  actualCountry: "europe",
};

export const reducerCountries = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return { ...state, countries: action.payload };
    case CHANGE_COUNTRY:
      return { ...state, actualCountry: action.payload.actualCountry };
    default:
      return { ...state };
  }
};
