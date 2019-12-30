import {css} from 'styled-components';

const container = css`
    width:100%;
    max-width:520px;
    position:relative;
`;

const padding = {
    sm: '10px',
    md: '15px',
    lg: '20px',
};
const borderRadius = {
    sm: '2px',
    md: '4px',
    lg: '6px',
}

const input = {
    height: {
        lg: '36px',
    },
    padding: {
        lg: '5px 8px',
    }
}

const button = {
    height: {
        lg: '36px',
    },
    padding: {
        lg: ' 0 14px',
    }
}

//ref https://material-ui.com/pt/customization/color/
const colors = {
    grey100: '#f5f5f5',
    grey200: '#eee',
    grey300: '#e0e0e0',
    grey400: '#bdbdbd',
    grey800: '#424242',
    grey900: '#212121',

    blue50: '#e3f2fd',
    blue500: '#2196f3',
    blue600: '#1e88e5',

    red500: '#ef5350',

    white: '#fff',
};

const font = {
    title1: '36px',
    title2: '32px',
    title3: '28px',
    title4: '24px',
    title5: '20px',
    title6: '16px',
};

export const common =  {
    container,
    colors,
    padding,
    borderRadius,
    input,
    button,
    font,
};