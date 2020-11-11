import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import {actionCreators} from './store';


class OurTeam extends PureComponent {

    render() {
        return (
            <div className='testdiv'>团队背景</div>
        )
    }
/*    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }*/


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({


});
const mapDispatch = (dispatch) => ({



})

export default connect(mapState, mapDispatch)(withRouter(OurTeam));


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
