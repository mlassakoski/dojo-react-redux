// @flow
import * as fromTypes from "../types/user";

type State = {
  user: Object,
  loading: boolean,
};

export const initialState = {
  user: {},
  loading: false,
};

const reducer = (state: State = initialState, action: fromTypes.UserAction) => {
  switch (action.type) {
    case fromTypes.CREATE_USER:
    case fromTypes.LOAD_USER:
      return {
        ...state,
        loading: true,
      };
    case fromTypes.CREATE_USER_SUCCESS:
    case fromTypes.LOAD_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case fromTypes.CREATE_USER_ERROR:
    case fromTypes.LOAD_USER_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
