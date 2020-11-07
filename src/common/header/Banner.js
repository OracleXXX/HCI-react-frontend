import React, {PureComponent} from 'react';
import {BannerWrapper, DemoWrapper, DemoTitle, DemoContent, Input, SearchButton} from './style';
import BannerPic from '../../statics/imgs/headerImgs/banner-large.png';
import Glass from '../../statics/imgs/headerImgs/iconFangDajing.svg';
import {connect} from 'react-redux';
class Banner extends PureComponent {
    render() {
        return (
            <BannerWrapper>
                <img className="banner" src={BannerPic} alt=''/>
                <DemoWrapper>
                    <DemoTitle>
                        我们将持续为客户提供更高效，多元的房地产项目配置组合，保障资产安全
                    </DemoTitle>
                     {/* 2.我们将坚持深耕于成本更低，成长潜力更高的地区，为客户提供高效的投资方案 */}
                     {/* 3.我们坚持传统行业互联网化的理念，建立专属资产配置的社群，让资源得到充分分享 */}
                     {/* 4. 我们将借助平台优势 提供平台自身房地产贷款服务 为客户撬动更大资本价值* /}

                     {/*2-3秒翻一页*/}
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

export default connect(null, null)(Banner);
