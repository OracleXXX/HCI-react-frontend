import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {actionCreators} from "../store";
import {actionCreators as HeaderActionCreators} from "../../../common/header/store";

import {
    NewsFeedDetailWrapper,
    TitlePath
} from './style';
import * as constants from "../store/constants";

import {news_feed as newsFeedRouter} from '../../../router/router';

class NewsFeedDetail extends PureComponent {
    render() {
        return (
            <NewsFeedDetailWrapper>
                {this.getTitlePath()}

            </NewsFeedDetailWrapper>
        )
    }

    getTitlePath() {
        return (
            <TitlePath className="no-select">
                <Link to={newsFeedRouter.detail + this.props.match.params.id}>
                    <span className="title-path">{constants.STATIC.TITLE_PATH.CURR}</span>
                </Link>
                <Link to={newsFeedRouter.path}>
                    <span className="title-path">{constants.STATIC.TITLE_PATH.PREV_PATH}</span>
                </Link>
                <Link to={newsFeedRouter.detail + this.props.match.params.id}>
                    <span className="title-path-curr">{constants.STATIC.TITLE_PATH.CURR_PATH}</span>
                </Link>
            </TitlePath>
        )
    };

    componentDidMount() {
        this.props.hideShowBanner()
    }


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({
    hideShowBanner() {
        dispatch(HeaderActionCreators.changeShowBanner(false));
    },

});

export default connect(mapState, mapDispatch)(withRouter(NewsFeedDetail));