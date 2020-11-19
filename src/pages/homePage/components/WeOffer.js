import React, {PureComponent} from 'react';
import {
    WeOfferFragment,
    WeOfferWrapper,
    WeOfferLeft,
    WeOfferRight,
    WeOfferIcons,
    IconItem,
    DivLine
} from '../componentStyles/WeOfferStyle';
import {connect} from 'react-redux';

//import images
import WeOfferPic from '../../../statics/imgs/homePageImgs/offerBG.png';
import RealEstateRecmdPic from '../../../statics/imgs/homePageImgs/RealEstateRecmd.svg';
import LoanPic from '../../../statics/imgs/homePageImgs/loan.svg';
import INVTPic from '../../../statics/imgs/homePageImgs/NAInvestment.svg';



class WeOffer extends PureComponent {
    render() {
        return (
            <WeOfferFragment className='scale-control'>
                <WeOfferWrapper>
                    {/* 左边区域 */}
                    <WeOfferLeft>
                        <div className='offerTitle'>我们提供什么
                            <div className='rec'/>
                        </div>
                        <p className='offerContent'>Home Cap Inc是美国房地产投资股份有限公司 多年致力于北美房地产投资 投资内容包括开发
                            翻新 租赁 私人贷款等。向客户提供非中介的折扣型投资房源。为客户带来稳定回报率的同时，也辅助客户进行合理的资产配置。
                            线上线下同时展示北美房产投资咨询。一站式购房及管理服务。</p>
                    </WeOfferLeft>
                    {/* 右边区域 */}
                    <WeOfferRight>
                        <img src={WeOfferPic} alt="" className='no-select'/>
                    </WeOfferRight>

                    {/* 左下三个图标 */}
                    <WeOfferIcons className='no-select'>
                        <IconItem>
                            <img src={RealEstateRecmdPic} alt="" className='offerIcon'/>
                            <div className='offerName'>地产项目推荐</div>
                        </IconItem>=
                        <DivLine/>
                        <IconItem>
                            <img src={LoanPic} alt="" className='offerIcon'/>
                            <div className='offerName'>平台贷款</div>
                        </IconItem>
                        <DivLine/>
                        <IconItem>
                            <img src={INVTPic} alt="" className='offerIcon'/>
                            <div className='offerName'>北美房地产投资指南</div>
                        </IconItem>
                    </WeOfferIcons>
                </WeOfferWrapper>

            </WeOfferFragment>


        )
    }
}


export default connect(null, null)(WeOffer);
