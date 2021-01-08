import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {actionCreators} from "../store";

class NewsFeedDetail extends PureComponent {


}
//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({

});
const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(withRouter(NewsFeedDetail));