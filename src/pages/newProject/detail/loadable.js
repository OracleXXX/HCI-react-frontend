import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./newProjectDetail'),
  loading() {
      return <div>正在加载</div>

  }
});

// eslint-disable-next-line import/no-anonymous-default-export
export default () =><LoadableComponent />









