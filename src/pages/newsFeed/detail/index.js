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
    PopularArticleTitle,
    QRContainer,

    ArticleTitle,
    ArticleDescription,
    DivLine,
    ArticleImage,
    ArticleContent,
    TitleItem,
    TopItem,
    Dot
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
                            <span>{this.handleDateFormatChange(newFeedDetail.get("day"), newFeedDetail.get("yearAndMonth"))}</span>
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
                    <img src={newFeedDetail.get("imgUrl") !== undefined ? newFeedDetail.get("imgUrl") : ""}
                         alt=""/>
                </ArticleImage>
                <ArticleContent>
                    <div className='article-content' dangerouslySetInnerHTML={{ __html: newFeedDetail.get("content")}}/>
                </ArticleContent>
            </ArticleContainer>
        )
    };

    handleDateFormatChange(day, year_and_month) {
        if (day === undefined || year_and_month === undefined) {
            return "";
        }
        return year_and_month.split("/").join("-") + "-" + day;

    }

    getTags(tags) {
        if (tags === undefined) {
            return
        }
        const res = [];
        tags.map((item, index) => {
            res.push(<span key={index} className={'tag'}> {item.get("name")}</span>)
        })
        return res
    }

    getRefer() {
        const {popularArticleTitles} = this.props;
        return (
            <ReferContainer>
                <PopularArticles>
                    <PopularArticleTitle>
                        <img src={constants.IMAGES.FIRE} alt=""/>
                        <span>{constants.STATIC.REFER.TITLE}</span>

                    </PopularArticleTitle>
{/*                    {
                        popularArticleTitles.map((item, index) => {
                            if (index === 7) {
                                return null
                            }
                            return (
                                this.getReferContent(
                                    item.get(0),
                                    item.get(1),
                                    item.get(2),
                                    item.get(3),
                                    item.get(4),
                                    item.get(5),
                                    index)
                            )
                        })
                    }*/}


                </PopularArticles>
                {this.getQRCode()}
            </ReferContainer>
        )
    };

    getReferContent(id, title, views, avatar, day, month_and_year, index) {
        if (index === 0) {
            return (
                <TitleItem key={index}>
                    <DivLine/>
                    <TopItem>
                        <img src={domain + avatar} alt=""/>
                        <div className='top-item-bottom'><span>{title}</span></div>
                    </TopItem>


                </TitleItem>
            )
        }
        return (
            <TitleItem key={index}>
                <DivLine/>
                <div className='refer-title'><Dot/>{title}</div>
                <div className='refer-description'>
                    <div className='refer-date'>{this.handleDateFormatChange(day, month_and_year)}</div>
                    <div className='refer-views'>
                        <img src={constants.IMAGES.VIEWS} alt=""/>
                        <span>{views}</span>
                    </div>
                </div>
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