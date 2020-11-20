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
import {constants} from "./store";


class ContactUs extends PureComponent {
    render() {
        return (

            <ContactUsWrapper>
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
                    <img src={contactUsImg} alt="" className="top-right-img"/>
                    <Form className='container-form'>
                        <Form.Group controlId="exampleForm.ControlInput1" className='form-group'>
                            <Form.Label className='form-label'>姓名</Form.Label>

                            <Form.Control required type="name" aria-describedby="nameInfo"/>

                            <Form.Text id="nameInfo" muted className='form-text'>
                                {Constants.NAME_HELP_TEXT}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>电子邮箱</Form.Label>

                            <Form.Control required type="email" aria-describedby="emailInfo"/>

                            <Form.Text id="emailInfo" muted className='help-text'>
                                {Constants.EMAIL_HELP_TEXT}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPhoneNumber">
                            <Form.Label>电话号码</Form.Label>

                            <Form.Control type="name" aria-describedby="phone"/>

                            <Form.Text id="phone" muted>
                                {Constants.PHONE_HELP_TEXT}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicWechat">
                            <Form.Label>微信号</Form.Label>

                            <Form.Control type="text" aria-describedby="wechatInfo"/>

                            <Form.Text id="wechatInfo" muted>
                                {Constants.WECHAT_HELP_TEXT}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicComments">
                            <Form.Label>您的留言</Form.Label>

                            <Form.Control as="textarea" rows={4} id='comments' />

                            <Form.Text id="commentsInfo" muted>
                                {Constants.COMMENT_HELP_TEXT}
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit" className='form-button'>
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
                <Addr><img src={constants.ADDR_ICON} alt=""/>{constants.LOCATION[1]}</Addr>
                <Email><img src={constants.EMAIL_ICON} alt=""/>{constants.LOCATION[2]}</Email>
            </LocationContent>
        )
    }
    getQRCodeItem() {
        return (
            <Fragment>
                <div className='img-border'>
                    <img src={constants.QR_CODE} alt=""/>
                </div>
                <div>Home Cap Inc 客服</div>
            </Fragment>
        )
    }

    /*    componentDidMount() {
            this.props.getDetail(this.props.match.params.id);
        }*/


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({})

export default connect(mapState, mapDispatch)(withRouter(ContactUs));


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