import React, { useState, useRef, useMemo } from 'react';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import InputMask  from 'react-input-mask';

import {searchCep,removeData, Result} from '../../stores/queriesCep';
import {Reducers} from '../../stores/reducers';

import {Styled} from './styled';
import ProgressBar from '../ProgressBar';

type State = {
    searchCep(cep:string):void;
    removeData():void;
} & Result;

const ContainerSearch = (state:State) => {
    const {removeData, searchCep} = state;

    const charSep = '-';//caracter separador
    const mask:string = `99999${charSep}999`; //ou [/d/,/d/,/d/,/d/,/d/,charSep,/d/,/d/,/d/]
    const maskCount:number =  mask.length;

    //referente : https://www.codebeast.dev/usestate-vs-useref-re-render-or-not/
    const {current: idInput} = useRef('_'+ Math.random().toString(36).slice(-4));

    const [disabled, setDisabled] = useState<boolean>(true);
    const [clickedButton, setClickedButton] = useState<boolean>(false);
    const [cep, setCep] = useState<string>(state.data?.cep || '');
    const [error, setError] = useState<string|boolean>(false);

    useMemo(()=>{
        setError(state.error);
        state.error && removeData();
    }, [state.error, removeData]);

    useMemo(()=>{
        setCep(state.data?.cep||'');
    }, [state.data]);

    useMemo(()=>{
        setDisabled(cep.length !== maskCount);
    }, [cep, maskCount]);

    const verify = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setCep(value);
        setClickedButton(false);
        setError(false);
    };

    //fazer a consulta
    const search = () => {
        if(!clickedButton) {
            searchCep(cep.replace(charSep,''));
            setClickedButton(true);//evitar re-consulta
        }
    };
    const handlerOnKeyEnter = (e:any) => e.keyCode===13&&!disabled && search();

    return(
        <Styled.Container>
            <Styled.Title>Consulta</Styled.Title>
            <Styled.GroupInput>
                <Styled.Label htmlFor={idInput}>CEP</Styled.Label>
                <Styled.Input>
                    <InputMask 
                        id={idInput}
                        mask={mask} 
                        maskChar={null}
                        onChange={verify}
                        onKeyDown={handlerOnKeyEnter}
                        value={cep}
                        placeholder='02051-000'
                    />
                </Styled.Input>
                <Styled.Button type='button' disabled={disabled} onClick={search}>
                    Buscar
                </Styled.Button>
            </Styled.GroupInput>
            
            {error && <Styled.TextError>{error}</Styled.TextError>}
            {state.loading && <ProgressBar/>}
        </Styled.Container>
    );
};


const mapStateToProps = (state:Reducers) => state.queriesCep;

const mapDispatchToProps = (dispatch:any) => bindActionCreators({searchCep,removeData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContainerSearch);