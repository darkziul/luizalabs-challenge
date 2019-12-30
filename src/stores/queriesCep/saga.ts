import { takeLatest, put, call } from 'redux-saga/effects';

import axios, {AxiosResponse} from 'axios';

import {TYPES, Action, ViaCep} from './index';


const Fetch  = axios.create({
    timeout: 3000
})

const getUrl = (c:string):string => `https://viacep.com.br/ws/${c}/json`;
const getUrlGoogleMap = (query:string, zoom:number=17):string => `https://maps.google.com/maps?q=${encodeURI(query)}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

/**
 * Buscar conteúdo do CEP
 *
 * @param {string} cep
 * @returns
 */
function search(cep:string){
    return Fetch.get(getUrl(cep));
}

function* request(action:Action) {
    try {
        const response:AxiosResponse = yield call(search, action.payload);
        if(response.status !== 200) throw new Error(`Erro - ${response.statusText}`);
    
        let data:ViaCep = response.data;

        if(data.erro) throw new Error('CEP não existe ou não foi possível encontrar.');
        data.mapa  = getUrlGoogleMap(`${data.logradouro} - ${data.bairro}, ${data.localidade} - ${data.uf}, ${data.cep}`);

        yield put<Action>({
            type: TYPES.SUCCESS,
            payload: data
        });
    }catch(err) {
        yield put<Action>({
            type: TYPES.FAILURE,
            payload: err.message
        });
    }

    
    
}

export default function*(){
    yield takeLatest(
        TYPES.REQUEST,
        request
    );
}