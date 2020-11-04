import React, {PureComponent} from 'react';
import { Redirect } from 'react-router-dom';

import {connect} from 'react-redux';
import {Button, Input, LoginBox, LoginWrapper} from "./style";

import {actionCreators} from './store';


class Login extends PureComponent {

    render() {
        const {login, loginStatus} = this.props;

        if (!loginStatus) {
            return (
            <LoginWrapper>login
                <LoginBox>
                    <Input placeholder='账号' ref={(input) => {
                        this.account = input
                    }}/>
                    <Input placeholder='密码' type='password' ref={(input) => {
                        this.password = input
                    }}/>
                    <Button onClick={() => login(this.account, this.password)}>登录</Button>
                </LoginBox>

            </LoginWrapper>
        )
        }else {
            return <Redirect to='/'/>

        }


    }
}
const mapState = (state) => ({
    loginStatus: state.getIn(['login', "login"])
})
//用connect + mapstate 就可以直接取出store中的数据

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value));

    }

})

export default connect(mapState, mapDispatch)(Login);


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
