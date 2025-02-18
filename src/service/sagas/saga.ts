import {all, fork} from 'redux-saga/effects';
import watchAuthActions from './authSaga';
function* rootSaga() {
    yield all([
        fork(watchAuthActions),
    ]);
}

export default rootSaga;
