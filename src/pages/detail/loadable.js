/**
 * Created by Administrator on 2018/12/13 0013.
 */
import React from 'react';
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';

// const LoadableComponent = Loadable({
//     loader: () => import('./index'),
//     loading() {
//         return <div>正在加载...</div>
//     }
// });
const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading() {
    return <div>正在加载...</div>
}
});

export default () => <LoadableComponent />