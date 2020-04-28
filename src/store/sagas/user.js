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

export function* watchUser() {}
