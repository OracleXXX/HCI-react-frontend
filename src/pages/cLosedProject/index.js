import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {actionCreators} from './store';
import {
    ClosedProjectDemoWrapper,
    ClosedProjectTitle,
    Item,
    SliderWrapper,
    VerticalDivLine,
    Rec,
    NextArrow,
    PrevArrow,
    ItemTop,
    FixedBottom,
    ItemMid,
    ItemBottom,
    DivLine,
    MoreInfo,
    PopSliderWrapper,
    PopSliderTop,
    PopSliderBottom,
    PopSliderItemTop,
    PopSliderItemBottom

} from './style'
import Slider from "react-slick";
import addrIcon from "../../statics/imgs/homePageImgs/addrIcon.png";
import moreInfoIcon from "../../statics/imgs/homePageImgs/moreInfoIcon.png";
import * as constants from "./store/constants";
import {constants as activityConstants} from '../oneStepService/activities/store';
import * as api from '../../common/api/api'
import {PopupItem, PopupWrapper} from "../../common/popup/style";
import {ExitButton} from "../oneStepService/activities/style";
import {actionCreators as HeaderActionCreators} from "../../common/header/store";

class ClosedProject extends PureComponent {

    constructor(props) {
        super(props);
        //绑定this
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.ScrollTo = React.createRef()   // Create a ref object
        this.state = {
            nav1: null,
            nav2: null
        };

    }

    scrollToMyRef = () => window.scrollTo(0, this.ScrollTo.current.offsetTop - 100)

    render() {

        const {flippingSlider, noFlippingList, flippingList, detailList} = this.props;
        return (
            <ClosedProjectDemoWrapper className='scale-control' ref={this.ScrollTo}>
                {/* 图轮播图title */}
                <ClosedProjectTitle>
                    <div className='title no-select' onClick={() => this.props.handleSliderChange(true)}>翻新后出租/出售房屋
                    </div>
                    <VerticalDivLine/>
                    <div className='title no-select' onClick={() => this.props.handleSliderChange(false)}>可直接出租/出售房屋
                    </div>
                    {/* float rec bar */}
                    <Rec>{this.getMoveBar()}</Rec>
                </ClosedProjectTitle>
                {/* 轮播图 */}
                <SliderWrapper>
                    {/* 左指针 */}
                    <PrevArrow className="button" onClick={this.previous}/>
                    {/* 轮播图item */}
                    <div className="slider">
                        <Slider ref={c => (this.slider = c)} {...constants.SETTINGS} className="slider">
                            {flippingSlider ? this.getSlider(flippingList) : this.getSlider(noFlippingList)}
                        </Slider>
                    </div>
                    {/* 右指针 */}
                    <NextArrow className="button" onClick={this.next}/>
                </SliderWrapper>
                {/* 弹出框 */}
                {detailList.size > 0 ? <PopupWrapper>{this.getPopupItem()}</PopupWrapper> : null}
            </ClosedProjectDemoWrapper>
        )
    };

