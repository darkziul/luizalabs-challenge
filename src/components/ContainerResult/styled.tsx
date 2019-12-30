import styled from 'styled-components';

import {common} from '../../styleds/common';

type IframeCustomProps = {
    loaded?:boolean;
};


export const Container = styled.div`
    position:relative;
    border: 1px solid ${common.colors.grey200};    
    background-color:${common.colors.white};
    padding: ${common.padding.lg};
    border-radius: ${common.borderRadius.md};
    margin-top: ${common.padding.lg};

`;
export const Button = styled.button`
    position:absolute;
    line-height:0;
    right: ${common.padding.lg};
    top: ${common.padding.lg};
    padding: 2px;
    transform: translate(2px,-2px);
    border-radius: ${common.borderRadius.md};
    background-color:transparent;

    &:hover {
        background-color: ${common.colors.grey100};
    }
`;
export const Text = styled.p`
    line-height: 1.4;
    padding-right:40px;
`;
export const Title = styled.h2`
    font-size: ${common.font.title3};
    font-weight:700;
    margin-bottom:10px;
    padding-right:40px;
`;

export const Iframe = styled.iframe<IframeCustomProps>`
    display:block;
    margin-top:10px;
    width: 100%;
    height: ${(props:any)=> (props.loaded ? '260px':'0px')};

`;


export const Styled = {
    Container,
    Button,
    Text,
    Title,
    Iframe,
}