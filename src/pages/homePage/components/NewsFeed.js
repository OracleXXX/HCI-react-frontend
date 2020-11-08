import React, {PureComponent} from 'react';
import {
    NewsFeedWrapper,
    NewsFeedTitle

} from '../componentStyles/NewFeedStyle';
import {connect} from 'react-redux';

class NewsFeed extends PureComponent {
    render() {
        return (
                <NewsFeedWrapper>
                    <NewsFeedTitle>
                        <span className='title'>最近动态</span>
                        <div className='rec' />
                    </NewsFeedTitle>

                </NewsFeedWrapper>

        )
    }
}

export default connect(null, null)(NewsFeed);
