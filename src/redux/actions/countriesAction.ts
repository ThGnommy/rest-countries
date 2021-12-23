import axios from "axios";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { filtered_regions } from "../../api/countries";
import {
  GET_ALL_COUNTRIES,
  SET_QUERY,
  SET_REGIONS,
} from "../reducers/ActionTypes";
import { RootState } from "../store";

// export const getRegions =
//   () => async (dispatch: ThunkDispatch<any, RootState, AnyAction>) => {
//     const africa = axios.get(region_africa);
//     const america = axios.get(region_america);
//     const asia = axios.get(region_asia);
//     const europe = axios.get(region_europe);
//     const oceania = axios.get(region_oceania);

//     await axios
//       .all([africa, america, asia, europe, oceania])
//       .then(
//         axios.spread(
//           (
//             { data: africa },
//             { data: america },
//             { data: asia },
//             { data: europe },
//             { data: oceania }
//           ) => {
//             // use/access the results
//             dispatch({
//               type: GET_REGIONS,
//               payload: {
//                 regions: { africa, america, asia, europe, oceania },
//               },
//             });
//           }
//         )
//       )
//       .catch((error) => {
//         console.error(error);
//       });
//   };

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
