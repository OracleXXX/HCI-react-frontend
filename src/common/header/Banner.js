import React, {PureComponent} from 'react';
import {BannerWrapper, DemoWrapper, DemoTitle, DemoContent, Input, SearchButton} from './style';
import BannerPic from '../../statics/imgs/banner-large.png';
import Glass from '../../statics/imgs/iconFangDajing.svg';


class Banner extends PureComponent {
    render() {
        return (
            <BannerWrapper>
                <img className="banner" src={BannerPic} alt=''/>
                <DemoWrapper>
                    <DemoTitle>
                        我们将持续为客户提供更高效，多元的房地产项目组合，保障资产安全
                    </DemoTitle>
                    <DemoContent>
                            <Input>
                                <input type="text" placeholder='搜索房屋编号'/>
                                <SearchButton>
                                    <img src={Glass} alt=""/>
                                </SearchButton>
                            </Input>
                    </DemoContent>

                </DemoWrapper>
            </BannerWrapper>
        )
    }
}

export default Banner;
