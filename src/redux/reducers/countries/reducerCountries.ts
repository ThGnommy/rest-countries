import { AnyAction } from "redux";
import { GET_ALL_COUNTRIES } from "../ActionTypes";

const initialState = {
  countris: [],
};

export const reducerCountries = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return action.payload;
    default:
      return { ...state };
  }
};
