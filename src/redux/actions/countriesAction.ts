import axios from "axios";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { filtered_regions, get_country } from "../../api/countries";
import {
  FETCH_SUCCESS,
  GET_ALL_COUNTRIES,
  RESET_COUNTRY,
  RESET_QUERY,
  SET_COUNTRY,
  SET_QUERY,
  SET_REGIONS,
} from "../reducers/ActionTypes";
import { RootState } from "../store";

export const getAllCountries =
  () => async (dispatch: ThunkDispatch<any, RootState, AnyAction>) => {
    axios
      .get(filtered_regions)
      .then((res) => {
        dispatch({
          type: GET_ALL_COUNTRIES,
          payload: res.data,
        });
      })
      .catch((error) => {
        return console.error(error);
      });
  };

export const setRegion = (regions: any) => async (dispatch: any) => {
  dispatch({
    type: SET_REGIONS,
    payload: {
      filtered_countries: regions,
    },
  });
};

export const setQuery =
  (query: any) =>
  async (dispatch: ThunkDispatch<any, RootState, AnyAction>) => {
    dispatch({
      type: SET_QUERY,
      payload: query,
    });
  };

export const setCountry =
  (name: string) => (dispatch: ThunkDispatch<any, RootState, AnyAction>) => {
    axios
      .get(get_country(name))
      .then((res) => {
        dispatch({
          type: SET_COUNTRY,
          payload: res.data[0],
        });
      })
      .catch((error) => {
        return console.error(error);
      });
  };

export const fetchSuccess = (b: boolean) => (dispatch: any) => {
  dispatch({ type: FETCH_SUCCESS, payload: b });
};

export const resetCountry = (dispatch: any) => {
  dispatch({ type: RESET_COUNTRY });
};

export const resetQuery = (dispatch: any) => {
  dispatch({ type: RESET_QUERY });
};
