// @flow
import * as fromTypes from "../types/user";

export const createUser = (user: Object): fromTypes.UserAction => ({
  type: fromTypes.CREATE_USER,
  user,
});

export const createUserSuccess = (payload: Object): fromTypes.UserAction => ({
  type: fromTypes.CREATE_USER_SUCCESS,
  payload,
});

export const createUserError = (payload: Object): fromTypes.UserAction => ({
  type: fromTypes.CREATE_USER_ERROR,
  payload,
});

export const loadUser = (id: number): fromTypes.UserAction => ({
  type: fromTypes.LOAD_USER,
  id,
});

export const loadUserSuccess = (payload: Object): fromTypes.UserAction => ({
  type: fromTypes.LOAD_USER_SUCCESS,
  payload,
});

export const loadUserError = (payload: Object): fromTypes.UserAction => ({
  type: fromTypes.LOAD_USER_ERROR,
  payload,
});
