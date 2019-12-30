import { all, fork } from 'redux-saga/effects';
import queriesCepSaga from './queriesCep/saga';

export default function* root() {
    yield all([
        fork(queriesCepSaga)
    ])
};