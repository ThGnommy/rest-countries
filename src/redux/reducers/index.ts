import { combineReducers } from "redux";
import { reducerCountries } from "./countries/reducerCountries";

const rootReducers = combineReducers({
  countries: reducerCountries,
});

export default rootReducers;
