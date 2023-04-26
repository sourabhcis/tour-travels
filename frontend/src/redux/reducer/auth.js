import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  GET_AUTH_USER_SUCCESS,
  GET_AUTH_USER_FAIL,
} from "../types";


const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  errors: [],
  type: null,
  user: [], //Not sure why this works and not null
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        type: type,
        user: payload,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        ...payload,
        isAuthenticated: false,
        loading: false,
        errors: payload,
        type: type,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        ...payload,
        isAuthenticated: false,
        loading: false,
        errors: payload,
        type: type,
      };
      case GET_AUTH_USER_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload,
        }
    default:
      return state;
  }
}
