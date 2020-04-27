// @flow
import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { initialize } from "redux-form";
import * as fromTypes from "../types";
import * as fromActions from "../actions";

const BASE_API = "http://localhost:3001/api/user";
const headers = {
  Accept: "application/json, text/plain, */*",
  "Content-Type": "application/json",
};

export function* createUser({ user }) {
  try {
    const response = yield axios.post(BASE_API, user, {
      headers,
    });

    if (response.status === 200) {
      yield put(fromActions.createUserSuccess(response.data));
    }
  } catch (error) {
    console.error(error);
    yield put(fromActions.createUserError(error));
  }
}

export function* loadUser({ id }) {
  try {
    const response = yield axios.get(`${BASE_API}/${id}`, {
      headers,
    });

    if (response.status === 200) {
      yield put(initialize("userForm", response.data));
      yield put(fromActions.loadUserSuccess(response.data));
    }
  } catch (error) {
    console.error(error);
    yield put(fromActions.createUserError(error));
  }
}

export function* watchUser() {
  yield takeLatest(fromTypes.CREATE_USER, createUser);
  yield takeLatest(fromTypes.LOAD_USER, loadUser);
}
