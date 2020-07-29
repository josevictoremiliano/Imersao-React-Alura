import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import home from './componentes/pages/home';
import cadastroVideo from './componentes/pages/cadastro/video'
import erro404 from './componentes/pages/erro404'


import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={home} exact/>
      <Route path="/cadastro/video" component={cadastroVideo}/>
      <Route component={erro404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);