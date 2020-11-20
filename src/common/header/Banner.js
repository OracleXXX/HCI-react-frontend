import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import {
    BannerWrapper,
    DemoWrapper,
    SliderContent,
    FixBannerSearch,
    Input,
    SearchButton,
    SliderItem
} from './BannerStyle';

//静态资源
import Glass from '../../statics/imgs/headerImgs/iconFangDajing.svg';
import {constants} from './store'

class Banner extends PureComponent {

    render() {

        return (
            <BannerWrapper className='no-select'>
                {/*<img className="banner" src={BannerPic} alt=''/>*/}
                <DemoWrapper>
                    <FixBannerSearch>
                        <Input>
                            <input type="text" placeholder='搜索房屋编号'/>
                            <SearchButton>
                                <img src={Glass} alt=""/>
                            </SearchButton>
                        </Input>
                    </FixBannerSearch>
                    <Slider {...constants.SLIDER_SETTINGS}>
                        {
                            constants.BANNER_CONTENT.map((item) => {
                                return (
                                    <SliderItem key={item.id}>
                                        <img className="banner" src={item.imgUrl} alt=''/>
                                        <SliderContent>{item.content}</SliderContent>
                                    </SliderItem>
                                )
                            })
                        }
                    </Slider>
                </DemoWrapper>

            </BannerWrapper>
        )
    }
}

export default connect(null, null)(Banner);
