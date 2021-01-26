import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {actionCreators} from "../store";

import {

  NewProjectDetailWrapper,
  NewProjectDetailContainer,
  TitlePath,






}
  from './newProjectDetailStyle';

class NewProjectDetail extends PureComponent {

  render() {
    return (
        <NewProjectDetailWrapper>
          <NewProjectDetailContainer>
            {this.getTitlePath()}
            {this.getSlider()}
            {this.getDataDescription()}
            {this.getTextDescription()}
            {this.getBasicInfo()}
            {this.getEmbeddedContactUs()}
          </NewProjectDetailContainer>
        </NewProjectDetailWrapper>
    )
  }

  getTitlePath() {
    return (
        <TitlePath>
          当前位置:
        </TitlePath>
    )

  };

  getSlider() {

  };

  getDataDescription() {

  };

  getTextDescription() {

  };

  getBasicInfo() {

  };

  getEmbeddedContactUs() {

  };

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getNewProjectDetail(id)
    // this.props.getNewProjectDetail(this.props.newProjectList);
    // this.scrollToMyRef()
  }
}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({
  newProjectDetailList: state.getIn(['newProject', 'newProjectDetailList'])
});
const mapDispatch = (dispatch) => ({
  getNewProjectDetail(id) {
    dispatch(actionCreators.getNewProjectDetail(id))
  }
});

export default connect(mapState, mapDispatch)(withRouter(NewProjectDetail));