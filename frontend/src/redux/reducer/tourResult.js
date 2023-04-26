import { GET_TOUR_RESULT_SUCCESS, GET_TOUR_RESULT_FAIL } from "../types";

export default function (state = {}, action) {
  const { type } = action;
  switch (type) {
    case GET_TOUR_RESULT_SUCCESS:
      return {
        ...state,
        ...action,
      };
    case GET_TOUR_RESULT_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
