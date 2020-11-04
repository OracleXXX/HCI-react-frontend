import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


class Write extends PureComponent {

    render() {
        const {loginStatus} = this.props;

        if (loginStatus) {
            return (
                <div>写文章页面</div>
            )
        } else {
            return <Redirect to='/login'/>

        }


    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', "login"])
})
//用connect + mapstate 就可以直接取出store中的数据


export default connect(mapState, null)(Write);


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
