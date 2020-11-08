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

const content1 = '阳光明媚的加利福尼亚州不断吸引着人们、企业和游客，地理和经济都具有多样性。从山峦到海滩，加州的经济由娱乐和技术、农业（得益于全年温和的天气）、制造业、保健和金融等行业组成。大量的公司总部设在洛杉矶、旧金山、圣地亚哥、圣何塞和萨克拉门托等大都市地区，难怪加州的人口持续增长——尽管其人口密集，缺乏可负担的住房和生活成本高…'
const content2 = '之前我的文章和大家分享了疫情期间纽约房市的变化，但我的确很少直接谈到纽约房价到底受疫情影响有...';

class NewsFeed extends PureComponent {

    render() {
        const {topNewsFeedList, restNewsFeedList} = this.props;
        return (
            <NewsFeedWrapper>
                <NewsFeedTitle>
                    <span className='title'>最近动态</span>
                    <div className='rec'/>
                </NewsFeedTitle>
                <NewsFeedArticle>
                    {this.getFixedTopArticle()}
                    {this.getRestArticles()}
                </NewsFeedArticle>
            </NewsFeedWrapper>

        )
    }

    getFixedTopArticle() {
        const {topNewsFeedList} = this.props;
        return (
            <Fragment>
                {
                    topNewsFeedList.map((item) => (
                        <FixedTopArticle>

                            {/* 置顶文章图片 */}
                            <LeftPart>
                                <img src={item.get('imgUrl')} alt="" className='LeftPartImg'/>
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

    getRestArticles() {
        const {restNewsFeedList} = this.props;
        return (
            <RestArticles>
                {
                    restNewsFeedList.map((item) => (
                        <RestArticle>
                            <TopPart><img src={item.get('imgUrl')} alt="" className='TopPartImg'/></TopPart>
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
