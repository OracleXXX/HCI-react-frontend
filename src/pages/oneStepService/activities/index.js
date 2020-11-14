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
    Apply
} from './style';
import test from '../../../statics/imgs/test.jpg'

class Activity extends PureComponent {

    getActivityItems() {
        const {activityList} = this.props;
        return (
            activityList.map((item) => {
                return (
                    <Fragment>
                        <ActivityItem>
                            <ItemLeft>
                                <img src={"../" + item.get("imgUrl")} alt="" className="item-left-img"/>
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
                                    <Apply className='apply'>我要报名</Apply>
                                </ItemRightBottom>

                            </ItemRight>
                        </ActivityItem>
                        <DivLine/>
                    </Fragment>
                )
            })
        )
    };

    render() {

        return (
            <ActivityWrapper>
                <ActivityTitle>
                    <div className='title'>平台活动</div>
                    <div className='rec'/>

                </ActivityTitle>
                <ActivityContainer>
                    { this.getActivityItems() }


                </ActivityContainer>
            </ActivityWrapper>
        )
    }

    componentDidMount() {
        this.props.getActivityList();
    }


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({
    activityList: state.getIn(["activity", "activityList"])


});
const mapDispatch = (dispatch) => ({
    getActivityList() {
        dispatch(actionCreators.getActivity());
    }


})

export default connect(mapState, mapDispatch)(withRouter(Activity));
