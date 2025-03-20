import axios from "axios";
import {
  USER_LIST_FAILURE,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
} from "../constants/Users";

export const userDetails = () => async (dispatch: any) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });
    const response = await axios.get(
      "https://domo-business-catalog-backend.onrender.com/users",
    );
    const data = response.data;
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
        type: USER_LIST_FAILURE,
        payload: error,
      });
  }
};
