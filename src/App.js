import React, {Component} from "react";
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./common/header";

import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Write from "./pages/write";
import HomePage from "./pages/homePage";
import store from "./store";
import GlobalStyle from './style';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <GlobalStyle/>
                <BrowserRouter>
                    <Header/>
                    <div>
                        <Route path='/' exact component={HomePage}/>
                        <Route path='/home' exact component={Home}/>
                        <Route path='/detail/:id' exact component={Detail}/>
                        <Route path='/login' exact component={Login}/>
                        <Route path='/write' exact component={Write}/>
                    </div>
                </BrowserRouter>

            </Provider>

        )
    }

}

export default App;
