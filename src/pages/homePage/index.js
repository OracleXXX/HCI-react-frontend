import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import NewProjectDemo from "./components/NewProjectDemo";
import WeOffer from "./components/WeOffer";
import InvestmtFLowChart from "./components/InvestmtFLowChart";
import NewsFeed from "./components/NewsFeed";
import {HomePageWrapper} from "./style";
import {actionCreators as NewProjectActionCreator} from '../newProject/store';
import {actionCreators as NewsFeedActionCreator} from '../newsFeed/store';
import {actionCreators as HeaderActionCreators} from "../../common/header/store";

/*cpc tigersniffsrose*/
class homePage extends PureComponent {

    scrollToTop = () => window.scrollTo(0, 0)


    render() {
        return (
            <HomePageWrapper>
                <WeOffer/>
                <NewProjectDemo/>
                <InvestmtFLowChart/>
                <NewsFeed/>
            </HomePageWrapper>

        )
    }

    componentDidMount() {
        this.props.hideShowBanner()
        this.props.changeHomePageData();
        this.scrollToTop()
    }


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({
    changeHomePageData() {
        dispatch(NewProjectActionCreator.getNewProject());
        dispatch(NewsFeedActionCreator.getNewsFeed());
    },
    hideShowBanner() {
        dispatch(HeaderActionCreators.changeShowBanner(true));
    },

})

export default connect(mapState, mapDispatch)(withRouter(homePage));


