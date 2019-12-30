import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './stores';

import {ResetCSS} from './globalStyled';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
        <ResetCSS/>
    </Provider>
    , document.getElementById('root'));