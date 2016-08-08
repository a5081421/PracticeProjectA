import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import BoardView from './components/boards_view';
import Board from './components/board';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BoardView} />
    <Route path="b/:id" component={Board} />
  </Route>
);
