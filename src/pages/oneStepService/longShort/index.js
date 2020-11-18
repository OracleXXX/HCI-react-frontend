import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {ActivityTitle as LongShortTitle} from "../../oneStepService/activities/style";
import {
    LongShortWrapper,
} from "./style";


class LongShort extends PureComponent {

    render() {
        return (
            <LongShortWrapper>
                <LongShortTitle>
                    <div className='title'>一站式房屋买卖流程</div>
                    <div className='rec no-select'/>
                </LongShortTitle>

            </LongShortWrapper>
        )
    }

    /*    componentDidMount() {
            this.props.getDetail(this.props.match.params.id);
        }*/


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({})

export default connect(mapState, mapDispatch)(withRouter(LongShort));


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
