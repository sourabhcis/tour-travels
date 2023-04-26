import {
  GET_TOUR_SUCCESS,
  GET_TOUR_FAIL,
  GET_TOUR_DETAIL_SUCCESS,
  GET_TOUR_DETAIL_FAIL,
  GET_TOUR_RESULT_FAIL,
  GET_TOUR_RESULT_SUCCESS,
  CREATE_REVIEW_SUCCESS,
  CREATE_REVIEW_FAIL,
} from "../types";
import axios from "axios";
import { BASE_URL } from "../../config/config";
import { apis } from "../../config/api";

export const getTour = () => async (dispatch) => {
  try {
    const res = await axios.get(BASE_URL + apis.get_tour);
    dispatch({
      type: GET_TOUR_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TOUR_FAIL,
      payload: error.response,
    });
  }
};

export const getTourDetail = (tourId) => async (dispatch) => {
  try {
    const res = await axios.get(BASE_URL + apis.get_tour + `/${tourId}`);
    dispatch({
      type: GET_TOUR_DETAIL_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TOUR_DETAIL_FAIL,
      payload: error.response,
    });
  }
};

export const getTourResult = (data) => async (dispatch) => {
  try {
    const res = await axios.get(BASE_URL + apis.get_tour_result + data);
    dispatch({
      type: GET_TOUR_RESULT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TOUR_RESULT_FAIL,
      payload: error.response,
    });
  }
};

export const createReview = (id, data) => async (dispatch) => {
  try {
    const res = await axios.post(BASE_URL + apis.add_review + `/${id}`,data)
    dispatch({
      type: CREATE_REVIEW_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_REVIEW_FAIL,
      payload: error.response,
    });
  }
};
