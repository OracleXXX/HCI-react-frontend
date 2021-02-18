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
    DivLine,
    ArticleImage,
    ArticleContent,
    TitleItem
} from './style';
import * as constants from "../store/constants";

import {news_feed as newsFeedRouter} from '../../../router/router';
import {domain} from "../../../common/api/api";

class NewsFeedDetail extends PureComponent {
    constructor(props) {
        super(props);
        this.ScrollTo = React.createRef()   // Create a ref object
    }

    render() {

        return (
            <NewsFeedDetailWrapper ref={this.ScrollTo} className='scale-control'>
                <NewsFeedDetailContainer>
                    {this.getTitlePath()}
                    {this.getArticle()}
                    {this.getRefer()}
                </NewsFeedDetailContainer>


            </NewsFeedDetailWrapper>
        )
    }

    scrollToMyRef = () => window.scrollTo(0, 0)

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
                    <div className='desc-left'>
                        <div className='date'>
                            <img src={constants.IMAGES.DATE} alt=""/>
                            <span>{this.handleDateFormatChange(newFeedDetail.get("day"), newFeedDetail.get("year_and_month"))}</span>
                        </div>
                        <div className='views'>
                            <img src={constants.IMAGES.VIEWS} alt=""/>
                            <span>{newFeedDetail.get("views")}</span>
                        </div>
                    </div>
                    <div className='desc-right'>{this.getTags(newFeedDetail.get("tags"))}</div>
                </ArticleDescription>
                <DivLine/>
                <ArticleImage>
                    <img src={newFeedDetail.get("avatar") !== undefined ? domain + newFeedDetail.get("avatar") : ""}
                         alt=""/>
                </ArticleImage>
                <ArticleContent>
                    <div className='article-content'>{newFeedDetail.get("content")}</div>
                </ArticleContent>
            </ArticleContainer>
        )
    };
    handleDateFormatChange(day, year_and_month) {
        if (day === undefined || year_and_month === undefined){ return "";}
        return year_and_month.split("/").join("-") + "-" + day;

    }
    getTags(tags) {
        if (tags === undefined) {
            return
        }
        let tagsDemoList = [];
        const tagList = constants.STATIC.TAGS;
        let str = tags.toString().split("").reverse();
        for (let i = 0; i < str.length; i++) {
            str[i] === "1" ?
                tagsDemoList.push(
                    <span key={i}>
                        {tagList[str.length - i - 1]}
                    </span>
                )
                : console.log("")
        }
        return tagsDemoList;
    }
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
            <TitleItem key={index}>
                <div>{title}</div>
                <div>{views}</div>
            </TitleItem>
        )
    }

    getQRCode() {
        return (
            <QRContainer>
                <div className='qr-title'>{constants.STATIC.QR.TITLE}</div>
                <img src={constants.STATIC.QR.IMG} alt=""/>
                <div className='qr-detail'>{constants.STATIC.QR.DETAIL}</div>

            </QRContainer>
        )
    };


    componentDidMount() {
        const {id} = this.props.match.params;
        this.scrollToMyRef();
        this.props.hideShowBanner()
        this.props.getDetailList(id, this.props.newsFeedDetail)
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
    getDetailList(id, newFeedDetail) {
        if (newFeedDetail == null) {
            dispatch(actionCreators.getDetailList(id));
        }
    }

});

export default connect(mapState, mapDispatch)(withRouter(NewsFeedDetail));