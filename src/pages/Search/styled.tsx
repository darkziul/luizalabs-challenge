import styled from 'styled-components';

import {common} from '../../styleds/common';

const Container =  styled.div`
    ${common.container};
    margin-top: 40px;



    .transition-component-enter {
    opacity: 0.01;
    }

    .transition-component-enter.transition-component-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
    }

    .transition-component-leave {
    opacity: 1;
    }

    .transition-component-leave.transition-component-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
    }
`;

export const Styled = {
    Container,
};