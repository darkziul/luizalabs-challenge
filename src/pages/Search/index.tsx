import React from 'react';
import {connect} from 'react-redux';

import {Reducers} from '../../stores/reducers';
import {Result} from '../../stores/queriesCep';

import ContainerSearch from '../../components/ContainerSearch';
import ContainerResult from '../../components/ContainerResult';

import {Styled} from './styled';

const PageSearch = (state:Result) => {
    
    const {data} = state;

    return(
        <Styled.Container>
            <ContainerSearch/>
            {(data && !state.error) && <ContainerResult/>}
        </Styled.Container>
    );
};



const mapStateToProps = (state:Reducers) => state.queriesCep;

export default connect(mapStateToProps)(PageSearch);