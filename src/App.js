import React, {Component} from "react";
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./common/header";


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

                    </div>
                </BrowserRouter>

            </Provider>

        )
    }

}

export default App;
