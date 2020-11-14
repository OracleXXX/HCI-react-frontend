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
import addrIcon from "../../statics/imgs/homePageImgs/addrIcon.png";
import moreInfoIcon from "../../statics/imgs/homePageImgs/moreInfoIcon.png";
import seeMoreIcon from "../../statics/imgs/newProject/seeMoreIcon.png"
import {fromJS} from "immutable";

const totalList = [];
const demoList = [];

class NewProject extends PureComponent {
    constructor(props) {
        super(props);
    }

    //把数据放入demoList
    changeDemoList() {
        const {newProjectList} = this.props;
        const numOfProject = newProjectList.size
        if (totalList.length === numOfProject) {
            return
        }
        newProjectList.map((item, index) => {
            totalList.push(
                <ContainerItem key={item.get("id")}>
                    {/*图*/}
                    {this.getItemImgContainer(item.get("imgUrl"), item.get("addr"))}
                    {/*价格和租金*/}
                    {this.getItemPriceContaner(item.get("price"), item.get("month"), item.get("area"), item.get("rental"))}
                    {/*预期数据*/}
                    {this.getMarginContainer(item.get("fullAddr"), item.get("expectCash"), item.get("expectRate"), item.get("expectRentalIncome"), item.get("expectRemodel"), item.get("platformLoan"))}
                </ContainerItem>)
        })
    }

    //所有房源
    getNewProjectContainer(page, totalPage) {
        this.changeDemoList()
        console.log("totalLIst " + demoList.length)
        if (page <= totalPage) {
            for (let i = Math.max(page - 1, 0) * 6; i < page * 6; i++) {
                demoList.push(totalList[i])
            }
        }
        return (
            <NewProjectContainer>{demoList}</NewProjectContainer>
        )
    }

    //图
    getItemImgContainer(imgUrl, addr) {
        return (
            <ItemImgContainer>
                <img src={imgUrl} alt="" className='house-img no-select'/>
                <AdditionInfo>
                    <div className='addition-info-content'>
                        <City>
                            <img src={addrIcon} alt="" className='addr-icon'/>
                            <span className='city-name'>{addr}</span>
                        </City>
                        <MoreInfo className='no-select'>
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
    getMarginContainer(fullAddr, expectCash, expectRate, expectRentalIncome, expectRemodel, platformLoan) {
        const newNames = this.props.names.toJS()
        return (
            <MarginContainer>
                <MarginContainerLeft className='margin-container'>
                    {this.getMarginItem(newNames[0], fullAddr)}
                    {this.getMarginItem(newNames[1], expectCash)}
                    {this.getMarginItem(newNames[2], expectRate)}
                </MarginContainerLeft>
                <MarginContainerRight className='margin-container'>
                    {this.getMarginItem(newNames[3], expectRentalIncome)}
                    {this.getMarginItem(newNames[4], expectRemodel)}
                    {this.getMarginItem(newNames[5], platformLoan)}
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
    // 渲染
    render() {
        const {page, totalPage} = this.props;
        return (
            <NewProjectWrapper>
                <NewProjectTitle>
                    <div className='title'>精选房源</div>
                    <div className='rec no-select'/>
                    <div><p className='subTitle'>进行深入研究并浏览附近的原始照片，无人机画面，居民评论和当地见解，以了解待售房屋是否适合您。</p></div>
                </NewProjectTitle>

                {this.getNewProjectContainer(page, totalPage)}
                {
                    page < totalPage
                        ? <SeeMore
                            onClick={() => this.props.handleGetMorePages(page)}
                        >
                            <div className="see-more">
                                <span>查看更多</span>
                                <img src={seeMoreIcon} alt="" className="see-more-icon"/>
                            </div>
                        </SeeMore>
                        : null
                }

            </NewProjectWrapper>
        )
    }

    componentDidMount() {
        this.props.getNewProject()
        this.changeDemoList()
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
    getNewProject() {
        dispatch(actionCreators.getNewProject());

    },
    handleGetMorePages(page) {

        dispatch(actionCreators.getMorePages(page + 1));


    },
})

export default connect(mapState, mapDispatch)(withRouter(NewProject));


