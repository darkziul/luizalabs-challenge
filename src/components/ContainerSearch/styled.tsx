import styled, {keyframes} from 'styled-components';

import {common} from '../../styleds/common';

export const Container = styled.div`
    position:relative;
    overflow: hidden;
    background-color:${common.colors.grey200};
    padding: ${common.padding.lg};
    border-radius: ${common.borderRadius.md};
`;

export const Label = styled.label`

`;

export const Input = styled.div`
    margin: 0 10px;
    input{
        border: 1px solid ${common.colors.grey300};
        border-radius: ${common.borderRadius.md};
        padding: ${common.input.padding.lg};
        height: ${common.input.height.lg};
        &:focus {
            border-color: ${common.colors.grey400};
        }
        &::placeholder {
            color: ${common.colors.grey400};
        }
    }
`;
export const Button = styled.button`
    color: ${common.colors.white};
    height: ${common.button.height.lg};
    padding: ${common.button.padding.lg};
    border-radius: ${common.borderRadius.md};
    background-color: ${common.colors.blue500};
    box-shadow: 0 2px 4px rgba(0,0,0,.15);

    transition: background-color .3s linear;

    &:active {
        background-color: ${common.colors.blue600};
        transition: background-color .3s linear;
        transform: translateY(1px);
    }
    &[disabled] {
        background-color: ${common.colors.grey300};
        color:${common.colors.grey400};
        box-shadow:none;
    }

    
`;

export const GroupInput = styled.div`
    display:flex;
    align-items:center;
`;

export const Title = styled.h3`
    font-size: ${common.font.title5};
    font-weight:700;
    margin-bottom:10px;
`;

export const TextError =  styled.span`
    display:block;
    font-size:12px;
    margin-top:5px;
    color:${common.colors.red500};
`;

export const Styled = {
    Container,
    Input,
    GroupInput,
    Title,
    Button,
    Label,
    TextError,
}