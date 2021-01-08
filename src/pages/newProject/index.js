import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
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
                    {this.getItemImgContainer(item.get("id"), constants.PROXY_URL+item.get("avatar"), item.get("location"))}
                    {/*价格和租金*/}
                    {this.getItemPriceContaner(item.get("price"), item.get("status"), item.get("area"), item.get("status"))}
                    {/*预期数据*/}
                    {this.getMarginContainer(item.get("full_addr"), item.get("flipping_cost"), item.get("leasing_fee"), item.get("cash_flow_loan"), item.get("cash_flow_cash"), item.get("platform_loan"))}
                </ContainerItem>
            )
            return null;
        })
    }
    //图
    getItemImgContainer(id, imgUrl, location) {
        return (
            <ItemImgContainer>
                <img src={imgUrl} alt="" className='house-img no-select'/>
                <AdditionInfo>
                    <div className='addition-info-content'>
                        <City>
                            <img src={constants.ADDR_ICON} alt="" className='addr-icon'/>
                            <span className='city-name'>{location}</span>
                        </City>
                        <Link to={'/new-project/detail/'+id}>
                        <MoreInfo className='no-select button'>
                            <span>详情</span>
                            <img src={constants.MORE_INFO_ICON} alt=""/>
                        </MoreInfo></Link>
                    </div>
                </AdditionInfo>
            </ItemImgContainer>
        )
    };

    // 价格和租金
    getItemPriceContaner(price, month, area, status) {

        return (
            <ItemPriceContainer>
                <div className='leasing-fee'>
                    <span className='price'>{price}</span>
                    <span className='per-month'>{month==="正在出租"?"/月":""}</span>
                </div>
                <div className='area rental'>
                    <span>{area + "/"+status}</span></div>
            </ItemPriceContainer>
        )
    };

    // 预期数据
    getMarginContainer(full_addr, flipping_cost, leasing_fee, cash_flow_loan, cash_flow_cash, platform_loan) {
        return (
            <MarginContainer>
                <MarginContainerLeft className='margin-container'>
                    {this.getMarginItem(constants.FULL_ADDR, full_addr)}
                    {this.getMarginItem(constants.FLIPPING_BUDGET, flipping_cost)}
                    {this.getMarginItem(constants.CASH_FLOW_CASH, cash_flow_cash)}

                </MarginContainerLeft>
                <MarginContainerRight className='margin-container'>
                    {this.getMarginItem(constants.PLATFORM_LOAN, platform_loan)}
                    {this.getMarginItem(constants.LEASING_FEE, leasing_fee)}
                    {this.getMarginItem(constants.CASH_FLOW_LOAN, cash_flow_loan)}

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


