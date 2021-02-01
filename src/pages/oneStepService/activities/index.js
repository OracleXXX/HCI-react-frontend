import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {actionCreators, constants} from './store';
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
    Pagination,
    Register,
    DivLinePopup,
    RegisterTitle,
    RegisterContent,
    RegisterQRCode,
    ExitButton
} from './style';
import {PopupItem, PopupWrapper} from "../../../common/popup/style";
import {constants as contactUsConstants} from '../../contactUs/store';
import {actionCreators as HeaderActionCreators} from "../../../common/header/store";
const demoList = [];
const popList = [];

class Activity extends PureComponent {
    constructor(props) {
        super(props)
        this.ScrollTo = React.createRef()   // Create a ref object
    }

    scrollToMyRef = () => window.scrollTo(0, this.ScrollTo.current.offsetTop - 100)

    //渲染
    render() {
        const {page, totalPage, popIndex} = this.props;
        this.getActivityItems()
        return (
            <ActivityWrapper>
                <ActivityTitle ref={this.ScrollTo}>
                    <div className='title'>平台活动</div>
                    <div className='rec'/>
                </ActivityTitle>
                <ActivityContainer>{this.getNewPage(page)}</ActivityContainer>
                <Pagination className='no-select'>
                    {this.getPagination(totalPage)}
                </Pagination>
                {popIndex >= 0 ? this.getPopList(popIndex) : null}
            </ActivityWrapper>
        )
    }

    // 从demoList里面切片 实现分页
    getNewPage(page) {
        return demoList.slice(Math.max(0, page - 1) * 5, page * 5)
    };

    //每个活动（遍历）, 然后放入demoList
    getActivityItems() {
        const {activityList, changePopIndex} = this.props;
        if (demoList.length > 0) {
            return
        }
        activityList.map((item, index) => {
            //展示页面列表
            demoList.push(
                <div key={item.get("id")}>
                    <ActivityItem>
                        <ItemLeft>
                            <img src={constants.PROXY_URL + item.get("avatar")} alt=""
                                 className="item-left-img no-select"/>
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
                                <Apply className='apply no-select button'
                                       onClick={() => changePopIndex(index)}>我要报名</Apply>
                            </ItemRightBottom>
                        </ItemRight>
                    </ActivityItem>
                    <DivLine/>
                </div>
            )
            //弹出框内容列表
            popList.push(
                <PopupWrapper >
                    <PopupItem className="popup-item">
                        <Register>
                            <RegisterTitle className="no-select">我要报名</RegisterTitle>
                            <RegisterContent>
                                <div className="register-content-title"><div className="over">活动详情：</div><div className="register-content-title-bg"/></div>
                                    <div className='register-content'>时间：{item.get("time")}</div>
                                    <div className='register-content'>地点：{item.get("location")}</div>
                                    <div className='register-content'>主题：{item.get("title")}</div>
                                    <div className='register-content'>报名截止日期：{item.get("deadline")}</div>
                            </RegisterContent>
                            <DivLinePopup/>
                            <RegisterQRCode>
                                <div className="register-qr-title">了解详情请扫码</div>
                                <img src={contactUsConstants.QR_CODE} alt="" className="qr-code"/>
                            </RegisterQRCode>
                            <ExitButton onClick={()=>{changePopIndex(-1)}}>
                                <img src={constants.EXIT_BUTTON} alt="" className="exit-button"/>
                            </ExitButton>
                        </Register>

                    </PopupItem>
                </PopupWrapper>
            )
            return null;
        })

    };

    //更改弹出框内容
    getPopList(index) {
        return popList[index]

    }

    //分页器
    getPagination(totalPage) {
        const {page, handlePageChange} = this.props;
        let pages = [];
        pages.push(
            <span key="news-feed-page-prev" onClick={() => handlePageChange(page - 1, totalPage, this.scrollToMyRef)}
                  className={page === 1 ? "prev-next disabled" : "prev-next"}>上一页</span>
        )
        for (let i = 1; i <= totalPage; i++) {
            pages.push(
                <span key={"news-feed-page-" + i} onClick={() => handlePageChange(i, totalPage, this.scrollToMyRef)}
                      className={page === i ? "page-number active" : "page-number"}>{i}</span>
            )
        }
        pages.push(
            <span key="news-feed-page-next" onClick={() => handlePageChange(page + 1, totalPage, this.scrollToMyRef)}
                  className={page === totalPage ? "prev-next disabled" : "prev-next"}>下一页</span>
        )
        return pages;
    }


    componentDidMount() {
        this.props.hideShowBanner()
        this.props.getActivityList(this.props.activityList);
        this.scrollToMyRef()

    }


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({
    activityList: state.getIn(["activity", "activityList"]),
    page: state.getIn(['activity', 'page']),
    totalPage: state.getIn(['activity', 'totalPage']),
    popIndex: state.getIn(['activity', 'popIndex']),


});
const mapDispatch = (dispatch) => ({
    hideShowBanner() {
        dispatch(HeaderActionCreators.changeShowBanner(true));
    },
    getActivityList(list) {
        list.size === 0 && dispatch(actionCreators.getActivity());
    },
    handlePageChange(page, totalPage, scroll) {
        0 < page && page <= totalPage && dispatch(actionCreators.updatePage(page));
        scroll()
    },
    changePopIndex(index) {
        dispatch(actionCreators.changePopIndex(index));
    }


})

export default connect(mapState, mapDispatch)(withRouter(Activity));
