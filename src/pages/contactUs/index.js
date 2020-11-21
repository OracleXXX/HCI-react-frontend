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


class ContactUs extends PureComponent {
    constructor(props) {
        super(props)
        this.ScrollTo = React.createRef()   // Create a ref object
    }
    scrollToMyRef = () => window.scrollTo(0, this.ScrollTo.current.offsetTop - 100)
    render() {
        console.log(this.props.testList)
        return (

            <ContactUsWrapper ref={this.ScrollTo}>
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

                            <Form.Control as="textarea" rows={4} className='comments'/>

                            <Form.Text id="commentsInfo" muted>
                                {Constants.COMMENT_HELP_TEXT}
                            </Form.Text>
                        </Form.Group>

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
        this.getTest()
        return (
            <Fragment>
                <div className='img-border'>
                    <img src={constants.QR_CODE} alt="" className='no-select'/>
                </div>
                <div>Home Cap Inc 客服</div>
            </Fragment>
        )
    }
    getTest(){
        this.props.testList.map(item=>{
            console.log(item.get("email"))
            }
        )
    }

        componentDidMount() {
            this.scrollToMyRef()
            this.props.handleTest(this.props.testList)
        }


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({
    testList: state.getIn(['contactUs', 'test'])
});
const mapDispatch = (dispatch) => ({
    handleTest(list) {
        list.size===0&&dispatch(actionCreators.handleTest());
    }
})

export default connect(mapState, mapDispatch)(withRouter(ContactUs));

