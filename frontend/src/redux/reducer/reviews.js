import { CREATE_REVIEW_SUCCESS, CREATE_REVIEW_FAIL } from "../types";

export default function (state = {}, action) {
  const { type } = action;
  switch (type) {
    case CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        ...action,
      };
    case CREATE_REVIEW_FAIL:
      return {
        ...state,
        ...action,
      };
    default:
      return state;
  }
}
