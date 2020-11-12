import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
    NewProjectWrapper
} from "./style";

import {SliderTitle, SliderTitle as NewProjectTitle} from '../homePage/componentStyles/NewProjectDemoStyle';
import {actionCreators} from './store';


class NewProject extends PureComponent {

    render() {
        return (
            <NewProjectWrapper>
                <NewProjectTitle>
                    <div className='title'>精选房源</div>
                    <div className='rec'/>
                    <div><p className='subTitle'>进行深入研究并浏览附近的原始照片，无人机画面，居民评论和当地见解，以了解待售房屋是否适合您。</p></div>
                    <div className='con'>

                        <div>item 6</div>
                        <div>item 7</div>
                        <div>item 8</div>
                        <div>item 9</div>
                        <div>item 10</div>
                        <div>item 11</div>
                    </div>
                </NewProjectTitle>

            </NewProjectWrapper>
        )
    }

    /*    componentDidMount() {
            this.props.getDetail(this.props.match.params.id);
        }*/


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({});
const mapDispatch = (dispatch) => ({})

export default connect(mapState, mapDispatch)(withRouter(NewProject));


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
