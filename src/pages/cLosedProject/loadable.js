import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading() {
        return <div className="loading">正在加载</div>

    }
});

// eslint-disable-next-line import/no-anonymous-default-export
export default () => <LoadableComponent/>


/* 官方模板
import Loadable from 'react-loadable';
import Loading from './my-loading-component';

const LoadableComponent = Loadable({
  loader: () => import('./my-component'),
  loading: Loading,
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}
*/








