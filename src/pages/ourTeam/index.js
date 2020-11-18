import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import pic from '../../statics/imgs/footer/footerPic.png';
import {ContactUSTitle} from "../contactUs/style";


class OurTeam extends PureComponent {

    render() {
        return (
            <div>
                <ContactUSTitle>
                    <div className='title'>团队背景</div>
                    <div className='rec'/>
                </ContactUSTitle>
                <div className='eqheight'>
                    <div>
                        <img src={pic} width="100" height="100"/>
                    </div>
                    <div>
                        <img src={pic} width="100" height="100"/>
                    </div>
                    <div>
                        <img src={pic} width="100" height="100"/>
                    </div>
                    <div>
                        <img src={pic} width="100" height="100"/>
                    </div>
                </div>

                <br/>

                <div className='eqheight'>
                    <div>
                        <img src={pic} width="100" height="100"/>
                    </div>
                    <div>
                        <img src={pic} width="100" height="100"/>
                    </div>
                    <div>
                        <img src={pic} width="100" height="100"/>
                    </div>
                    <div>
                        <img src={pic} width="100" height="100"/>
                    </div>
                </div>
            </div>
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
