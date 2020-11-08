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
    BottomPart

} from '../componentStyles/NewFeedStyle';

import test from '../../../statics/imgs/test.jpg';
class NewsFeed extends PureComponent {
    render() {
        return (
            <NewsFeedWrapper>
                <NewsFeedTitle>
                    <span className='title'>最近动态</span>
                    <div className='rec'/>
                </NewsFeedTitle>
                <NewsFeedArticle>
                    <FixedTopArticle>
                        <LeftPart>
                            <img src={test} alt="" className='LeftPartImg'/>
                        </LeftPart>
                        <RightPart>right</RightPart>

                    </FixedTopArticle>
                    <RestArticles>
                        <RestArticle>
                             <TopPart><img src={test} alt="" className='LeftPartImg'/></TopPart>
                        <BottomPart></BottomPart>
                        </RestArticle>
                        <RestArticle>
                             <TopPart><img src={test} alt="" className='LeftPartImg'/></TopPart>
                        <BottomPart></BottomPart>
                        </RestArticle>
                        <RestArticle>
                             <TopPart><img src={test} alt="" className='LeftPartImg'/></TopPart>
                        <BottomPart></BottomPart>
                        </RestArticle>

                    </RestArticles>
                </NewsFeedArticle>

            </NewsFeedWrapper>

        )
    }
}

export default connect(null, null)(NewsFeed);
