import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {actionCreators} from './store';
import {
    Data,
    NewsFeedTitle,
    Tag,
} from "../homePage/componentStyles/NewFeedStyle";
import {
    NewsFeedWrapper,
    NewsFeedContainer,
    PopularArticleContainer,
    PopularArticleItem,
    ArticleItemBottom,
    RestArticleContainer,
    ArticleItem,
    ArticleItemLeft,
    ArticleItemRight,
    ArticleItemRightTop,
    ArticleItemRightBottom,
    ReadMore,
    Arrow

} from './style'
import {DivLine, Pagination} from "../oneStepService/activities/style";
import {actionCreators as HeaderActionCreators} from "../../common/header/store";
import {news_feed as newFeedRouter} from "../../router/router";
import {domain, news_feed as newsFeedApi} from "../../common/api/api";

const popularList = []
const demoList = [];

class NewsFeed extends PureComponent {
    constructor(props) {
        super(props)
        this.ScrollTo = React.createRef()   // Create a ref object
    }

    scrollToMyRef = () => window.scrollTo(0, this.ScrollTo.current.offsetTop - 100)

    //渲染
    render() {
        const {page, totalPage} = this.props;
        this.getArticleItems()
        return (
            <NewsFeedWrapper ref={this.ScrollTo} className='scale-control'>

                <NewsFeedTitle>
                    <span className='title'>新闻咨询</span>
                    <div className='rec'/>
                </NewsFeedTitle>

                <NewsFeedContainer>
                    {
                        page === 1
                            ? <PopularArticleContainer>
                                {this.getPopularArticleContainer()}
                            </PopularArticleContainer>
                            : null
                    }
                    <RestArticleContainer>
                        {this.getRestArticleContainer(page)}
                    </RestArticleContainer>
                </NewsFeedContainer>

                <Pagination>
                    {this.getPagination(totalPage)}
                </Pagination>

            </NewsFeedWrapper>
        )
    }

    getArticleItems() {
        const {newsFeedList} = this.props;
        let count = -1;

        if (demoList.length > 0) {
            return
        }
        newsFeedList.map((item) => {
            count += 1;
            /*置顶文章*/
            count < 3 && popularList.push(
                <Link to={newFeedRouter.detail + item.get("id")} key={item.get("id")}>
                    <PopularArticleItem className={count ? "article-item-right" : "article-item-left"}>
                        {this.getArticleData(item.get("day"), item.get("year_and_month"))}
                        <img src={domain + item.get("avatar")} alt="" className="popular-img"/>
                        <ArticleItemBottom
                            className={count ? "popular-article-title-right" : "popular-article-title-left"}>{item.get("title")}</ArticleItemBottom>
                    </PopularArticleItem>
                </Link>
            );

            /* 剩余文章 */
            count >= 3 && demoList.push(
                <Fragment key={item.get("id")}>
                    <ArticleItem>
                        <ArticleItemLeft>
                            {this.getArticleData(item.get("day"), item.get("year_and_month"))}
                            <Link to={newFeedRouter.detail + item.get("id")}><img src={domain + item.get("avatar")}
                                                                                  alt=""
                                                                                  className="item-left-img no-select"/></Link>
                        </ArticleItemLeft>
                        <ArticleItemRight>
                            <ArticleItemRightTop>
                                <Link to={newFeedRouter.detail + item.get("id")}>
                                    <div className="article-title">{item.get("title")}</div>
                                </Link>
                                <div className="article-tags no-select">{this.getTag(item.get("tags"))}</div>
                                <div className="article-content">{item.get("content")}</div>
                            </ArticleItemRightTop>
                            <ArticleItemRightBottom>
                                <ReadMore
                                    className="right-bottom-read-more no-select">{this.getReadMore(item.get("id"))}
                                </ReadMore>
                            </ArticleItemRightBottom>
                        </ArticleItemRight>
                    </ArticleItem>
                    <DivLine/>
                </Fragment>
            )
            return null;
        })
    };

    getPopularArticleContainer() {
        return popularList;
    };

    getRestArticleContainer(page) {
        return demoList.slice(Math.max(0, page - 1) * 5, page * 5);

    };

    getPagination(totalPage) {
        const {page, handlePageChange} = this.props;
        let pages = [];
        pages.push(
            <span
                onClick={() => handlePageChange(page - 1, totalPage, this.scrollToMyRef)}
                className={page === 1 ? "prev-next disabled" : "prev-next"}
                key="news-feed-page-prev"
            >上一页</span>
        );
        for (let i = 1; i <= totalPage; i++) {
            pages.push(
                <span
                    onClick={() => handlePageChange(i, totalPage, this.scrollToMyRef)}
                    className={page === i ? "page-number active" : "page-number"}
                    key={"news-feed-page-" + i}
                >{i}</span>
            )
        }
        ;
        pages.push(
            <span
                onClick={() => handlePageChange(page + 1, totalPage, this.scrollToMyRef)}
                className={page === totalPage ? "prev-next disabled" : "prev-next"}
                key="news-feed-page-next"
            >下一页</span>
        )
        return pages;
    }

    //选择tag标签组件
    getTag(bitmask) {
        return (
            <Tag>
                {bitmask === 11 || 10 ? <div className='tag'>时事热点</div> : null}
                {bitmask === 11 || 1 ? <div className='tag'>市场趋势</div> : null}
            </Tag>
        )
    };


    //查看更多按钮组件
    getReadMore(id) {
        return (
            <Fragment>
                <Link to={'/news/detail/' + id}>
                    <div className='readMore'>查看更多</div>
                </Link>
                <Link to={'/news/detail/' + id}><Arrow>
                    <div className='arrowStart'/>
                    <div className='arrowEnd'/>
                </Arrow></Link>
            </Fragment>
        )
    };

    getArticleData(day, yearMonth) {
        return (
            <Data>
                <div className="data-day">{day}</div>
                <div className="data-year-month">{yearMonth}</div>
            </Data>
        )
    }


    componentDidMount() {
        this.props.hideShowBanner()
        this.props.getNewsFeedList();
        this.scrollToMyRef()
    };


};

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({
    newsFeedList: state.getIn(["newsFeed", "newsFeedList"]),

    page: state.getIn(["newsFeed", "page"]),
    totalPage: state.getIn(["newsFeed", "totalPage"])

});
const mapDispatch = (dispatch) => ({
    hideShowBanner() {
        dispatch(HeaderActionCreators.changeShowBanner(true));
    },
    getNewsFeedList() {

        dispatch(actionCreators.getNewsFeed())
    },
    handlePageChange(page, totalPage, scroll) {
        0 < page
        && page <= totalPage
        && dispatch(actionCreators.updatePage(page));
        scroll()
    }
})
export default connect(mapState, mapDispatch)(withRouter(NewsFeed));

