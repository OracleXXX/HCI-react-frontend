import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {DetailWrapper, Header, Content} from "./style";
import {actionCreators} from './store';


class Detail extends PureComponent {

    render() {
        const {title, content} = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content
                    dangerouslySetInnerHTML={{__html: content}}

                />
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])

});
const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));

    }
})

export default connect(mapState, mapDispatch)(withRouter(Detail));


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
