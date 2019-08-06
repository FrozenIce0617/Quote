import { all } from 'redux-saga/effects';
import todoSagas from './todo/saga';
import modalSagas from './modal/saga';

export default function* rootSaga() {
  yield all([todoSagas(), modalSagas()]);
}
