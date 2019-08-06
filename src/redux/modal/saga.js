import { put, takeEvery } from 'redux-saga/effects';

import actions from './actions';

function* openModalRequestHandler({ payload }) {
  try {
    yield put(actions.openModalSuccess(payload));
  } catch (err) {
    yield put(actions.openModalFail(err));
  }
}

export default function* todoSagas() {
  yield takeEvery(actions.OPEN_MODAL_REQUEST, openModalRequestHandler);
}
