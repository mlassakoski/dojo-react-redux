import { all } from "redux-saga/effects";
import { watchUser } from "./user";

export default function* rootSaga() {
  yield all([watchUser()]);
}
