import React, {Component} from "react";
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom';

/*common part*/
import Header from "./common/header";
import Footer from "./common/footer";

/*home page*/
import HomePage from "./pages/homePage/loadable";

/* children page */
import NewProject from "./pages/newProject/loadable";
import NewProjectDetail from "./pages/newProject/detail/loadable";
import PlatformLoan from "./pages/platformLoan/loadable";
import ClosedProject from "./pages/cLosedProject/loadable";
import NewsFeed from "./pages/newsFeed/loadable";
import NewsFeedDetail from "./pages/newsFeed/detail/loadable";
import ContactUs from "./pages/contactUs/loadable";
import Management from "./pages/oneStepService/management/loadable";
import LongShort from "./pages/oneStepService/longShort/loadable";
import Activity from "./pages/oneStepService/activities/loadable";
import OurTeam from "./pages/ourTeam/loadable";
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
                        <Route path='/new-project' exact component={NewProject}/>
                        <Route path='/new-project/detail/:id' exact component={NewProjectDetail}/>
                        <Route path='/one-step/management' exact component={Management}/>
                        <Route path='/one-step/long-short' exact component={LongShort}/>
                        <Route path='/one-step/activities' exact component={Activity}/>
                        <Route path='/platform-loan' exact component={PlatformLoan}/>
                        <Route path='/closed-project' exact component={ClosedProject}/>
                        <Route path='/our-team' exact component={OurTeam}/>
                        <Route path='/news' exact component={NewsFeed}/>
                        <Route path='/news/detail/:id' exact component={NewsFeedDetail}/>
                        <Route path='/contact-us' exact component={ContactUs}/>

                    </div>
                    <Footer/>

                </BrowserRouter>

            </Provider>

        )
    }

}

export default App;
