import React, { useState } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {ViaCep} from '../../stores/queriesCep';
import {Result, removeData} from '../../stores/queriesCep';
import {Reducers} from '../../stores/reducers';

import {Styled} from './styled';
import { MdClose } from 'react-icons/md';
import ProgressBar from '../ProgressBar';

type State = {
    removeData:Function;
} & Result;

const ContainerResult = (state:State) => {
    
    const data:ViaCep = state.data;

    const  [loaded,setLoaded] = useState(false);

    const handlerOnLoad = ()=>{
        setLoaded(true);
    };

    return(
        


        <Styled.Container>
            <Styled.Title>{data.logradouro}</Styled.Title>
            <Styled.Text>{data.bairro}</Styled.Text>
            <Styled.Text>{data.localidade} - {data.uf}</Styled.Text>
            <Styled.Text>{data.cep}</Styled.Text>
            <Styled.Button type='button' onClick={()=>state.removeData()}><MdClose size={24}/></Styled.Button>
            <Styled.Iframe loaded={loaded} src={data.mapa} onLoad={handlerOnLoad}></Styled.Iframe>
            {!loaded && <ProgressBar />}
        </Styled.Container>

    
    );
};


const mapStateToProps = (state:Reducers) => state.queriesCep;
const mapDispatchToProps = (dispatch:any) => bindActionCreators({removeData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContainerResult);