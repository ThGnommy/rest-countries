import axios from "axios";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {
  region_africa,
  region_america,
  region_asia,
  region_europe,
  region_oceania,
} from "../../api/countries";
import { GET_ALL_COUNTRIES } from "../reducers/ActionTypes";
import { RootState } from "../store";

export const getAllCountries =
  () => async (dispatch: ThunkDispatch<any, RootState, AnyAction>) => {
    const africa = axios.get(region_africa);
    const america = axios.get(region_america);
    const asia = axios.get(region_asia);
    const europe = axios.get(region_europe);
    const oceania = axios.get(region_oceania);

    await axios
      .all([africa, america, asia, europe, oceania])
      .then(
        axios.spread(
          (
            { data: africa },
            { data: america },
            { data: asia },
            { data: europe },
            { data: oceania }
          ) => {
            // use/access the results
            dispatch({
              type: GET_ALL_COUNTRIES,
              payload: {
                africa,
                america,
                asia,
                europe,
                oceania,
              },
            });
          }
        )
      )
      .catch((error) => {
        console.error(error);
      });
  };

// export const decrement =
//   (count: ICounter) => (dispatch: ThunkDispatch<ICounter, void, AnyAction>) => {
//     dispatch({
//       type: DECREMENT,
//       payload: {
//         count,
//       },
//     });
//   };
