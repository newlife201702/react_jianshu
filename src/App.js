import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import './style';
import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Header />
                        {/*直接写标签*/}
                        {/*<Route path="/" exact render={<div>home</div>}></Route>*/}
                        {/*使用组件*/}
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/login" exact component={Login}></Route>
                        <Route path="/write" exact component={Write}></Route>
                        <Route path="/detail/:id" exact component={Detail}></Route>
                    </div>

                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
