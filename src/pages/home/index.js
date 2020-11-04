import React, {Fragment, PureComponent} from 'react'
import Topic from "./components/Topic";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import List from "./components/List";
import {connect} from 'react-redux';
import {actionCreators} from './store';

import bannerPic from '../../statics/imgs/d6fef00898d91512776a22918cca39b0.jpg';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';


class Home extends PureComponent {

    handleScrollTop() {
        window.scroll(0, 0);
    }

    render() {
        return (
            <Fragment>


                <HomeWrapper>

                <HomeLeft>
                    <img className='banner-img' src={bannerPic} alt=""/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>

                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
            </HomeWrapper>
            </Fragment>


        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount() {
         window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());

    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 400) {
            dispatch(actionCreators.toggleTopShow(true));
        } else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
})

export default connect(mapState, mapDispatch)(Home);