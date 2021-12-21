import axios from "axios";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { apiAll } from "../../api/countries";
import { GET_ALL_COUNTRIES } from "../reducers/ActionTypes";
import { RootState } from "../store";

export const getAllCountries =
  () => async (dispatch: ThunkDispatch<any, RootState, AnyAction>) => {
    const res = await axios.get(apiAll);
    const data = await res.data;

    dispatch({
      type: GET_ALL_COUNTRIES,
      payload: {
        data,
      },
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
