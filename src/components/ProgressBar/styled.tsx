import styled, {keyframes} from 'styled-components';

import {common} from '../../styleds/common';

const pbKeyframes = keyframes`
    0%{
        transform: translateX(-50%) scaleX(0);
    }
    50%{
        transform: translateX(0) scaleX(.6);
    }
    100%{
        transform: translateX(150%) scaleX(0);
    }
`;

export const ProgressBar = styled.div`
    width:100%;
    height: 4px;
    overflow:hidden;
    position: absolute;
    bottom:0;
    left:0;
    /* background-color: ${common.colors.blue50}; */

    &:after {
        width: 100%;
        height:100%;
        background-color: ${common.colors.blue600};
        content:'';
        display:block;
        animation: ${pbKeyframes} ${(props:any) => (props.time ? props.time+'s' : '2s')} ease-in-out infinite;
    }
`;





export const Styled = {
    ProgressBar,   
}