import React, {PureComponent, Fragment} from 'react';
import {
    WeOfferFragment,
    WeOfferWrapper,
    Service,
    ServiceImg,
    WeOfferIcons,
    IconItem,
    DivLine,
    ServiceContent
} from '../componentStyles/WeOfferStyle';
import {connect} from 'react-redux';
import {constants} from "../store";

class WeOffer extends PureComponent {
    render() {
        return (
            <WeOfferFragment className='scale-control'>
                <WeOfferWrapper>
                    <Service>
                        <ServiceContent>
                            <div className='offer-title'>
                                <div className='title'>我们提供的服务</div>
                                <div className='rec'/>
                            </div>
                            <p className='offerContent'>{constants.WE_OFFER}</p>
                        </ServiceContent>
                        <ServiceImg>
                            <img src={constants.WE_OFFER_IMG} alt="" className='no-select'/>
                        </ServiceImg>
                    </Service>
                    <Service>
                        <ServiceImg>
                            <img src={constants.PRINCIPAL_IMG} alt="" className='no-select'/>
                        </ServiceImg>
                        <ServiceContent>
                            <div className='offer-title'>
                                <div className='title'>我们的四个坚持原则</div>
                                <div className='rec'/>
                            </div>
                            <p className='offerContent'>{constants.OUR_PRINCIPALS.OP1}</p>
                            <p className='offerContent'>{constants.OUR_PRINCIPALS.OP2}</p>
                            <p className='offerContent'>{constants.OUR_PRINCIPALS.OP3}</p>
                            <p className='offerContent'>{constants.OUR_PRINCIPALS.OP4}</p>
                        </ServiceContent>

                    </Service>

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
