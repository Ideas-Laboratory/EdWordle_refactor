import React, { Component } from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
    return <div>Loading...</div>
  },
});

export default class App extends Component {
  render() {
    return <LoadableComponent/>;
  }
};