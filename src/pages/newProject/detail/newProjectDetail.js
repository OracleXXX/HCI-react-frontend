import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {actionCreators} from "../store";

class NewProjectDetail extends PureComponent {

    render() {
        console.log("asd")
        return (
            <div>this is new project</div>
        )
    }


}
//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({
    newProjectDetailMap: state.getIn(['newProject', 'newProjectDetailMap'])
});
const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(withRouter(NewProjectDetail));