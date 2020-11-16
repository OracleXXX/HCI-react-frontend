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
    ItemMid,
    ItemBottom,
    DivLine

} from './style'
import Slider from "react-slick";
import addrIcon from "../../statics/imgs/homePageImgs/addrIcon.png";
import moreInfoIcon from "../../statics/imgs/homePageImgs/moreInfoIcon.png";

class ClosedProject extends PureComponent {
    constructor(props) {
        super(props);
        //绑定this
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

    }

    getMoveBar() {
        return (
            <div className='move-bar-container'>
                <div className='move-bar'/>
            </div>
        )
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
        console.log(this.props.noFlippingList)
    }

    getSlider(list) {
        return (
            list.map((item) => {
    /*            console.log(item.get("imgUrl").toJS()[0]);*/
                return (
                    <div className="slider">
                        <Item>
                            <ItemTop>
                                <img src={item.get("imgUrl").toJS()[0]} alt="" className="item-top-img"/>
                                <></>
                            </ItemTop>
                            <div className="mid-bottom">

                                <ItemMid>
                                    <div className="price-month">
                                        <span className="price">{item.get("price")}</span>
                                        <span className="month">{item.get("month")}</span>
                                    </div>
                                    <div className="area-rental">{item.get("area") + item.get("rental")}</div>
                                </ItemMid>
                                <ItemBottom>
                                    <DivLine />
                                    <div className="item-info">
                                        <div className="item-info-1"><span className="item-info-title">具体地址：</span><div className="item-info-content">{item.get("fullAddr")}</div></div>
                                        <div><span className="item-info-title">预期收益：</span><span className="item-info-content">{item.get("netIncome")}</span></div>
                                        <div><span className="item-info-title">预期回报率：</span><span className="item-info-content">{item.get("profitRate")}</span></div>
                                        <div><span className="item-info-title">预期租金：</span><span className="item-info-content">{item.get("rentalIncome")}</span></div>
                                        <div><span className="item-info-title">预期装修费用：</span><span className="item-info-content">{item.get("flipping")}</span></div>
                                    </div>
                                </ItemBottom>
                            </div>
                        </Item>
                    </div>
                )
            })
        )
    }


    render() {
        const settings = {
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            pauseOnHover: true,
            arrows: false,

        };
        const {curSlider, noFlippingList} = this.props;
        return (
            <ClosedProjectDemoWrapper className='scale-control'>
                {/* 图轮播图title */}
                <ClosedProjectTitle>

                    <div className='title'>翻新后出租/出售房屋</div>
                    <VerticalDivLine/>
                    <div className='title'>可直接出租/出售房屋</div>
                    <Rec>{this.getMoveBar()}</Rec>
                </ClosedProjectTitle>
                {/* 轮播图 */}

                <SliderWrapper>
                    {/* 左右指针 */}
                    <PrevArrow className="button hovered" onClick={this.previous}/>

                    <div className="slider">
                        <Slider ref={c => (this.slider = c)} {...settings} className="slider">
                            { this.getSlider(this.props.noFlippingList) }

                        </Slider>
                    </div>

                    <NextArrow className="button" onClick={this.next}/>
                </SliderWrapper>
            </ClosedProjectDemoWrapper>
        )
    };

    componentDidMount() {
        this.props.getClosedProjectList();

    };


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({
    noFlippingList: state.getIn(["closedProject", "noFlippingList"]),
    flippingList: state.getIn(["closedProject", "flippingList"]),
});
const mapDispatch = (dispatch) => ({
    getClosedProjectList() {
        dispatch(actionCreators.getClosedProjectList())



    }
});

export default connect(mapState, mapDispatch)(withRouter(ClosedProject));

