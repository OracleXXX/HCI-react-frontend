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
    ReadMore

} from '../componentStyles/NewFeedStyle';

import test from '../../../statics/imgs/test.jpg';


class NewsFeed extends PureComponent {

    render() {
        return (
            <NewsFeedWrapper className='scale-control'>
                <NewsFeedTitle>
                    <span className='title'>最近动态</span>
                    <div className='rec'/>
                </NewsFeedTitle>
                <NewsFeedArticle>
                    {/*置顶文章*/}
                    {this.getFixedTopArticle()}
                    {/*除了置顶的文章*/}
                    {this.getRestArticles()}
                </NewsFeedArticle>
            </NewsFeedWrapper>

        )
    }
    //置顶文章
    getFixedTopArticle() {
        const {topNewsFeedList} = this.props;
        return (
            <Fragment>
                {
                    topNewsFeedList.map((item) => (
                        <FixedTopArticle>

                            {/* 置顶文章图片 */}
                            <LeftPart>
                                <img src={item.get('imgUrl')} alt="" className='LeftPartImg no-select'/>
                            </LeftPart>
                            {/* 置顶文章内容 */}
                            <RightPart>
                                {/* 置顶文章标题 */}
                                <ArticleTitle className='articleTitle'>{item.get('title')}</ArticleTitle>
                                {/* 标签 */}
                                <Tag>
                                    {item.get('tags') === 11 || 10 ? <div className='tag'>时事热点</div> : null}
                                    {item.get('tags') === 11 || 1 ? <div className='tag'>市场趋势</div> : null}
                                </Tag>
                                {/* 分割线 */}
                                <div className='divLine'/>
                                {/* 文章 */}
                                <ArticleContent className='articleContent'>{item.get('preContent')}</ArticleContent>
                                {this.getReadMore()}
                            </RightPart>
                        </FixedTopArticle>
                    ))
                }

            </Fragment>

        )
    };
    // 除了置顶的文章
    getRestArticles() {
        const {restNewsFeedList} = this.props;
        return (
            <RestArticles>
                {
                    restNewsFeedList.map((item) => (
                        <RestArticle>
                            <TopPart><img src={item.get('imgUrl')} alt="" className='TopPartImg no-select'/></TopPart>
                            <BottomPart>
                                {console.log(item.title)}
                                <ArticleTitle className='articleTitle'>{item.get('title')}</ArticleTitle>
                                {this.getTag(item.get('tags'))}
                                <div className='divLine'/>
                                <ArticleContent className='articleContent'>{item.get('preContent')}</ArticleContent>
                                {this.getReadMore()}
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
            <ReadMore>
                <div className='readMore'>查看更多</div>
                <Arrow>
                    <div className='arrowStart'/>
                    <div className='arrowEnd'/>
                </Arrow>
            </ReadMore>

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

}

const mapStataToProps = (state) => ({
    topNewsFeedList: state.getIn(['homePage', 'topNewsFeedList']),
    restNewsFeedList: state.getIn(['homePage', 'restNewsFeedList'])

})
export default connect(mapStataToProps, null)(NewsFeed);
