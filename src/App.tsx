import React from 'react';
// import {BrowserRouter, Switch, Route} from 'react-router-dom';//ideia de usar rota /:id, mas não deu tempo

import {Styled} from './AppStyled';

import PageSearch from './pages/Search';

const App = () => {
  return (
    <Styled.Container>
      <PageSearch/>
    </Styled.Container>
  );
}

export default App;