    // 轮播图
    getSlider(list) {
        const {flippingSlider, getDetail} = this.props;
        return (
            list.map((item) => {
                return (
                    <div className="slider" key={item.get("id")}>
                        <Item>
                            <ItemTop>
                                <img src={api.domain + item.get("avatar")} alt=""
                                     className="item-top-img"/>
                                <FixedBottom>
                                    <div className="fixed-bottom-left">
                                        <img src={addrIcon} alt=""/>
                                        {item.get("city")}
                                    </div>
                                    <MoreInfo
                                        className="button"
                                        onClick={() => {
                                            getDetail(item.get("id"));
                                        }}
                                    >详情
                                        <img src={moreInfoIcon} alt=""/>
                                    </MoreInfo>
                                </FixedBottom>
                            </ItemTop>
                            <div className="mid-bottom">
                                <ItemMid>
                                    <div className="price-month">
                                        <span className="price">{item.get("price")}</span>
                                    </div>
                                    <div className="area-rental">{item.get("area") + item.get("status")}</div>
                                </ItemMid>
                                <ItemBottom>
                                    <DivLine/>
                                    <div className="item-info">
                                        <div className="item-info-1">
                                            <span className="item-info-title">具体地址：</span>
                                            <div className="item-info-content">
                                                <div>{item.get("full_addr")},</div>
                                                <div>{item.get("state")}, {item.get("zip_code")}</div>
                                            </div>
                                        </div>

                                        <div>
                                            <span className="item-info-title">买入价格：</span>
                                            <span
                                                className="item-info-content">{item.get("purchase_price")}</span>
                                        </div>
                                        {
                                            flippingSlider
                                                ? <div><span className="item-info-title">装修费用：</span><span
                                                    className="item-info-content">{item.get("flipping_cost")}</span></div>
                                                : null
                                        }
                                        <div>
                                            <span className="item-info-title">卖出价格：</span>
                                            <span className="item-info-content">{item.get("sell_price")}</span>
                                        </div>
                                        <div>
                                            <span className="item-info-title">项目总回报率：</span>
                                            <span className="item-info-content">{item.get("net_rate_of_return")}</span>
                                        </div>

                                    </div>
                                </ItemBottom>
                            </div>
                        </Item>
                    </div>
                )
            })
        )
    }

    getPopupItem() {
        const {getDetail, detailList, curID} = this.props;
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
        const {nav1, nav2} = this.state;
        return (
            <PopupItem><PopSliderWrapper>
                <PopSliderTop><Slider asNavFor={nav2} ref={slider => (this.slider1 = slider)} arrows={false}
                                      swipeToSlide={true}>
                    {
                        detailList.map((item, index) => {
                            return (
                                <PopSliderItemTop>
                                    <img src={api.images_domain + curID + "/" + item} alt="" key={index}/>
                                </PopSliderItemTop>
                            )
                        })
                    }
                </Slider></PopSliderTop>
                <PopSliderBottom><Slider asNavFor={nav1} ref={slider => (this.slider2 = slider)} slidesToShow={5}
                                         swipeToSlide={true} focusOnSelect={true} arrows={false}>
                    {
                        detailList.map((item, index) => {
                            return (
                                <PopSliderItemBottom>
                                    <img src={api.images_domain + curID + "/" + item} alt="" key={index}/>
                                </PopSliderItemBottom>
                            )
                        })
                    }
                </Slider></PopSliderBottom>
                <ExitButton onClick={() => getDetail(-1)}>
                    <img src={activityConstants.EXIT_BUTTON} alt="" className="exit-button no-select"/>
                </ExitButton>
            </PopSliderWrapper></PopupItem>
        )
    }

    /* float rec bar */
    getMoveBar() {
        const {flippingSlider} = this.props;
        return (
            <div className='move-bar-container'>
                <div className={flippingSlider ? 'move-bar' : 'move-bar right'}/>
            </div>
        )
    }

    /* 右指针 */
    next() {
        this.slider.slickNext();
    }

    /* 左指针 */
    previous() {
        this.slider.slickPrev();
    }


    componentDidMount() {
        this.props.hideShowBanner()
        this.props.getNoFlippingList();
        this.props.getFlippingList();
        this.scrollToMyRef();


    };


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({
    noFlippingList: state.getIn(["closedProject", "noFlippingList"]),
    flippingList: state.getIn(["closedProject", "flippingList"]),
    flippingSlider: state.getIn(["closedProject", "flippingSlider"]),
    detailList: state.getIn(["closedProject", "detailList"]),
    curID: state.getIn(["closedProject", "curID"]),

});
const mapDispatch = (dispatch) => ({
    hideShowBanner() {
        dispatch(HeaderActionCreators.changeShowBanner(true));
    },
    getNoFlippingList() {
        dispatch(actionCreators.getNoFlippingList());
    },
    getFlippingList() {
        dispatch(actionCreators.getFlippingList());
    },
    handleSliderChange(flipping) {
        dispatch(actionCreators.handleSliderChange(flipping));
    },
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    },

});

export default connect(mapState, mapDispatch)(withRouter(ClosedProject));

