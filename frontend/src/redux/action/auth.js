import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  GET_AUTH_USER_SUCCESS,
  GET_AUTH_USER_FAIL,
} from "../types";
import axios from "axios";
import { BASE_URL } from "../../config/config";
import { apis } from "../../config/api";

export const login = (data) => async (dispatch) => {
  try {
    const res = await axios.post(BASE_URL + apis.login, data);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response,
    });
  }
};

export const register = (data) => async (dispatch) => {
  try {
    const res = await axios.post(BASE_URL + apis.register, data);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response,
    });
  }
};

export const getAuthUser = (id) => async (dispatch) => {
  const obj = {
    id: id
  }
  try {
    const res = await axios.post(BASE_URL + apis.get_auth_user, obj);
    dispatch({
      type: GET_AUTH_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_AUTH_USER_FAIL,
    });
  }
};
