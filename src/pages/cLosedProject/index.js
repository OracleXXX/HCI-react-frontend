import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, withRouter} from 'react-router-dom';

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
    MoreInfo

} from './style'
import Slider from "react-slick";
import addrIcon from "../../statics/imgs/homePageImgs/addrIcon.png";
import moreInfoIcon from "../../statics/imgs/homePageImgs/moreInfoIcon.png";
import * as constants from "./store/constants";
import {constants as activityConstants} from '../oneStepService/activities/store';
import {PopupItem, PopupWrapper} from "../../common/popup/style";

class ClosedProject extends PureComponent {
    constructor(props) {
        super(props);
        //绑定this
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.ScrollTo = React.createRef()   // Create a ref object

    }

    scrollToMyRef = () => window.scrollTo(0, this.ScrollTo.current.offsetTop - 100)

    render() {

        const {flippingSlider, noFlippingList, flippingList, popIndex, changePopIndex} = this.props;
        return (
            <ClosedProjectDemoWrapper className='scale-control' ref={this.ScrollTo}>
                {/* 图轮播图title */}
                <ClosedProjectTitle>
                    <div className='title' onClick={() => this.props.handleSliderChange(true)}>翻新后出租/出售房屋</div>
                    <VerticalDivLine/>
                    <div className='title' onClick={() => this.props.handleSliderChange(false)}>可直接出租/出售房屋</div>
                    <Rec>{this.getMoveBar()}</Rec>
                </ClosedProjectTitle>
                {/* 轮播图 */}
                <SliderWrapper>
                    {/* 左右指针 */}
                    <PrevArrow className="button" onClick={this.previous}/>
                    <div className="slider">
                        <Slider ref={c => (this.slider = c)} {...constants.SETTINGS} className="slider">
                            {flippingSlider ? this.getSlider(flippingList) : this.getSlider(noFlippingList)}
                        </Slider>
                    </div>
                    <NextArrow className="button" onClick={this.next}/>
                </SliderWrapper>
                {popIndex>=0? <PopupWrapper><PopupItem><img src={addrIcon} alt="" onClick={()=>changePopIndex(-1, popIndex)}/></PopupItem></PopupWrapper> : null}
            </ClosedProjectDemoWrapper>
        )
    };

    getMoveBar() {
        const {flippingSlider} = this.props;
        return (
            <div className='move-bar-container'>
                <div className={flippingSlider ? 'move-bar' : 'move-bar right'}/>
            </div>
        )
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    getSlider(list) {
        const {flippingSlider, popIndex, changePopIndex} = this.props;
        return (
            list.map((item, index) => {
                return (
                    <div className="slider" key={item.get("id")}>
                        <Item>
                            <ItemTop>
                                <img src={activityConstants.PROXY_URL + item.get("avatar")} alt=""
                                     className="item-top-img"/>
                                <FixedBottom>
                                    <div className="fixed-bottom-left"><img src={addrIcon}
                                                                            alt=""/>{item.get("location")}</div>
                                    <MoreInfo className="button" onClick={() => {
                                        changePopIndex(index, popIndex)
                                    }}>详情<img src={moreInfoIcon} alt=""/></MoreInfo>

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
                                            <div className="item-info-content">{item.get("full_addr")}</div>
                                        </div>
                                        {
                                            flippingSlider
                                                ? <div><span className="item-info-title">装修费用：</span><span
                                                    className="item-info-content">{item.get("flipping_cost")}</span></div>
                                                : null
                                        }
                                        <div>
                                            <span className="item-info-title">租金回报率：</span>
                                            <span
                                                className="item-info-content">{item.get("rental_rate_of_return")}</span>
                                        </div>
                                        <div>
                                            <span className="item-info-title">现金回报率：</span>
                                            <span className="item-info-content">{item.get("cash_rate_of_return")}</span>
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


    componentDidMount() {
        this.props.getNoFlippingList();
        this.props.getFlippingList();
        this.scrollToMyRef()

    };


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({
    noFlippingList: state.getIn(["closedProject", "noFlippingList"]),
    flippingList: state.getIn(["closedProject", "flippingList"]),
    flippingSlider: state.getIn(["closedProject", "flippingSlider"]),
    detailList: state.getIn(["closedProject", "detailList"]),
    popIndex: state.getIn(["closedProject", "popIndex"])
});
const mapDispatch = (dispatch) => ({
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
    changePopIndex(index, popindex) {
        console.log(popindex)
        dispatch(actionCreators.changePopIndex(index))
    }

});

export default connect(mapState, mapDispatch)(withRouter(ClosedProject));

