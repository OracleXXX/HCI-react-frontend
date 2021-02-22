import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import Slider from "react-slick";
import {actionCreators as HeaderActionCreators} from "../../../common/header/store/";
import {actionCreators} from "../store";
import {

    NewProjectDetailWrapper,
    NewProjectDetailContainer,
    TitlePath,
    SliderWrapper,
    SliderTop,
    SliderItemTop,
    SliderBottom,
    SliderItemBottom,
    ImgContainer,
    NextArrow,
    PrevArrow,
    DataDescription,
    DataContainer,
    Price,
    Size,
    Location,
    EmbeddedMap,
    LoanPayment,
    Calculator,
    Status,

    HouseInfoWrapper,
    HouseInfoTitle,
    HouseInfo,

    BasicInfoWrapper,
    BasicInfoTitle,
    BasicInfo,
    BasicInfoCol,
    BasicInfoItem,

    EmbeddedContactUsWrapper,
    ContactUsContainer,
    ContactUsTitle,

    FormContainer
} from './style';
import * as constants from "../store/constants";
import {constants as contactUsConstants} from '../../contactUs/store';
import {new_project as newProjectRouter} from '../../../router/router';
import {Button, Form} from "react-bootstrap";
import {images_domain} from "../../../common/api/api";

class NewProjectDetail extends PureComponent {
    constructor(props) {
        super(props);
        //绑定this
        this.id = this.props.match.params.id
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.ScrollTo = React.createRef()   // Create a ref object
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    scrollToMyRef = () => window.scrollTo(0, 0)

    render() {
        const {newProjectOverview, newProjectDetail, imageList} = this.props;
        return (
            <NewProjectDetailWrapper ref={this.ScrollTo}>
                <NewProjectDetailContainer>
                    {this.getTitlePath()}
                    {this.getSlider(imageList)}
                    {this.getDataDescription(newProjectOverview, newProjectDetail)}
                    {this.getHouseInfo(newProjectDetail.get("house_info"))}
                    {this.getBasicInfo(newProjectOverview, newProjectDetail)}
                    {this.getEmbeddedContactUs()}
                </NewProjectDetailContainer>
            </NewProjectDetailWrapper>
        )
    }

    getTitlePath() {
        return (
            <TitlePath className="no-select">
                <Link to={newProjectRouter.detail + this.props.match.params.id}>
                    <span className="title-path">{constants.STATIC.TITLE_PATH.CURR}</span>
                </Link>
                <Link to={newProjectRouter.path}>
                    <span className="title-path">{constants.STATIC.TITLE_PATH.PREV_PATH}</span>
                </Link>
                <Link to={newProjectRouter.detail + this.props.match.params.id}>
                    <span className="title-path-curr">{constants.STATIC.TITLE_PATH.CURR_PATH}</span>
                </Link>
            </TitlePath>
        )
    };

    getSlider(imageList) {
        const {nav1, nav2} = this.state;
        return (
            <SliderWrapper className="no-select">
                <SliderTop>
                    <PrevArrow className="button" onClick={this.previous}>
                        <img src={constants.PROJECT_DETAIL_IMAGES.PREV_ARROW} alt=""/>
                    </PrevArrow>
                    <Slider asNavFor={nav2} ref={slider => (this.slider1 = slider)} arrows={false} dots={true}
                            lazyLoad={true}
                            swipeToSlide={true}
                            className='slider'

                    >
                        {
                            imageList.map((item, index) => {
                                return (
                                    <SliderItemTop key={index} className='slider'>
                                        <img
                                            src={images_domain + this.props.match.params.id + "/" + item}
                                            alt=""
                                            key={index}/>
                                    </SliderItemTop>
                                )
                            })
                        }
                    </Slider>
                    <NextArrow className="button" onClick={this.next}>
                        <img src={constants.PROJECT_DETAIL_IMAGES.NEXT_ARROW} alt=""/>
                    </NextArrow>
                </SliderTop>
                <SliderBottom>
                    <Slider asNavFor={nav1} ref={slider => (this.slider2 = slider)} slidesToShow={5}
                            swipeToSlide={true} focusOnSelect={true} arrows={false} >
                        {
                            imageList.map((item, index) => {
                                return (
                                    <SliderItemBottom key={index} className='slider'>
                                        <ImgContainer>
                                            <img
                                            src={images_domain + "/" + this.props.match.params.id + "/" + item}
                                            alt=""
                                            />
                                        </ImgContainer>

                                    </SliderItemBottom>
                                )
                            })
                        }
                    </Slider>
                </SliderBottom>
            </SliderWrapper>
        )
    };

    next() {
        this.slider1.slickNext();
    }

    /* 左指针 */
    previous() {
        this.slider1.slickPrev();
    }

    getDataDescription(newProjectOverview, newProjectDetail) {

        return (
            <DataDescription>
                <DataContainer>
                    <div className="data">
                        <Price>{newProjectOverview.get("price")}</Price>
                        <LoanPayment>(按揭$4,691/月)</LoanPayment>
                        <Calculator className="no-select">
                            <img src={constants.PROJECT_DETAIL_IMAGES.CALCULATOR} alt="" />
                            <span className="calculator-name">计算贷款</span>
                        </Calculator>
                    </div>
                    <div className="data">
                        <Size>
                            {newProjectDetail.get("num_of_bedroom")}室/{newProjectDetail.get("num_of_bath_room")}浴/{newProjectOverview.get("area")}
                        </Size>
                        <Status className="no-select">
                            在售
                        </Status>
                    </div>
                    <Location>
                        <img src={constants.PROJECT_DETAIL_IMAGES.LOCATION} alt=""/>
                        <span>
                            {newProjectOverview.get("city")}, {newProjectOverview.get("state")}
                        </span>
                    </Location>
                </DataContainer>
                <EmbeddedMap className="no-select">

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.8153476059288!2d-86.4620463843852!3d35.82900592946002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8863f7ad27260429%3A0x536a357b3d6f125f!2s1609%20Damascus%20Rd%2C%20Murfreesboro%2C%20TN%2037128!5e0!3m2!1sen!2sus!4v1612009737150!5m2!1sen!2sus"

                    />


                </EmbeddedMap>

            </DataDescription>
        )
    };

    getHouseInfo(house_info) {
        return (
            <HouseInfoWrapper>
                <HouseInfoTitle>
                    {constants.STATIC.HOUSE_INFO.HOUSE_INFO_TITLE}
                </HouseInfoTitle>
                <HouseInfo>
                    {house_info}
                </HouseInfo>
            </HouseInfoWrapper>
        )

    };

    getBasicInfo(newProjectOverview, newProjectDetail) {
        return (
            <BasicInfoWrapper>
                <BasicInfoTitle>
                    {constants.STATIC.BASIC_INFO.BASIC_INFO_TITLE}
                </BasicInfoTitle>
                <BasicInfo>
                    {this.getBasicInfoCols([newProjectOverview, newProjectDetail])}
                </BasicInfo>
            </BasicInfoWrapper>
        )

    };

    getBasicInfoCols(database) {
        let basicInfoItems = this.initBasicInfoItems(database, [[], [], []]);
        const res = [];
        let curr_index = 0;
        for (let i = 0; i < 3; i++) {
            res.push(
                <BasicInfoCol key={i}>
                    {basicInfoItems[curr_index]}
                </BasicInfoCol>
            );
            curr_index += 1;
        }
        return res;
    };

    initBasicInfoItems(database, basicInfoItems) {
        const dataList = constants.STATIC.BASIC_INFO.DATA
        let currIndex = 0;
        let name = "";
        let param = "";
        let pos = 0;
        dataList.map((item) => {
            name = item.NAME;
            param = item.PARAM;
            pos = item.INDEX;
            basicInfoItems[currIndex].push(
                <BasicInfoItem key={param}>
                    <span className="basic-info-item-name">{name}</span>
                    <span className="basic-info-item-data">{database[pos].get(param)}</span>
                </BasicInfoItem>
            )
            if (basicInfoItems[currIndex].length === 5) {
                currIndex += 1;
            }
        })
        return basicInfoItems;
    };


    getEmbeddedContactUs() {
        const {CONTACT_US} = contactUsConstants
        return (
            <EmbeddedContactUsWrapper className="no-select">
                <img src={CONTACT_US.IMAGES.BG} alt=""/>
                <ContactUsContainer>
                    <ContactUsTitle>{CONTACT_US.TITLE}</ContactUsTitle>
                    <FormContainer >
                        <Form className='container-form'>
                            {this.getFormGroup()}
                            <Button variant="primary" type="submit" className='form-button'>
                                {CONTACT_US.BUTTON}
                            </Button>
                        </Form>
                    </FormContainer>

                </ContactUsContainer>
            </EmbeddedContactUsWrapper>
        )

    };

    getFormGroup() {
        const dataList = constants.STATIC.CONTACT_US.DATA;
        let formGroupList = []
        dataList.map((item, index) => {
            formGroupList.push (
                <Form.Group controlId={item.CONTROL_ID} className='form-group no-select' key={index}>
                    <Form.Label className='form-label'><span className="star">* </span>{item.LABEL}</Form.Label>
                    <Form.Control required type={item.TYPE} aria-describedby={item.ARIA_DESCRIBEDBY} placeholder={item.PLACEHOLDER}/>
                </Form.Group>
            )
        });
        return formGroupList;
    }
    componentDidMount() {
        this.props.hideShowBanner()
        const {id} = this.props.match.params;
        this.scrollToMyRef();
        this.props.getNewProjectDetail(id);
        this.props.getNewProjectOverview(id);
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });


    }
}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({
    newProjectDetail: state.getIn(['newProject', 'newProjectDetail']),
    imageList: state.getIn(['newProject', 'imageList']),
    newProjectOverview: state.getIn(['newProject', 'newProjectOverview']),
    basicInfoItems: state.getIn(['newProject', 'basicInfoItems'])
});
const mapDispatch = (dispatch) => ({
    hideShowBanner() {
        dispatch(HeaderActionCreators.changeShowBanner(false));
    },
    getNewProjectDetail(id) {
        dispatch(actionCreators.getNewProjectDetail(id));
    },
    getNewProjectOverview(id) {
        dispatch(actionCreators.getNewProjectOverview(id));
    },
});

export default connect(mapState, mapDispatch)(withRouter(NewProjectDetail));