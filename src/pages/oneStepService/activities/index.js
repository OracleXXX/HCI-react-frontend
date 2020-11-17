import React, {Fragment, PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {actionCreators} from './store';
//css
import {
    ActivityWrapper,
    ActivityContainer,
    ActivityItem,
    DivLine,
    ItemLeft,
    ItemRight,
    ActivityTitle,
    ItemRightTop,
    ItemRightBottom,
    Apply,
    Pagination
} from './style';
import test from '../../../statics/imgs/test.jpg'

const demoList = [];

class Activity extends PureComponent {
    //渲染
    render() {
        const {page, totalPage} = this.props;
        this.getActivityItems()
        return (
            <ActivityWrapper>
                <ActivityTitle>
                    <div className='title'>平台活动</div>
                    <div className='rec'/>
                </ActivityTitle>
                <ActivityContainer>{this.getNewPage(page)}</ActivityContainer>
                <Pagination className='no-select'>
                    {this.getPagination(totalPage)}

                </Pagination>

            </ActivityWrapper>
        )
    }

    // 从demoList里面切片 实现分页
    getNewPage(page) {
        return demoList.slice(Math.max(0, page - 1) * 5, page * 5)
    };

    //每个活动（遍历）, 然后放入demoList
    getActivityItems() {
        const {activityList} = this.props;
        if (demoList.length > 0) {
            return
        }
        activityList.map((item) => {
            demoList.push(
                <div key={item.get("id")}>
                    <ActivityItem>
                        <ItemLeft>
                            <img src={"../" + item.get("imgUrl")} alt="" className="item-left-img no-select"/>
                        </ItemLeft>
                        <ItemRight>
                            <ItemRightTop>
                                <div className='activity-title'>{item.get("title")}</div>
                                <div className='activity-content'>{item.get("content")}</div>
                            </ItemRightTop>
                            <ItemRightBottom>
                                <div className='activity-location'>活动地点：{item.get("location")}</div>
                                <div className='activity-time'>活动时间：{item.get("time")}</div>
                                <div className='activity-deadline'>截止日期：{item.get("deadline")}</div>
                                <Apply className='apply no-select'>我要报名</Apply>
                            </ItemRightBottom>

                        </ItemRight>
                    </ActivityItem>
                    <DivLine/>
                </div>
            )
        })
        console.log(demoList)
    };

    //分页器
    getPagination(totalPage) {
        const {page, handlePageChange} = this.props;
        let pages = [];
        pages.push(
            <span key="news-feed-page-prev" onClick={() => handlePageChange(page - 1, totalPage)}
                  className={page === 1 ? "prev-next disabled" : "prev-next"}>上一页</span>
        )
        for (let i = 1; i <= totalPage; i++) {
            pages.push(
                <span key={"news-feed-page-" + i} onClick={() => handlePageChange(i, totalPage)}
                      className={page === i ? "page-number active" : "page-number"}>{i}</span>
            )
        }
        pages.push(
            <span key="news-feed-page-next" onClick={() => handlePageChange(page + 1, totalPage)}
                  className={page === totalPage ? "prev-next disabled" : "prev-next"}>下一页</span>
        )
        return pages;
    }


    componentDidMount() {
        this.props.getActivityList(this.props.activityList);

    }


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({
    activityList: state.getIn(["activity", "activityList"]),
    page: state.getIn(['activity', 'page']),
    totalPage: state.getIn(['activity', 'totalPage'])


});
const mapDispatch = (dispatch) => ({
    getActivityList(list) {
        list.size === 0 && dispatch(actionCreators.getActivity());
    },
    handlePageChange(page, totalPage) {

        0 < page && page <= totalPage && dispatch(actionCreators.updatePage(page));

    }


})

export default connect(mapState, mapDispatch)(withRouter(Activity));
