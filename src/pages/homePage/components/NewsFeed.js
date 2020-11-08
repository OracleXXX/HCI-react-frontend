import React, {PureComponent} from 'react';

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
        return (
            <FixedTopArticle>
                {/* 置顶文章图片 */}
                <LeftPart>
                    <img src={test} alt="" className='LeftPartImg'/>
                </LeftPart>
                {/* 置顶文章内容 */}
                <RightPart>
                    {/* 置顶文章标题 */}
                    <ArticleTitle className='articleTitle'>美国加州地产还值得投资吗</ArticleTitle>
                    {/* 标签 */}
                    <Tag>
                        <div className='tag'>时事热点</div>
                        <div className='tag'>市场趋势</div>
                    </Tag>
                    {/* 分割线 */}
                    <div className='divLine'/>
                    {/* 文章 */}
                    <ArticleContent className='articleContent'>{content1}</ArticleContent>
                    {this.getReadMore()}
                </RightPart>
            </FixedTopArticle>
        )
    };

    getRestArticles() {
        return (
            <RestArticles>
                <RestArticle>
                    <TopPart><img src={test} alt="" className='TopPartImg'/></TopPart>
                    <BottomPart>
                        <ArticleTitle className='articleTitle'>美国加州地产还值得投资吗</ArticleTitle>
                        <Tag>
                            <div className='tag'>时事热点</div>
                            <div className='tag'>市场趋势</div>
                        </Tag>
                        <div className='divLine'/>
                        <ArticleContent className='articleContent'>{content2}</ArticleContent>
                        {this.getReadMore()}
                    </BottomPart>
                </RestArticle>
                <RestArticle>
                    <TopPart><img src={test} alt="" className='TopPartImg'/></TopPart>
                    <BottomPart>
                        <ArticleTitle className='articleTitle'>美国加州地产还值得投资吗</ArticleTitle>
                        <Tag>
                            <div className='tag'>时事热点</div>
                            <div className='tag'>市场趋势</div>
                        </Tag>
                        <div className='divLine'/>
                        <ArticleContent className='articleContent'>{content2}</ArticleContent>
                        {this.getReadMore()}

                    </BottomPart>
                </RestArticle>
                <RestArticle>
                    <TopPart><img src={test} alt="" className='TopPartImg'/></TopPart>
                    <BottomPart>
                        <ArticleTitle className='articleTitle'>美国加州地产还值得投资吗</ArticleTitle>
                        <Tag>
                            <div className='tag'>时事热点</div>
                            <div className='tag'>市场趋势</div>
                        </Tag>
                        <div className='divLine'/>
                        <ArticleContent className='articleContent'>{content2}</ArticleContent>
                        {this.getReadMore()}
                    </BottomPart>
                </RestArticle>

            </RestArticles>
        )
    };

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
}
const mapStataToProps = (state) => ({
    topNewsFeedList: state.getIn(['homePage', 'topNewsFeedList']),
    restNewsFeedList:state.getIn(['homePage', 'restNewsFeedList'])

})
export default connect(mapStataToProps, null)(NewsFeed);
