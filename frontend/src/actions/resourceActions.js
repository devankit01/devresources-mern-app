import {
  // NOTES_CREATE_FAIL,
  // NOTES_CREATE_REQUEST,
  // NOTES_CREATE_SUCCESS,
  // NOTES_DELETE_FAIL,
  // NOTES_DELETE_REQUEST,
  // NOTES_DELETE_SUCCESS,
  RESOURCE_LIST_FAIL,
  RESOURCE_LIST_REQUEST,
  RESOURCE_LIST_SUCCESS,
  // NOTES_UPDATE_FAIL,
  // NOTES_UPDATE_REQUEST,
  // NOTES_UPDATE_SUCCESS,
} from "../constants/resourceConstants";

import axios from "axios";

export const listresources = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: RESOURCE_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/resources`, config);

    dispatch({
      type: RESOURCE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: RESOURCE_LIST_FAIL,
      payload: message,
    });
  }
};
