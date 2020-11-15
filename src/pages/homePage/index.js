import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewProjectDemo from "./components/NewProjectDemo";
import WeOffer from "./components/WeOffer";
import InvestmtFLowChart from "./components/InvestmtFLowChart";
import NewsFeed from "./components/NewsFeed";
import {HomePageWrapper} from "./style";
import {actionCreators} from './store';
import {actionCreators as NewProjectActionCreator} from '../newProject/store';
import {actionCreators as NewsFeedActionCreator} from '../newsFeed/store';

/*cpc tigersniffsrose*/
class homePage extends PureComponent {

    render() {
        return (
            <HomePageWrapper>
                <WeOffer />
                <NewProjectDemo />
                <InvestmtFLowChart />
                <NewsFeed />
            </HomePageWrapper>

        )
    }
    componentDidMount() {
        this.props.changeHomePageData();
    }


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({


});
const mapDispatch = (dispatch) => ({
    changeHomePageData() {
        dispatch(actionCreators.getHomePageInfo());
        dispatch(NewProjectActionCreator.getNewProject());
        dispatch(NewsFeedActionCreator.getNewsFeed());
    },

})

export default connect(mapState, mapDispatch)(withRouter(homePage));


