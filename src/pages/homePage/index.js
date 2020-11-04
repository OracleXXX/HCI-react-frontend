import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {OfferWrapper, HomePageWrapper, HouseDemoWrapper} from "./style";
import {actionCreators} from './store';


class homePage extends PureComponent {

    render() {
        const {} = this.props;
        return (
            <HomePageWrapper>
                <OfferWrapper>我们提供什么</OfferWrapper>
                <HouseDemoWrapper>精选房源</HouseDemoWrapper>
            </HomePageWrapper>

        )
    }
    componentDidMount() {

    }


}

//用connect + mapstate 就可以直接取出store中的数据
const mapState = (state) => ({


});
const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(withRouter(homePage));


