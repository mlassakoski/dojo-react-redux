// @flow
export const CREATE_USER = "[USER] Create user";
export const CREATE_USER_SUCCESS = "[USER] Create user success";
export const CREATE_USER_ERROR = "[USER] Create user error";

type CreateUser = {
  type: typeof CREATE_USER,
  user: Object,
};

type CreateUserSuccess = {
  type: typeof CREATE_USER_SUCCESS,
  payload: Object,
};

type CreateUserError = {
  type: typeof CREATE_USER_ERROR,
  payload: Object,
};

export type UserAction = CreateUser | CreateUserSuccess | CreateUserError;
