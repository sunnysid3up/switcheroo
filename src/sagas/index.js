import { takeLatest, call, put } from "redux-saga/effects";
import { searchPhoto } from "../api/index";
import { FETCH_IMAGES_CALLED } from "../redux/constants";
import { fetchImagesSuccess, fetchImagesFailure } from "../redux/actions";

export function* watcher() {
  yield takeLatest(FETCH_IMAGES_CALLED, worker);
}

function* worker() {
  try {
    const response = yield call(searchPhoto);
    const image = response.data.urls.regular;
    yield put(fetchImagesSuccess(image));
  } catch (error) {
    yield put(fetchImagesFailure(error));
  }
}
