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
    MarginItem,
    SeeMore
} from "./style";

import {
    SliderTitle as NewProjectTitle
} from '../homePage/componentStyles/NewProjectDemoStyle';
import {actionCreators} from './store';
import {constants} from './store'

const demoList = [];

class NewProject extends PureComponent {
    constructor(props) {
        super(props)
        this.ScrollTo = React.createRef()   // Create a ref object
    }

    scrollToMyRef = () => window.scrollTo(0, this.ScrollTo.current.offsetTop-100)
    // 渲染
    render() {
        const {page, totalPage} = this.props;
        this.changeDemoList()
        return (
            <NewProjectWrapper ref={this.ScrollTo}>
                <NewProjectTitle>
                    <div className='title'>精选房源</div>
                    <div className='rec no-select'/>
                    <div><p className='subTitle'>进行深入研究并浏览附近的原始照片，无人机画面，居民评论和当地见解，以了解待售房屋是否适合您。</p></div>
                </NewProjectTitle>

                <NewProjectContainer>{this.getNewProjectContainer(page, totalPage)}</NewProjectContainer>
                {
                    page < totalPage
                        ? <SeeMore
                            onClick={() => this.props.handleGetMorePages(page)}
                            className="button"
                        >
                            <div className="see-more">
                                <span>查看更多</span>
                                <img src={constants.SEE_MORE_ICON} alt="" className="see-more-icon"/>
                            </div>
                        </SeeMore>
                        : null
                }

            </NewProjectWrapper>
        )
    }

    //所有房源
    getNewProjectContainer(page, totalPage) {
        if (page <= totalPage) {
            return demoList.slice(0, page * 6)
        }
    }

    //把数据放入totalList
    changeDemoList() {
        const {newProjectList} = this.props;
        if (demoList.length > 0) {
            return
        }
        newProjectList.map((item) => {
            demoList.push(
                <ContainerItem key={item.get("id")}>
                    {/*图*/}
                    {this.getItemImgContainer(item.get("imgUrl"), item.get("location"))}
                    {/*价格和租金*/}
                    {this.getItemPriceContaner(item.get("price"), item.get("month"), item.get("area"), item.get("rental"))}
                    {/*预期数据*/}
                    {this.getMarginContainer(item.get("fullAddr"), item.get("flippingBudget"), item.get("expectedRentalRateOfReturn"), item.get("expectedCashRateOfReturn"), item.get("expectedNetRateOfReturn"), item.get("platformLoan"))}
                </ContainerItem>
            )
            return null;
        })
    }


    //图
    getItemImgContainer(imgUrl, location) {
        return (
            <ItemImgContainer>
                <img src={imgUrl} alt="" className='house-img no-select'/>
                <AdditionInfo>
                    <div className='addition-info-content'>
                        <City>
                            <img src={constants.ADDR_ICON} alt="" className='addr-icon'/>
                            <span className='city-name'>{location}</span>
                        </City>
                        <MoreInfo className='no-select button'>
                            <span>详情</span>
                            <img src={constants.MORE_INFO_ICON} alt=""/>
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
    getMarginContainer(fullAddr, expectCash, expectRate, expectRentalIncome, expectRemodel, platformLoan) {
        const newNames = this.props.names.toJS()
        return (
            <MarginContainer>
                <MarginContainerLeft className='margin-container'>
                    {this.getMarginItem(constants.FULL_ADDR, fullAddr)}
                    {this.getMarginItem(constants.FLIPPING_BUDGET, expectRemodel)}
                    {this.getMarginItem(constants.EXPECTED_RENTAL_RATE_OF_RETURN, expectCash)}

                </MarginContainerLeft>
                <MarginContainerRight className='margin-container'>
                    {this.getMarginItem(constants.EXPECTED_CASH_RATE_OF_RETURN, expectRate)}
                    {this.getMarginItem(constants.EXPECTED_NET_INCOME, expectRentalIncome)}
                    {this.getMarginItem(constants.PLATFORM_LOAN, platformLoan)}
                </MarginContainerRight>
            </MarginContainer>
        )
    }

    // 每个预期数内容
    getMarginItem(name, content) {
        return (
            <MarginItem>
                <span className='margin-item-name'>{name}：</span>
                <span className='margin-item-info'>{content}</span>
            </MarginItem>
        )
    };


    componentDidMount() {
        this.props.getNewProject(this.props.newProjectList);
        this.scrollToMyRef()
    }
}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({
    newProjectList: state.getIn(['newProject', 'newProjectList']),
    names: state.getIn(['newProject', 'expectationName']),
    page: state.getIn(['newProject', 'page']),
    totalPage: state.getIn(['newProject', 'totalPage'])
});
const mapDispatch = (dispatch) => ({
    getNewProject(newProjectList) {
        newProjectList.size === 0 && dispatch(actionCreators.getNewProject());

    },
    handleGetMorePages(page) {

        dispatch(actionCreators.getMorePages(page + 1));


    },
})

export default connect(mapState, mapDispatch)(withRouter(NewProject));


