import './style.css';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import AlbumList from './AlbumList';
import ImageList from './ImageList';

render((
  <Router history={hashHistory}>
    <Route path="/" component={AlbumList} />
    <Route path="albums/:albumName" component={ImageList}/>
  </Router>
), document.getElementById('content'));
