import React, {Fragment, PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as Constants from './store/constants';
import contactUsImg from '../../statics/imgs/contactUs/contactUsPic.png';
import {Form, Button} from 'react-bootstrap';

import {ActivityTitle as ContactUsTitle} from "../oneStepService/activities/style";
import {
    ContactUsWrapper,
    ContactUsContainer,
    LocationItem,
    LocationContent,
    City,
    Addr,
    Email,
    QRCodeItem,
    FormContainer,
    DivLine
} from './style';
import {actionCreators, constants} from "./store";
import {actionCreators as HeaderActionCreators} from "../../common/header/store";

class ContactUs extends PureComponent {
    constructor(props) {
        super(props)
        this.ScrollTo = React.createRef()   // Create a ref object
    }

    scrollToMyRef = () => window.scrollTo(0, this.ScrollTo.current.offsetTop - 100)

    render() {
        return (

            <ContactUsWrapper ref={this.ScrollTo} className='scale-control'>
                <ContactUsTitle>
                    <div className='title'>联系我们</div>
                    <div className='rec'/>
                </ContactUsTitle>
                <ContactUsContainer>
                    <LocationItem>{this.getLocationContent()}</LocationItem>
                    <DivLine/>
                    <QRCodeItem>{this.getQRCodeItem()}</QRCodeItem>
                </ContactUsContainer>
                <FormContainer>
                    <img src={contactUsImg} alt="" className="top-right-img no-select"/>
                    <Form className='container-form'>
                        {this.getFormGroups()}
                        {this.getCommentsFormGroups()}


                        <Button variant="primary" type="submit" className='form-button no-select'>
                            提交
                        </Button>
                    </Form>
                </FormContainer>


            </ContactUsWrapper>

        )
    }
    getLocationContent() {
        return (
            <LocationContent>
                <City>{constants.LOCATION[0]}</City>
                <Addr><img src={constants.ADDR_ICON} alt="" className='no-select'/>{constants.LOCATION[1]}</Addr>
                <Email><img src={constants.EMAIL_ICON} alt="" className='no-select'/>{constants.LOCATION[2]}</Email>
            </LocationContent>
        )
    }

    getQRCodeItem() {

        return (
            <Fragment>
                <div className='img-border'>
                    <img src={constants.QR_CODE} alt="" className='no-select'/>
                </div>
                <div>Home Cap Inc 客服</div>
            </Fragment>
        )
    }

    getFormGroups() {
        const dataList = constants.CONTACT_US.DATA;
        let formGroupList = [];
        dataList.map((item, index) => {
            formGroupList.push(
                <Form.Group controlId={item.CONTROL_ID} className='form-group no-select' key={index}>
                    <Form.Label className='form-label'><span className="star">* </span>{item.LABEL}</Form.Label>
                    <Form.Control required type={item.TYPE} aria-describedby={item.ARIA_DESCRIBEDBY}
                                  placeholder={item.PLACEHOLDER} />
                    <Form.Text id={item.ARIA_DESCRIBEDBY} muted className='form-text'>
                        {item.HELP_TEXT}
                    </Form.Text>
                </Form.Group>
            )
        });
        return formGroupList;
    }

    getCommentsFormGroups() {
        const {COMMENTS} = constants.CONTACT_US;
        return (
            <Form.Group controlId={COMMENTS.CONTROL_ID} className='form-group no-select form-group-comments'>
                <Form.Label className='form-label'><span className="star">* </span>{COMMENTS.LABEL}</Form.Label>
                <Form.Control className='comments' as={COMMENTS.AS} rows={4}
                              aria-describedby={COMMENTS.ARIA_DESCRIBEDBY} placeholder={COMMENTS.PLACEHOLDER}/>
                <Form.Text id={COMMENTS.ARIA_DESCRIBEDBY} muted>
                    {Constants.COMMENT_HELP_TEXT}
                </Form.Text>
            </Form.Group>
        )
    }

    componentDidMount() {
        this.props.hideShowBanner()
        this.scrollToMyRef()
    }
}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({
    hideShowBanner() {
        dispatch(HeaderActionCreators.changeShowBanner(true));
    }
})

export default connect(mapState, mapDispatch)(withRouter(ContactUs));

