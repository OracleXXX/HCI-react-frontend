import React, {Component} from 'react';
import bannerPic from '../../statics/d6fef00898d91512776a22918cca39b0.jpg';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src={bannerPic} alt=""/>
                </HomeLeft>
                <HomeRight>right</HomeRight>

            </HomeWrapper>
        )
    }
}
export default Home;