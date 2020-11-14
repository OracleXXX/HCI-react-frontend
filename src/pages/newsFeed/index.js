import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {actionCreators} from './store';
import {NewsFeedTitle} from "../homePage/componentStyles/NewFeedStyle";
import {Pagination} from "../oneStepService/activities/style";
import {NewsFeedWrapper} from './style'

class NewsFeed extends PureComponent {
    getPagination(totalPage) {
        const {page, handlePageChange} = this.props;
        let pages = [];
        pages.push(
            <span onClick={() => handlePageChange(page - 1, totalPage)}
                  className={page === 1 ? "prev-next disabled" : "prev-next"}>上一页</span>
        )
        for (let i = 1; i <= totalPage; i++) {
            pages.push(
                <span onClick={() => handlePageChange(i, totalPage)}
                      className={page === i ? "page-number active" : "page-number"}>{i}</span>
            )
        }
        pages.push(
            <span onClick={() => handlePageChange(page + 1, totalPage)}
                  className={page === totalPage ? "prev-next disabled" : "prev-next"}>下一页</span>
        )
        return pages;
    }

    render() {
        const {handlePageChange, page, totalPage} = this.props;
        return (
            <NewsFeedWrapper>
                <NewsFeedTitle>

                    <span className='title'
                          onClick={() => handlePageChange(page + 1, totalPage)}
                    >最近动态</span>
                    <div className='rec'/>
                    <div>asdasdasd</div>
                    <Pagination>
                        { this.getPagination(totalPage) }
                    </Pagination>

                </NewsFeedTitle>
            </NewsFeedWrapper>
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


//模板
/*
import React, {Component} from 'react';
class Detail extends Component {
    render() {
        return (
            <div>Detail


            </div>
        )
    }
}
export default Detail;
*/
