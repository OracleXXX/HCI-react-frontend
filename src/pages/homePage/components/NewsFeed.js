import React, {PureComponent} from 'react';
import {NewsFeedWrapper} from '../style';
import {connect} from 'react-redux';

class NewsFeed extends PureComponent {
    render() {
        return (
                <NewsFeedWrapper>
                    <h1>
                        最近动态
                    </h1>
                </NewsFeedWrapper>

        )
    }
}

export default connect(null, null)(NewsFeed);
