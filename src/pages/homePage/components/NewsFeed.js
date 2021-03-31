import React, {PureComponent, Fragment} from 'react';

import {connect} from 'react-redux';
import {
    NewsFeedWrapper,
    NewsFeedTitle,
    NewsFeedArticle,
    FixedTopArticle,
    RestArticles,
    LeftPart,
    RightPart,
    RestArticle,
    TopPart,
    BottomPart,
    ArticleTitle,
    Tag,
    ArticleContent,
    Arrow,
    ReadMore,
    Data

} from '../componentStyles/NewFeedStyle';
import {Link} from "react-router-dom";
import {news_feed as newsApi} from "../../../router/router";
import {domain} from "../../../common/api/api";

class NewsFeed extends PureComponent {
    render() {
        return (
            <NewsFeedWrapper className='scale-control'>
                <NewsFeedTitle>
                    <span className='title'>新闻咨询</span>
                    <div className='rec'/>
                </NewsFeedTitle>
                <NewsFeedArticle>
                    {/*置顶文章*/}
                    {this.getFixedPopularArticle()}
                    {/*除了置顶的文章*/}
                    {this.getRestArticles()}
                </NewsFeedArticle>
            </NewsFeedWrapper>

        )
    }

    //置顶文章
    getFixedPopularArticle() {
        const {popularArticleList} = this.props;
        return (
            <Fragment>
                {
                    popularArticleList.map((item) => (
                        <FixedTopArticle key={item.get("id")}>
                            {/* 置顶文章图片 */}
                            <LeftPart>
                                {this.getArticleData()}
                                <Link to={newsApi.detail + item.get("id")}>
                                    <img src={item.get('imgUrl')} alt="" className='LeftPartImg no-select'/>
                                </Link>
                            </LeftPart>
                            {/* 置顶文章内容 */}
                            <RightPart>
                                {/* 置顶文章标题 */}
                                <Link to={newsApi.detail + item.get("id")}>
                                    <ArticleTitle className='articleTitle'>{item.get('title')}</ArticleTitle>
                                </Link>
                                {/* 标签 */}
                                <Tag>
                                    {item.get('tags') === 11 || 10 ? <div className='tag'>时事热点</div> : null}
                                    {item.get('tags') === 11 || 1 ? <div className='tag'>市场趋势</div> : null}
                                </Tag>
                                {/* 分割线 */}
                                <div className='divLine'/>
                                {/* 文章 */}
                                <ArticleContent className='articleContent'>{item.get('content')}</ArticleContent>
                                <Link to={newsApi.detail + item.get("id")}><ReadMore
                                    className="button">{this.getReadMore()}</ReadMore></Link>
                            </RightPart>
                        </FixedTopArticle>
                    ))
                }

            </Fragment>

        )
    };

    // 除了置顶的文章
    getRestArticles() {
        const {restArticleList} = this.props;
        return (
            <RestArticles>
                {
                    restArticleList.map((item) => (
                        <RestArticle key={item.get("id")}>
                            <TopPart>
                                {this.getArticleData()}
                                <Link to={newsApi.detail + item.get("id")}><img src={domain + item.get('avatar')} alt=""
                                                                                className='TopPartImg no-select'/></Link>
                            </TopPart>
                            <BottomPart>
                                <Link to={newsApi.detail + item.get("id")}><ArticleTitle
                                    className='articleTitle'>{item.get('title')}</ArticleTitle></Link>
                                {this.getTag(item.get('tags'))}
                                <div className='divLine'/>
                                <ArticleContent className='articleContent'>{item.get('content')}</ArticleContent>
                                <Link to={newsApi.detail + item.get("id")}><ReadMore
                                    className="button">{this.getReadMore()}</ReadMore></Link>
                            </BottomPart>
                        </RestArticle>
                    ))
                }
            </RestArticles>
        )
    };

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

    //选择tag标签组件
    getTag(bitmask) {
        return (
            <Tag>
                {bitmask === 11 || 10 ? <div className='tag'>时事热点</div> : null}
                {bitmask === 11 || 1 ? <div className='tag'>市场趋势</div> : null}
            </Tag>
        )
    }

    getArticleData() {
        return (
            <Data>
                <div className="data-day">02</div>
                <div className="data-year-month">2020/11</div>
            </Data>
        )
    }

    componentDidMount() {
    }

}

const mapStataToProps = (state) => ({
    popularArticleList: state.getIn(['newsFeed', 'newsFeedList']).slice(0, 1),
    restArticleList: state.getIn(['newsFeed', 'newsFeedList']).slice(1, 4),

});

export default connect(mapStataToProps, null)(NewsFeed);
