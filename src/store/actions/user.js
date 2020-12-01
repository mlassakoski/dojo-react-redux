// @flow
import * as fromTypes from "../types/user";

export const createUser = (user: Object): fromType.UserAction => ({
  type: fromTypes.CREATE_USER,
  user,
});

export const createUserSuccess = (payload: Object): fromType.UserAction => ({
  type: fromTypes.CREATE_USER_SUCCESS,
  payload,
});

export const createUserError = (payload: Object): fromType.UserAction => ({
  type: fromTypes.CREATE_USER_ERROR,
  payload,
});
