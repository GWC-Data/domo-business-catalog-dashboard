import {
  USER_LIST_FAILURE,
  USER_LIST_SUCCESS,
  USER_LIST_REQUEST,
} from "../constants/Users";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return {
        loading: true,
      };

    case USER_LIST_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };

    case USER_LIST_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
        return state;
  }
};
