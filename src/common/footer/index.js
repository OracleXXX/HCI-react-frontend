import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

import footerPic from '../../statics/imgs/footer/10.jpg'
import {
    FooterWrapper,
    AboutUs,
    FooterContent,
    FooterMain,
    FooterNav,
    FooterContactUs,
    PopularCities,
    CopyRight
} from './style';


class Footer extends PureComponent {
    /* 全局size是16px 16 * em应该等于目标size */

    /* 行高是标签高度除以正常行高 */

    render() {

        return (
            <FooterWrapper className="no-select scale-control">
                <AboutUs>
                    <div className="about-us-title">关于我们</div>
                    <div className="about-us-content">HCI是美国房地产投资股份有限公司 多年致力于北美房地产投资 投资内容包括开发 翻新 租赁
                        私人贷款等。向客户提供非中介的折扣型投资房源。为客户带来稳定回报率的同时，也辅助客户进行合理的资产配置、 线上线下同时展示北美房产投资咨询、一站式购房及管理服务
                    </div>
                </AboutUs>
                <img src={footerPic} alt="" className='footer-img scale-control'/>

                <FooterContent>
                    <FooterMain>
                        <FooterNav>
                            <div className="nav-items-footer">
                                <Link to={'/'}><div className="nav-title-footer pointer">网站导航</div></Link>
                                <Link to='/new-project'><div className='nav-item-footer pointer'>精选房源</div></Link>
                                <Link to='/one-step/management'><div className='nav-item-footer pointer'>一站式房屋管理</div></Link>
                                <Link to='/one-step/long-short'><div className='nav-item-footer pointer'>一站式房屋买卖</div></Link>
                                <Link to='/platform-loan'><div className='nav-item-footer pointer'>平台贷款</div></Link>
                            </div>
                        </FooterNav>
                        <div className='vertical-div-line'/>
                        <FooterContactUs>
                            <div className="nav-items-footer">
                                <Link to='/contact-us' ><div className="nav-title-footer pointer">联系我们</div></Link>
                                <div className='nav-item-footer'>(615)-423-2284</div>
                                <div className='nav-item-footer'><p>1609 Damascus Rd, Murfreesboro, TN, 37128</p></div>
                                <div className='nav-item-footer'>homecapus@gmail.com</div>
                            </div>
                        </FooterContactUs>
                        <div className='vertical-div-line'/>
                        <PopularCities>
                            <div className="nav-items-footer two-columns">
                                <div className="col-left">
                                    <div className="nav-title-footer col">热门城市</div>
                                   <a href="https://zh.wikipedia.org/wiki/%E7%BA%B3%E4%BB%80%E7%BB%B4%E5%B0%94"> <div className='nav-item-footer col'>纳什维尔</div></a>
                                    <div className='nav-item-footer col'>路易斯维尔</div>
                                    <div className='nav-item-footer col'>亚特兰大</div>
                                    <div className='nav-item-footer col'>鲍灵格林</div>
                                </div>
                                <div className="col-right">
                                    <div className='nav-item-footer col'>麦迪逊</div>
                                    <div className='nav-item-footer col'>默弗里斯伯勒</div>
                                    <div className='nav-item-footer col'>孟菲斯</div>
                                    <div className='nav-item-footer col'>阿什兰市</div>
                                    <div className='nav-item-footer col'>克拉克斯维尔</div>
                                </div>


                            </div>
                        </PopularCities>
                    </FooterMain>

                    <CopyRight>
                        <div className='horiz-div-line'/>
                        <div className='copyright-content'>&#169;2020 HOME CAP INC-All Rights Reserved</div>
                    </CopyRight>
                </FooterContent>

            </FooterWrapper>
        )


    }

}

export default connect(null, null)(Footer);