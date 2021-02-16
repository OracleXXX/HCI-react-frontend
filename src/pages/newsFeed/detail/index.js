import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {actionCreators} from "../store";
import {actionCreators as HeaderActionCreators} from "../../../common/header/store";
import {
    NewsFeedDetailWrapper,
    NewsFeedDetailContainer,
    TitlePath,
    ArticleContainer,
    ReferContainer,
    PopularArticles,
    QRContainer,

    ArticleTitle,
    ArticleDescription,
    ArticleImage,
    ArticleContent,
    TitleItem
} from './style';
import * as constants from "../store/constants";

import {news_feed as newsFeedRouter} from '../../../router/router';
import {domain} from "../../../common/api/api";

class NewsFeedDetail extends PureComponent {
    render() {
        return (
            <NewsFeedDetailWrapper>
                <NewsFeedDetailContainer>
                    {this.getTitlePath()}
                    {this.getArticle()}
                    {this.getRefer()}
                </NewsFeedDetailContainer>


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

    getArticle() {
        const {newFeedDetail} = this.props;
        return (
            <ArticleContainer>
                <ArticleTitle>
                    {newFeedDetail.get("title")}
                </ArticleTitle>
                <ArticleDescription>
                    <div>{newFeedDetail.get("year_and_month")}</div>
                    <div>{newFeedDetail.get("day")}</div>
                    <div>{newFeedDetail.get("views")}</div>
                    <div>{newFeedDetail.get("tags")}</div>
                </ArticleDescription>
                <ArticleImage>
                    <img src={domain + newFeedDetail.get("avatar")} alt=""/>
                </ArticleImage>
                <ArticleContent>
                    <div>{newFeedDetail.get("content")}</div>
                </ArticleContent>
            </ArticleContainer>
        )
    };

    getRefer() {
        return (
            <ReferContainer>
                <PopularArticles>
                    {
                    this.props.popularArticleTitles.map((item, index) => {
                        return (

                            this.getReferContent(item.get(0), item.get(1), index)
                        )
                    })
                }

                </PopularArticles>

                {this.getQRCode()}
            </ReferContainer>
        )
    };
    getReferContent(title, views, index) {
        return (
            <TitleItem key = {index}>
                <div>{title}</div>
                <div>{views}</div>
            </TitleItem>
        )
    }

    getQRCode() {
        return (
            <QRContainer>
                <div className='qr-title'>{constants.QR.TITLE}</div>
                <img src={constants.QR.IMG} alt=""/>
                <div className='qr-detail'>{constants.QR.DETAIL}</div>

            </QRContainer>
        )
    };


    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.hideShowBanner()
        this.props.getDetailList(id)
    }


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({
    newFeedDetail: state.getIn(["newsFeed", "detailList"]),
    popularArticleTitles: state.getIn(["newsFeed", "popularArticleTitles"])
});
const mapDispatch = (dispatch) => ({
    hideShowBanner() {
        dispatch(HeaderActionCreators.changeShowBanner(false));
    },
    getDetailList(id) {
        dispatch(actionCreators.getDetailList(id));

    }

});

export default connect(mapState, mapDispatch)(withRouter(NewsFeedDetail));