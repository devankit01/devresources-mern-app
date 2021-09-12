
import {
    RESOURCE_LIST_REQUEST,
    RESOURCE_LIST_SUCCESS,
    RESOURCE_LIST_FAIL,

  } from "../constants/resourceConstants";



export const resourceReducer = (state = {}, action) => {
    switch (action.type) {
      case RESOURCE_LIST_REQUEST:
        return { loading: true };
      case RESOURCE_LIST_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case RESOURCE_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
