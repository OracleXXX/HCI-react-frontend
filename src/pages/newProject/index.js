import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
    NewProjectWrapper,
    NewProjectContainer,
    ContainerItem,
    ItemImgContainer,
    AdditionInfo,
    City,
    MoreInfo,
    ItemPriceContainer,
    MarginContainer,
    MarginContainerLeft,
    MarginContainerRight,
    MarginItem
} from "./style";

import {
    SliderTitle as NewProjectTitle
} from '../homePage/componentStyles/NewProjectDemoStyle';
import {actionCreators} from './store';
import addrIcon from "../../statics/imgs/homePageImgs/addrIcon.png";
import moreInfoIcon from "../../statics/imgs/homePageImgs/moreInfoIcon.png";

class NewProject extends PureComponent {

/*
*         "fullAddr": "252 BrookHollow, Nashville",
        "expectCash": "$201",
        "expectRate": "12%",
        "expectRentalIncome": "$2011",
        "expectRemodel": "$20000",
        "platformLoan": "$500000",
        "marginItem": {*/
    //图
    getItemImgContainer(imgUrl, addr) {
        return (
            <ItemImgContainer>
                <img src={imgUrl} alt="" className='house-img'/>
                <AdditionInfo>
                    <div className='addition-info-content'>
                        <City>
                            <img src={addrIcon} alt="" className='addr-icon'/>
                            <span className='city-name'>{addr}</span>
                        </City>
                        <MoreInfo>
                            <span>详情</span>
                            <img src={moreInfoIcon} alt=""/>
                        </MoreInfo>
                    </div>
                </AdditionInfo>
            </ItemImgContainer>
        )
    };
    // 价格和租金
    getItemPriceContaner(price, month, area, rental) {
        return (
            <ItemPriceContainer>
                <div className='leasing-fee'>
                    <span className='price'>{price}</span>
                    <span className='per-month'>{month}</span>
                </div>
                <div className='area rental'>
                    <span>{area + rental}</span></div>
            </ItemPriceContainer>
        )
    };
    // 预期数据
    getMarginItem(name, content) {
        return (

            <MarginItem>
                <span className='margin-item-name'>{name}：</span>
                <span className='margin-item-info'>{content}</span>
            </MarginItem>
        )
    };


    render() {
        const {newProjectList} = this.props;
        return (

            <NewProjectWrapper>
                <NewProjectTitle>
                    <div className='title'>精选房源</div>
                    <div className='rec'/>
                    <div><p className='subTitle'>进行深入研究并浏览附近的原始照片，无人机画面，居民评论和当地见解，以了解待售房屋是否适合您。</p></div>
                </NewProjectTitle>
                <NewProjectContainer>
                    {
                        newProjectList.map((item, index) => {
                            return (
                                <ContainerItem key={index}>
                                    {/*图*/}
                                    {this.getItemImgContainer(item.get("imgUrl"), item.get("addr"))}
                                    {/*价格和租金*/}
                                    {this.getItemPriceContaner(item.get("price"), item.get("month"), item.get("area"), item.get("rental"))}
                                    {/*预期数据*/}
                                    <MarginContainer>
                                        <MarginContainerLeft className='margin-container'>
                                            {
                                                item.getIn(["marginItem", "left"]).map((item2) => {
                                                    return (
                                                        this.getMarginItem(item2.get("name"), item2.get("content"))
                                                    )
                                                })
                                            }
                                        </MarginContainerLeft>
                                        <MarginContainerRight className='margin-container'>
                                            {
                                                item.getIn(["marginItem", "right"]).map((item2) => {
                                                    return (
                                                        this.getMarginItem(item2.get("name"), item2.get("content"))
                                                    )
                                                })
                                            }
                                        </MarginContainerRight>
                                    </MarginContainer>
                                </ContainerItem>
                            );
                        })
                    }
                </NewProjectContainer>
            </NewProjectWrapper>
        )
    }

    componentDidMount() {
        this.props.getNewProject();

    }


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({
    newProjectList: state.getIn(['newProject', 'newProjectList'])
});
const mapDispatch = (dispatch) => ({
    getNewProject() {
        dispatch(actionCreators.getNewProject());


    },

})

export default connect(mapState, mapDispatch)(withRouter(NewProject));


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
