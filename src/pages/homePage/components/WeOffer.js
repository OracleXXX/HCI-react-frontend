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
import {constants} from "../store";

//import images


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
                        <p className='offerContent'>{constants.WE_OFFER}</p>
                    </WeOfferLeft>
                    {/* 右边区域 */}
                    <WeOfferRight>
                        <img src={constants.WE_OFFER_IMG} alt="" className='no-select'/>
                    </WeOfferRight>

                    {/* 左下三个图标 */}
                    <WeOfferIcons className='no-select'>
                        <IconItem>
                            <img src={constants.REAL_ESTATE_RECMD_IMG} alt="" className='offerIcon'/>
                            <div className='offerName'>地产项目推荐</div>
                        </IconItem>=
                        <DivLine/>
                        <IconItem>
                            <img src={constants.LOAN_IMG} alt="" className='offerIcon'/>
                            <div className='offerName'>平台贷款</div>
                        </IconItem>
                        <DivLine/>
                        <IconItem>
                            <img src={constants.INVT_IMG} alt="" className='offerIcon'/>
                            <div className='offerName'>北美房地产投资指南</div>
                        </IconItem>
                    </WeOfferIcons>
                </WeOfferWrapper>

            </WeOfferFragment>


        )
    }
}


export default connect(null, null)(WeOffer);
