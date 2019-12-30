import {combineReducers} from 'redux';

import queriesCepReducer, {Result} from './queriesCep';

export default combineReducers<Reducers>({
    queriesCep : queriesCepReducer
});


//@types
export type Reducers = {
    queriesCep:Result;
};