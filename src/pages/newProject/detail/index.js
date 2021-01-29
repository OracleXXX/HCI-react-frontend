import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import Slider from "react-slick";
import Map from "../../../common/map";
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
    PrevArrow,
    DataDescription,
    DataContainer,
    Prices,
    Size,
    Location,
    EmbeddedMap,
    LoanPayment,
    Calculator,
    Status



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

        const {newProjectOverview, newProjectDetail, imageList} = this.props;
        return (
            <NewProjectDetailWrapper ref={this.ScrollTo}>
                <NewProjectDetailContainer>
                    {this.getTitlePath()}
                    {this.getSlider(imageList)}
                    {this.getDataDescription(newProjectOverview, newProjectDetail)}
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
                    <span className="title-path-curr">{constants.TITLE_PATH.CURR_PATH}</span>
                </Link>
            </TitlePath>
        )

    };

    getSlider(imageList) {
        const {nav1, nav2} = this.state;
        return (
            <SliderWrapper>
                <SliderTop>
                    <PrevArrow className="button" onClick={this.previous}>
                        <img src={constants.ARROWS.PREV} alt=""/>
                    </PrevArrow>
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
                    <NextArrow className="button" onClick={this.next}>
                        <img src={constants.ARROWS.NEXT} alt=""/>
                    </NextArrow>
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

    getDataDescription(newProjectOverview, newProjectDetail) {

        return (
            <DataDescription>
                <DataContainer>
                    <div className="prices">
                        <Prices>{newProjectOverview.get("price")}</Prices>
                        <LoanPayment>(按揭$4,691/月)</LoanPayment>
                        <Calculator>
                            <img src="" alt=""/>
                            <span className="calculator-name">投资计算器</span>
                            </Calculator>
                    </div>
                    <div>
                        <Size>
                            {newProjectDetail.get("num_of_bedroom")}/{newProjectDetail.get("num_of_bath_room")}/{newProjectOverview.get("price")}
                        </Size>
                        <Status>
                            在售
                        </Status>
                    </div>
                    <Location>{newProjectOverview.get("city")}, {newProjectOverview.get("state")}</Location>
                </DataContainer>
                <EmbeddedMap>
                    <Map/>



                </EmbeddedMap>

            </DataDescription>
        )
    };

    getTextDescription() {

    };

    getBasicInfo() {

    };

    getEmbeddedContactUs() {

    };

    componentDidMount() {
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
    newProjectOverview: state.getIn(['newProject', 'newProjectOverview'])
});
const mapDispatch = (dispatch) => ({
    getNewProjectDetail(id) {
        dispatch(actionCreators.getNewProjectDetail(id));
    },
    getNewProjectOverview(id) {
        dispatch(actionCreators.getNewProjectOverview(id));
    },
});

export default connect(mapState, mapDispatch)(withRouter(NewProjectDetail));