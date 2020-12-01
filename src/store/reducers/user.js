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
    case fromTypes.CREATE_USER: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromTypes.CREATE_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    }
    case fromTypes.CREATE_USER_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
