// @flow
import * as fromTypes from "../types/user";

type State = {};

export const initialState = {};

const reducer = (state: State = initialState, action: fromTypes.UserAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
