import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewProjectDemo from "./components/NewProjectDemo";
import WeOffer from "./components/WeOffer";
import InvestmtFLowChart from "./components/InvestmtFLowChart";
import NewsFeed from "./components/NewsFeed";
import {HomePageWrapper} from "./style";
import {actionCreators} from './store';


class homePage extends PureComponent {

    render() {
        const {} = this.props;
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

    },

})

export default connect(mapState, mapDispatch)(withRouter(homePage));


