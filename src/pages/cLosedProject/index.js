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
    MoreInfo

} from './style'
import Slider from "react-slick";
import addrIcon from "../../statics/imgs/homePageImgs/addrIcon.png";
import moreInfoIcon from "../../statics/imgs/homePageImgs/moreInfoIcon.png";
import * as constants from "./store/constants";

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

        const {flippingSlider, noFlippingList, flippingList} = this.props;
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
                    <PrevArrow className="button hovered" onClick={this.previous}/>

                    <div className="slider">
                        <Slider ref={c => (this.slider = c)} {...constants.SETTINGS} className="slider">
                            {flippingSlider ? this.getSlider(flippingList) : this.getSlider(noFlippingList)}


                        </Slider>
                    </div>

                    <NextArrow className="button" onClick={this.next}/>
                </SliderWrapper>
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
        const {flippingSlider} = this.props;
        return (
            list.map((item) => {
                return (
                    <div className="slider" key={item.get("id")}>
                        <Item>
                            <ItemTop>
                                <img src={item.get("imgUrl").toJS()[0]} alt="" className="item-top-img"/>
                                <FixedBottom>
                                    <div className="fixed-bottom-left"><img src={addrIcon}
                                                                            alt=""/>{item.get("location")}</div>
                                    <MoreInfo className="button">详情<img src={moreInfoIcon} alt=""/></MoreInfo>
                                </FixedBottom>
                            </ItemTop>
                            <div className="mid-bottom">
                                <ItemMid>
                                    <div className="price-month">
                                        <span className="price">{item.get("price")}</span>
                                    </div>
                                    <div className="area-rental">{item.get("area") + item.get("rental")}</div>
                                </ItemMid>
                                <ItemBottom>
                                    <DivLine/>
                                    <div className="item-info">
                                        <div className="item-info-1">
                                            <span className="item-info-title">具体地址：</span>
                                            <div className="item-info-content">{item.get("fullAddr")}</div>
                                        </div>
                                        <div>
                                            <span className="item-info-title">现金总收益：</span>
                                            <span className="item-info-content">{item.get("netIncome")}</span>
                                        </div>
                                        <div>
                                            <span className="item-info-title">现金回报率：</span>
                                            <span className="item-info-content">{item.get("profitRate")}</span>
                                        </div>
                                        <div>
                                            <span className="item-info-title">租金收益：</span>
                                            <span className="item-info-content">{item.get("rentalIncome")}</span>
                                        </div>
                                        {
                                            flippingSlider
                                                ? <div><span className="item-info-title">装修费用：</span><span
                                                    className="item-info-content">{item.get("flippingC")}</span></div>
                                                : null
                                        }
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
        this.props.getClosedProjectList();
        this.scrollToMyRef()

    };


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({
    noFlippingList: state.getIn(["closedProject", "noFlippingList"]),
    flippingList: state.getIn(["closedProject", "flippingList"]),
    flippingSlider: state.getIn(["closedProject", "flippingSlider"]),
});
const mapDispatch = (dispatch) => ({
    getClosedProjectList() {
        dispatch(actionCreators.getClosedProjectList())
    },
    handleSliderChange(flipping) {
        dispatch(actionCreators.handleSliderChange(flipping))
    }

});

export default connect(mapState, mapDispatch)(withRouter(ClosedProject));

