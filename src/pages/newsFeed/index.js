import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {actionCreators} from './store';
import {
    NewsFeedTitle,

} from "../homePage/componentStyles/NewFeedStyle";
import {
    NewsFeedWrapper,
    NewsFeedContainer,
    PopularArticleContainer,
    RestArticleContainer,
    ArticleItem,
    ArticleItemLeft,
    ArticleItemRight,
    ArticleItemRightTop,
    ArticleItemRightBottom,
    ArticleItemBottom,
    ReadMore,
    Arrow

} from './style'
import {DivLine, Pagination} from "../oneStepService/activities/style";

const popularList = []
const demoList = [];

class NewsFeed extends PureComponent {
    //渲染
    render() {
        const {handlePageChange, page, totalPage} = this.props;
        this.getArticleItems()
        return (
            <NewsFeedWrapper>
                <NewsFeedTitle>

                    <span className='title'>最近动态</span>
                    <div className='rec'/>
                </NewsFeedTitle>
                <NewsFeedContainer>
                    <PopularArticleContainer>asd</PopularArticleContainer>
                    <RestArticleContainer>{this.getRestArticleContainer(page)}</RestArticleContainer>
                </NewsFeedContainer>
                <Pagination>
                    {this.getPagination(totalPage)}
                </Pagination>
            </NewsFeedWrapper>
        )
    }

    getArticleItems() {
        const {newsFeedList} = this.props;
        let count = 0;

        if (demoList.length > 0) {
            return
        }
        newsFeedList.map((item) => {
            let className = "article-item-" + count;

            /*置顶文章*/
            count < 3 && popularList.push(
                <ArticleItem className={className} key={item.get("id")}>
                    <img src={item.get("imgUrl")} alt=""/>
                    <ArticleItemBottom>{item.get("title")}</ArticleItemBottom>
                </ArticleItem>
            );

            /* 剩余文章 */
            count >= 3 && demoList.push(
                <Fragment key={item.get("id")}>
                    <ArticleItem>
                        <ArticleItemLeft>
                            <img src={item.get("imgUrl")} alt="" className="item-left-img no-select"/>
                        </ArticleItemLeft>
                        <ArticleItemRight>
                            <ArticleItemRightTop>
                                <div className="article-title">{item.get("title")}</div>
                                <div className="article-content">{item.get("tags")}</div>
                                <div className="article-content">{item.get("preContent")}</div>
                            </ArticleItemRightTop>
                            <ArticleItemRightBottom>
                                <ReadMore className="right-bottom-read-more">{this.getReadMore()}</ReadMore>
                            </ArticleItemRightBottom>

                        </ArticleItemRight>
                    </ArticleItem>
                    <DivLine/>
                </Fragment>
            )

            count += 1;
        })
    }

    getRestArticleContainer(page) {
        return demoList.slice(Math.max(0, page - 1) * 5, page * 5)

    }

    getPagination(totalPage) {
        const {page, handlePageChange} = this.props;
        let pages = [];
        pages.push(
            <span
                onClick={() => handlePageChange(page - 1, totalPage)}
                className={page === 1 ? "prev-next disabled" : "prev-next"}
                key="news-feed-page-prev"
            >上一页</span>
        )
        for (let i = 1; i <= totalPage; i++) {
            pages.push(
                <span
                    onClick={() => handlePageChange(i, totalPage)}
                    className={page === i ? "page-number active" : "page-number"}
                    key={"news-feed-page-" + i}
                >{i}</span>
            )
        }
        pages.push(
            <span
                onClick={() => handlePageChange(page + 1, totalPage)}
                className={page === totalPage ? "prev-next disabled" : "prev-next"}
                key="news-feed-page-next"
            >下一页</span>
        )
        return pages;
    }

    //查看更多按钮组件
    getReadMore() {
        return (
            <Fragment>
                <div className='readMore'>查看更多</div>
                <Arrow>
                    <div className='arrowStart'/>
                    <div className='arrowEnd'/>
                </Arrow>
            </Fragment>

        )
    }


    componentDidMount() {

        this.props.getNewsFeedList();
    }


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({
    newsFeedList: state.getIn(["newsFeed", "newsFeedList"]),

    page: state.getIn(["newsFeed", "page"]),
    totalPage: state.getIn(["newsFeed", "totalPage"])

});
const mapDispatch = (dispatch) => ({
    getNewsFeedList(list) {

        dispatch(actionCreators.getNewsFeed())
    },
    handlePageChange(page, totalPage) {
        0 < page && page <= totalPage && dispatch(actionCreators.updatePage(page));
    }


})

export default connect(mapState, mapDispatch)(withRouter(NewsFeed));

