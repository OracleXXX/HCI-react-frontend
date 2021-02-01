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
import {fromJS} from "immutable";
import {actionCreators as HeaderActionCreators} from "../../common/header/store";

const demo_list = [];

class NewProject extends PureComponent {
    constructor(props) {
        super(props)
        this.ScrollTo = React.createRef()   // Create a ref object
    }

    scrollToMyRef = () => window.scrollTo(0, this.ScrollTo.current.offsetTop - 100)

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
            return demo_list.slice(0, page * 6)
        }
    }

    //把数据放入totalList
    changeDemoList() {
        const {newProjectList} = this.props;
        if (demo_list.length > 0) {
            return
        }
        newProjectList.map((item) => {
            demo_list.push(
                <ContainerItem key={item.get("id")}>
                    {/*图*/}
                    {this.getItemImgContainer(
                        item,
                        constants.PROXY_URL + item.get("avatar"),)}
                    {/*价格和租金*/}
                    {this.getItemPriceContaner(item.get("price"), item.get("status"), item.get("area"), item.get("status"))}
                    {/*预期数据*/}
                    {this.getMarginContainer(
                        item.get("full_addr"),
                        item.get("city"),
                        item.get("state"),
                        item.get("zip_code"),
                        item.get("flipping_cost"),
                        item.get("leasing_fee"),
                        item.get("cash_flow_loan"),
                        item.get("cash_flow_cash"),
                        item.get("platform_loan")
                    )}
                </ContainerItem>
            )
            return null;
        })
    }

    //图
    getItemImgContainer(params, imgUrl) {
        return (
            <ItemImgContainer>
                <img src={imgUrl} alt="" className='house-img no-select'/>
                <AdditionInfo>
                    <div className='addition-info-content'>
                        <City>
                            <img src={constants.ADDR_ICON} alt="" className='addr-icon'/>
                            <span className='city-name'>{params.get("city")}</span>
                        </City>
                        <Link to={'/new-project/detail/' + params.get("id")}>
                            <MoreInfo className='no-select button'>
                                <span>详情</span>
                                <img src={constants.MORE_INFO_ICON} alt=""/>
                            </MoreInfo>
                        </Link>
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
                    <span className='per-month'>{month === "正在出租" ? "/月" : ""}</span>
                </div>
                <div className='area rental'>
                    <span>{area + "/" + status}</span></div>
            </ItemPriceContainer>
        )
    };

    // 预期数据
    getMarginContainer(full_addr, city, state, zip_code, flipping_cost, leasing_fee, cash_flow_loan, cash_flow_cash, platform_loan) {
        return (
            <MarginContainer>
                <MarginContainerLeft className='margin-container'>
                    {this.getMarginItem(constants.FULL_ADDR, full_addr, city, state, zip_code)}

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
    getMarginItem(name, content, city = "", state = "", zip_code = "") {
        return (
            <MarginItem>
                <div className='margin-item-name'>{name}：</div>
                <div className='margin-item-info'>
                    {content} {name === constants.FULL_ADDR ? ", " + state + ", " + zip_code : " "}
                </div>

            </MarginItem>
        )
    };


    componentDidMount() {
        this.props.hideShowBanner()
        this.props.getNewProject(this.props.newProjectList);
        this.scrollToMyRef()
    }
}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({
    newProjectList: state.getIn(['newProject', 'newProjectList']),
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
    hideShowBanner() {
        dispatch(HeaderActionCreators.changeShowBanner(true));
    },
})

export default connect(mapState, mapDispatch)(withRouter(NewProject));


