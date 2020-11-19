import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
//css
import {
    PlatformLoanWrapper,
    Comment,
    LoanFlowChart,
    FlowChartMain,
    FLowCharLeft,
    FlowChartMid,
    MidItem,
    FlowChartRight,
    FlowChartImg,
    FlowChartItem,
    AdditionInfo,
    AdditionInfoContainer,
    AdditionInfoContainerItem,
    Circle

} from './style'
import {ActivityTitle as PlatformLoanTitle} from "../oneStepService/activities/style";

import loanPic from '../../statics/imgs/PlatformLoan/loanPic.png'
import arrowToBot from '../../statics/imgs/PlatformLoan/arrowToBot.png'
import arrowToLB from '../../statics/imgs/PlatformLoan/arrowToLB.png'
import arrowToRB from '../../statics/imgs/PlatformLoan/arrowToRB.png'


class PlatformLoan extends PureComponent {
    render() {
        return (
            <PlatformLoanWrapper>
                {/*title*/}
                <PlatformLoanTitle>
                    <div className='title'>平台贷款</div>
                    <div className='rec'/>
                </PlatformLoanTitle>
                {/*sub title*/}
                <Comment><p>平台作为房屋的所有者以房屋作为抵押向买方提供贷款。</p>
                    <p>买方向卖方支付不低于15%的首付，买卖双方商定其利率及分期付款的方式。（例：平台提供30年固定利率贷款，3年后将余额一次性付清）</p></Comment>
                {/*main area*/}
                <LoanFlowChart>
                    {/*flow chart*/}
                    <FlowChartMain>
                        {this.getFlowChartLeft()}
                        {this.getFlowChartMid()}
                        {this.getFlowChartRight()}
                    </FlowChartMain>
                    {/*the image, right over flow chart*/}
                    <FlowChartImg>
                        <img src={loanPic} alt=""/>
                    </FlowChartImg>
                </LoanFlowChart>
                {/*bottom part additional info*/}
                <AdditionInfo>
                    <AdditionInfoContainer>
                        <AdditionInfoContainerItem>
                            <div className="circle-content"><Circle/><span>Not Real Property</span></div>
                            <div className="circle-content"><Circle/><span>UCC Foreclosure Process</span></div>
                        </AdditionInfoContainerItem>
                        <AdditionInfoContainerItem>
                            <div className="circle-content"><Circle/><span>&lt;3 Months to foreclose</span></div>
                            <div className="circle-content"><Circle/><span>Nonjudicial Proceeding</span></div>
                        </AdditionInfoContainerItem>
                        <AdditionInfoContainerItem>
                            <div className="circle-content"><Circle/><span>Interest in Real Property</span></div>
                            <div className="circle-content"><Circle/><span>18-24 Months to Foreclose</span></div>
                        </AdditionInfoContainerItem>
                        <AdditionInfoContainerItem>
                            <div className="circle-content"><Circle/><span>Judicial Proceeding</span></div>
                            <div className="circle-content"><Circle/><span>Moratorium</span></div>
                        </AdditionInfoContainerItem>
                    </AdditionInfoContainer>
                </AdditionInfo>
            </PlatformLoanWrapper>
        )
    }
    /* left 3 steps in flow chart */
    getFlowChartLeft() {
        return (
            <FLowCharLeft>
                <FlowChartItem>
                    <div className="flow-chart-content">Owner of Real Estate Owner</div>
                </FlowChartItem>
                <img src={arrowToBot} alt="" className='arrow-to-bot'/>
                <FlowChartItem>
                    <div className="flow-chart-content">Real Estate Owner</div>
                </FlowChartItem>
                <img src={arrowToBot} alt="" className='arrow-to-bot'/>
                <FlowChartItem>
                    <div className="flow-chart-content">Real Estate</div>
                </FlowChartItem>
            </FLowCharLeft>
        )
    }
    /* mid in flow chart, only arrows*/
    getFlowChartMid() {
        return (
            <FlowChartMid>
                {this.getMidItem()}
                {this.getMidItem()}
            </FlowChartMid>
        )
    }
    /*arrow*/
    getMidItem() {
        return (
            <MidItem>
                <img src={arrowToRB} alt=""/>
                <img src={arrowToLB} alt=""/>

            </MidItem>
        )
    }
    /*right 2 steps in flow chart*/
    getFlowChartRight() {
        return (
            <FlowChartRight>
                <FlowChartItem>
                    <div className="flow-chart-content">Pledge of Ownership Interests</div>
                </FlowChartItem>
                <FlowChartItem>
                    <div className="flow-chart-content">Mortgage</div>
                </FlowChartItem>

            </FlowChartRight>
        )
    }
}
export default connect(null, null)(withRouter(PlatformLoan));
