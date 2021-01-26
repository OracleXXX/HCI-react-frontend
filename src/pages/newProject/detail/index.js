import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import Slider from "react-slick";

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
    NextArrow,
    PrevArrow


} from './style';
import * as constants from "../store/constants";
import * as router from "../../../common/api/router";
import * as file from "../../../common/api/file";

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

    scrollToMyRef = () => window.scrollTo(0, this.ScrollTo.current.offsetTop - 100)

    render() {
        return (
            <NewProjectDetailWrapper ref={this.ScrollTo}>
                <NewProjectDetailContainer>
                    {this.getTitlePath()}
                    {this.getSlider()}
                    {this.getDataDescription()}
                    {this.getTextDescription()}
                    {this.getBasicInfo()}
                    {this.getEmbeddedContactUs()}
                </NewProjectDetailContainer>
            </NewProjectDetailWrapper>
        )
    }

    getTitlePath() {
        return (
            <TitlePath>
                <Link to={router.PATH.NEW_PROJECT_DETAIL + this.props.match.params.id}>
                    <span className="title-path">{constants.TITLE_PATH.CURR}</span>
                </Link>
                <Link to={router.PATH.NEW_PROJECT}>
                    <span className="title-path">{constants.TITLE_PATH.PREV_PATH}</span>
                </Link>
                <Link to={router.PATH.NEW_PROJECT_DETAIL + this.props.match.params.id}>
                    <span className="title-path">{constants.TITLE_PATH.CURR_PATH}</span>
                </Link>
            </TitlePath>
        )

    };

    getSlider() {
        const {nav1, nav2} = this.state;
        const {imageList} = this.props
        return (
            <SliderWrapper>
                <SliderTop>
                    <PrevArrow className="button" onClick={this.previous}/>
                    <Slider asNavFor={nav2} ref={slider => (this.slider1 = slider)} arrows={false} dots={true}
                            lazyLoad={true}
                            swipeToSlide={true}>
                        {
                            imageList.map((item, index) => {
                                return (
                                    <SliderItemTop key={index}>
                                        <img
                                            src={file.PROXY_URL.NEW_PROJECT_IMAGES + this.props.match.params.id + "/" + item}
                                            alt=""
                                            key={index}/>
                                    </SliderItemTop>
                                )
                            })
                        }
                    </Slider>
                    <NextArrow className="button" onClick={this.next}/>
                </SliderTop>
                <SliderBottom>
                    <Slider asNavFor={nav1} ref={slider => (this.slider2 = slider)} slidesToShow={5}
                            swipeToSlide={true} focusOnSelect={true} arrows={false}>
                        {
                            imageList.map((item, index) => {
                                return (
                                    <SliderItemBottom key={index}>
                                        <img
                                            src={file.PROXY_URL.NEW_PROJECT_IMAGES + "/" + this.props.match.params.id + "/" + item}
                                            alt=""
                                            key={index}/>
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

    getDataDescription() {

    };

    getTextDescription() {

    };

    getBasicInfo() {

    };

    getEmbeddedContactUs() {

    };

    componentDidMount() {
        this.scrollToMyRef();
        this.props.getNewProjectDetail(this.props.match.params.id)
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });


    }
}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({
    newProjectDetail: state.getIn(['newProject', 'newProjectDetail']),
    imageList: state.getIn(['newProject', 'imageList'])
});
const mapDispatch = (dispatch) => ({
    getNewProjectDetail(id) {
        dispatch(actionCreators.getNewProjectDetail(id))
    }
});

export default connect(mapState, mapDispatch)(withRouter(NewProjectDetail));